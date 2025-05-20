import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('AuthProvider mounted');
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log('Checking user with token:', token ? 'Token exists' : 'No token');
            
            if (token) {
                console.log('Making request to /api/users/me with token');
                const response = await axios.get('http://localhost:5000/api/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Full response from /api/users/me:', response);
                console.log('User data received:', response.data.data);
                setUser(response.data.data);
            } else {
                console.log('No token found, user is not logged in');
                setUser(null);
            }
        } catch (error) {
            console.error('Error checking user:', error.response?.data || error.message);
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            console.log('Attempting login with email:', email);
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });
            
            console.log('Full login response:', response);
            
            if (!response.data || !response.data.data) {
                console.error('Invalid response format:', response);
                return { 
                    success: false, 
                    error: 'Invalid server response' 
                };
            }

            const { accessToken, refreshToken, user: userData } = response.data.data;
            
            if (!accessToken) {
                console.error('No access token in response:', response.data);
                return { 
                    success: false, 
                    error: 'No access token received' 
                };
            }

            console.log('Login successful, user data:', userData);
            
            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            setUser(userData);
            
            return { success: true };
        } catch (error) {
            console.error('Login error details:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                headers: error.response?.headers
            });
            return { 
                success: false, 
                error: error.response?.data?.message || error.message || 'Login failed' 
            };
        }
    };

    const register = async (userData) => {
        try {
            console.log('Attempting registration with data:', { ...userData, password: '[REDACTED]' });
            const response = await axios.post('http://localhost:5000/api/users/register', userData);
            console.log('Registration successful:', response.data);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            return { 
                success: false, 
                error: error.response?.data?.message || 'Registration failed' 
            };
        }
    };

    const logout = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log('Attempting logout');
            if (token) {
                await axios.post('http://localhost:5000/api/users/logout', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            setUser(null);
            console.log('User logged out successfully');
        }
    };

    // Log whenever user state changes
    useEffect(() => {
        console.log('Auth state updated:', { 
            user: user ? { ...user, password: '[REDACTED]' } : null, 
            loading 
        });
    }, [user, loading]);

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            login, 
            register, 
            logout,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 
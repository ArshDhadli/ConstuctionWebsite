import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Settings() {
    const router = useRouter();
    const { user, loading, setUser } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        } else if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.name || '',
                email: user.email || ''
            }));
        }
    }, [user, loading, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:5000/api/users/update-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: 'Profile updated successfully' });
                if (data.data) {
                    setUser(data.data);
                }
            } else {
                setMessage({ type: 'error', text: data.message || 'Failed to update profile' });
            }
        } catch (error) {
            console.error('Profile update error:', error);
            setMessage({ type: 'error', text: 'An error occurred while updating profile' });
        } finally {
            setIsUpdating(false);
        }
    };

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'New passwords do not match' });
            return;
        }

        setIsUpdating(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:5000/api/users/update-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: 'Password updated successfully' });
                setFormData(prev => ({
                    ...prev,
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }));
            } else {
                setMessage({ type: 'error', text: data.message || 'Failed to update password' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'An error occurred while updating password' });
        } finally {
            setIsUpdating(false);
        }
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading...</p>
                    </div>
                </div>
            </>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

                    {message.text && (
                        <div className={`mb-4 p-4 rounded-md ${
                            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}>
                            {message.text}
                        </div>
                    )}

                    {/* Profile Settings */}
                    <div className="bg-white shadow rounded-lg mb-8">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h3>
                            <form onSubmit={handleProfileUpdate} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isUpdating}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    >
                                        {isUpdating ? 'Updating...' : 'Update Profile'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Password Settings */}
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                            <form onSubmit={handlePasswordUpdate} className="space-y-4">
                                <div>
                                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        id="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        id="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isUpdating}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    >
                                        {isUpdating ? 'Updating...' : 'Change Password'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 
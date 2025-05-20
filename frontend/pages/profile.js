import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Profile() {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

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
                    <div className="bg-white shadow rounded-lg">
                        {/* Profile Header */}
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                            <h3 className="text-2xl font-bold leading-6 text-gray-900">
                                Profile Information
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Your personal details and account information.
                            </p>
                        </div>

                        {/* Profile Content */}
                        <div className="px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
                                    <p className="mt-1 text-lg text-gray-900">{user.name}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Email Address</h4>
                                    <p className="mt-1 text-lg text-gray-900">{user.email}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Account Type</h4>
                                    <p className="mt-1 text-lg text-gray-900">Standard User</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Member Since</h4>
                                    <p className="mt-1 text-lg text-gray-900">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Actions */}
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="button"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 
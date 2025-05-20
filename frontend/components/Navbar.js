import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaCog, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    console.log('Navbar - Current user state:', user);
  }, [user]);

  const handleLogout = async () => {
    await logout();
    setShowProfileMenu(false);
  };

  // Function to get user's initial
  const getUserInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-secondary">
          BuildMaster
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-primary">Home</Link>
          <Link href="/services" className="font-medium hover:text-primary">Services</Link>
          <Link href="/projects" className="font-medium hover:text-primary">Projects</Link>
          <Link href="/about" className="font-medium hover:text-primary">About</Link>
          <Link href="/contact" className="font-medium hover:text-primary">Contact</Link>
          {loading ? (
            <div className="animate-pulse">Loading...</div>
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 font-medium hover:text-primary focus:outline-none"
              >
                {user.coverImage ? (
                  <img 
                    src={user.coverImage} 
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
                    {getUserInitial(user.name)}
                  </div>
                )}
              </button>
              
              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                  {/* User Info Section */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      {user.coverImage ? (
                        <img 
                          src={user.coverImage} 
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold">
                          {getUserInitial(user.name)}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <Link 
                    href="/dashboard" 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <FaUser className="mr-2" />
                    Dashboard
                  </Link>
                  <Link 
                    href="/profile" 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <FaUser className="mr-2" />
                    Profile
                  </Link>
                  <Link 
                    href="/settings" 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <FaCog className="mr-2" />
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="font-medium hover:text-primary">Login</Link>
              <Link href="/register" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 flex flex-col w-full p-4 mt-2 space-y-4 text-center bg-white shadow-lg md:hidden">
            <Link href="/" className="py-2 font-medium hover:text-primary">Home</Link>
            <Link href="/services" className="py-2 font-medium hover:text-primary">Services</Link>
            <Link href="/projects" className="py-2 font-medium hover:text-primary">Projects</Link>
            <Link href="/about" className="py-2 font-medium hover:text-primary">About</Link>
            <Link href="/contact" className="py-2 font-medium hover:text-primary">Contact</Link>
            {loading ? (
              <div className="py-2 animate-pulse">Loading...</div>
            ) : user ? (
              <>
                <div className="py-2 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    {user.coverImage ? (
                      <img 
                        src={user.coverImage} 
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold">
                        {getUserInitial(user.name)}
                      </div>
                    )}
                    <div className="text-left">
                      <p className="font-medium text-primary">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
                <Link href="/dashboard" className="py-2 font-medium hover:text-primary">Dashboard</Link>
                <Link href="/profile" className="py-2 font-medium hover:text-primary">Profile</Link>
                <Link href="/settings" className="py-2 font-medium hover:text-primary">Settings</Link>
                <button 
                  onClick={handleLogout}
                  className="py-2 font-medium text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="py-2 font-medium hover:text-primary">Login</Link>
                <Link href="/register" className="py-2 font-medium hover:text-primary">Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState } from 'react';
import Head from 'next/head';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact Us | BuildMaster Construction</title>
        <meta name="description" content="Get in touch with BuildMaster Construction for all your construction needs. Contact us for quotes, questions, or to discuss your project." />
      </Head>

      <Navbar />
      
      <main>
        {/* Contact Hero */}
        <div className="relative bg-secondary py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url("/api/placeholder/1920/400")',
              opacity: '0.3'
            }}
          />
          <div className="container relative text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Have questions or ready to start your construction project? Get in touch with our team today.
            </p>
          </div>
        </div>
        
        {/* Contact Info and Form */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 mr-4 text-white rounded-full bg-primary">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold">Our Location</h3>
                      <p className="text-gray-600">
                        123 Construction Ave<br />
                        Building City, ST 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 mr-4 text-white rounded-full bg-primary">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold">Phone Number</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 mr-4 text-white rounded-full bg-primary">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold">Email Address</h3>
                      <p className="text-gray-600">info@buildmaster.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 mr-4 text-white rounded-full bg-primary">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                  
                  {submitSuccess ? (
                    <div className="p-4 mb-6 text-green-700 bg-green-100 border border-green-400 rounded">
                      <p>Thank you for your message! We'll get back to you shortly.</p>
                    </div>
                  ) : submitError ? (
                    <div className="p-4 mb-6 text-red-700 bg-red-100 border border-red-400 rounded">
                      <p>There was an error sending your message. Please try again.</p>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block mb-2 font-medium">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block mb-2 font-medium">Your Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="6"
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">Find Us</h2>
              <p className="text-gray-600">Visit our office to discuss your construction project in person.</p>
            </div>
            
            <div className="h-96 bg-gray-300 rounded-lg shadow-md">
              {/* This would be replaced with an actual map component/iframe in a real implementation */}
              <div className="flex items-center justify-center h-full text-gray-500">
                <p className="text-lg font-bold">Map Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

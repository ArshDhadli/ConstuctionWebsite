import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">BuildMaster</h3>
            <p className="mb-4">Providing quality construction services for over 20 years. We build with excellence and integrity.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-primary"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-primary"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-primary"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#residential" className="hover:text-primary">Residential Construction</Link></li>
              <li><Link href="/services#commercial" className="hover:text-primary">Commercial Buildings</Link></li>
              <li><Link href="/services#renovation" className="hover:text-primary">Renovations</Link></li>
              <li><Link href="/services#design" className="hover:text-primary">Design Services</Link></li>
              <li><Link href="/services#consulting" className="hover:text-primary">Construction Consulting</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span>123 Construction Ave<br />Building City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <span>info@buildmaster.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-4 text-center bg-secondary border-t border-gray-700">
        <p>© {new Date().getFullYear()} BuildMaster Construction. All rights reserved.</p>
      </div>
    </footer>
  );
}
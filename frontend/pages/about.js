import Head from 'next/head';
import Link from 'next/link';
import { FaAward, FaUserTie, FaTools, FaHandshake } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const coreValues = [
    {
      icon: FaAward,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from planning to execution, ensuring the highest quality in every project we undertake."
    },
    {
      icon: FaUserTie,
      title: "Professionalism",
      description: "Our team maintains the highest standards of professionalism, with clear communication, punctuality, and respect for our clients and their properties."
    },
    {
      icon: FaTools,
      title: "Craftsmanship",
      description: "We take pride in our craftsmanship, employing skilled professionals who are masters of their trade and committed to quality work."
    },
    {
      icon: FaHandshake,
      title: "Integrity",
      description: "We conduct our business with transparency and honesty, building trust with our clients through ethical practices and keeping our promises."
    }
  ];

  const team = [
    {
      name: "Robert Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "With over 30 years in construction, Robert founded BuildMaster with a vision to provide exceptional quality and service in every project."
    },
    {
      name: "Sarah Williams",
      role: "Chief Architect",
      image: "/api/placeholder/300/300",
      bio: "Sarah brings 15 years of architectural experience, specializing in sustainable design and innovative building solutions."
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      image: "/api/placeholder/300/300",
      bio: "Michael ensures that every project runs smoothly, on time, and within budget, with meticulous attention to detail."
    },
    {
      name: "Lisa Martinez",
      role: "Interior Designer",
      image: "/api/placeholder/300/300",
      bio: "Lisa's creative vision transforms spaces into beautiful, functional environments tailored to each client's unique style and needs."
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | BuildMaster Construction</title>
        <meta name="description" content="Learn about BuildMaster Construction's history, our experienced team, and our commitment to quality in every construction project." />
      </Head>

      <Navbar />
      
      <main>
        {/* About Hero */}
        <div className="relative bg-secondary py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url("/api/placeholder/1920/400")',
              opacity: '0.3'
            }}
          />
          <div className="container relative text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About BuildMaster</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Building excellence and trust since 2003. Learn about our story, our team, and our commitment to quality.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
                <p className="mb-4 text-gray-600">
                  Founded in 2003 by Robert Johnson, BuildMaster Construction began as a small residential construction company with a big vision: to provide exceptional quality and service in every project we undertake.
                </p>
                <p className="mb-4 text-gray-600">
                  Over the past two decades, we've grown into a full-service construction company, handling projects from small home renovations to large commercial developments. Throughout our growth, we've maintained our commitment to craftsmanship, integrity, and customer satisfaction.
                </p>
                <p className="mb-4 text-gray-600">
                  Today, BuildMaster employs a team of over 50 construction professionals, including skilled tradesmen, project managers, designers, and support staff. We've completed more than 500 projects across the region, building a reputation for reliability, quality, and excellence in everything we do.
                </p>
                <p className="text-gray-600">
                  Our success is built on relationships – with our clients, our team members, and our community. We believe in treating people right, doing quality work, and standing behind everything we build.
                </p>
              </div>
              
              <div className="relative h-64 md:h-auto">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-lg shadow-xl"
                  style={{ backgroundImage: 'url("/api/placeholder/800/600")' }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
              <p className="text-gray-600">
                These principles guide everything we do at BuildMaster Construction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => (
                <div key={index} className="p-6 text-center bg-white rounded-lg shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-primary">
                    <value.icon size={32} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Meet Our Team</h2>
              <p className="text-gray-600">
                Our experienced professionals are dedicated to bringing your construction vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="mb-4 text-primary">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Certifications</h2>
              <p className="text-gray-600">
                BuildMaster maintains industry certifications that demonstrate our commitment to quality, safety, and professional standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {/* Certification logos would go here - using placeholders for now */}
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow">
                  <div className="text-sm text-center text-gray-500">Certification Logo</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 text-white bg-primary">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Work With Us?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact our team today to discuss your construction project and experience the BuildMaster difference.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Get In Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

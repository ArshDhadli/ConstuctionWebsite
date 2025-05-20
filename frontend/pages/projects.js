import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const allProjects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/modern-office",
      description: "A state-of-the-art office complex featuring sustainable design elements and modern amenities."
    },
    {
      title: "Luxury Residence",
      category: "Residential",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/luxury-residence",
      description: "Custom-built luxury home with high-end finishes and smart home technology integration."
    },
    {
      title: "Shopping Mall Renovation",
      category: "Renovation",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/mall-renovation",
      description: "Complete renovation of an existing shopping mall, modernizing the space while maintaining operations."
    },
    {
      title: "City Hospital Wing",
      category: "Commercial",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/hospital-wing",
      description: "Construction of a new specialized treatment wing for a major city hospital."
    },
    {
      title: "Community Center",
      category: "Commercial",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/community-center",
      description: "Multi-purpose community center featuring recreational facilities, meeting spaces, and event halls."
    },
    {
      title: "Modern Townhouse Development",
      category: "Residential",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/townhouse-development",
      description: "Development of 12 luxury townhouses with shared amenities and modern architectural design."
    },
    {
      title: "Historic Building Restoration",
      category: "Renovation",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/historic-restoration",
      description: "Careful restoration of a 100-year-old historic building, preserving original features while updating infrastructure."
    },
    {
      title: "Industrial Warehouse",
      category: "Commercial",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/industrial-warehouse",
      description: "Large-scale industrial warehouse with advanced logistics systems and sustainable energy solutions."
    },
    {
      title: "Beachfront Villa",
      category: "Residential",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/beachfront-villa",
      description: "Luxury beachfront villa designed to withstand coastal conditions while providing panoramic ocean views."
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Commercial', 'Residential', 'Renovation'];

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <>
      <Head>
        <title>Our Projects | BuildMaster Construction</title>
        <meta name="description" content="Explore our portfolio of completed construction projects, including residential homes, commercial buildings, and renovation work." />
      </Head>

      <Navbar />
      
      <main>
        {/* Projects Hero */}
        <div className="relative bg-secondary py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url("/api/placeholder/1920/400")',
              opacity: '0.3'
            }}
          />
          <div className="container relative text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Projects</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Explore our portfolio of successful construction projects across various sectors.
            </p>
          </div>
        </div>
        
        {/* Projects Filter and Gallery */}
        <section className="section">
          <div className="container">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center mb-12 space-x-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 mb-2 transition-colors duration-300 border rounded-full ${
                    activeFilter === category 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div key={index}>
                  <ProjectCard {...project} />
                  <div className="mt-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-1 text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="p-8 text-center bg-gray-100 rounded-lg">
                <p className="text-lg text-gray-600">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 text-white bg-secondary">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Let us help bring your construction vision to life with our expertise and quality craftsmanship.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

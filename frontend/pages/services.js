import Head from 'next/head';
import Link from 'next/link';
import { FaHome, FaBuilding, FaTools, FaPencilRuler, FaChartLine } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes built to your specifications with quality materials and expert craftsmanship.",
      icon: FaHome,
      link: "/services#residential",
      id: "residential",
      details: [
        "Custom home building",
        "Home additions and extensions",
        "Luxury home construction",
        "Multi-family residential buildings",
        "Energy-efficient home construction"
      ]
    },
    {
      title: "Commercial Buildings",
      description: "Office spaces, retail stores, and industrial facilities designed for functionality and efficiency.",
      icon: FaBuilding,
      link: "/services#commercial",
      id: "commercial",
      details: [
        "Office buildings and corporate spaces",
        "Retail and restaurant construction",
        "Industrial and manufacturing facilities",
        "Warehouses and storage units",
        "Healthcare and educational facilities"
      ]
    },
    {
      title: "Renovations",
      description: "Transform your existing space with our professional renovation and remodeling services.",
      icon: FaTools,
      link: "/services#renovation",
      id: "renovation",
      details: [
        "Kitchen and bathroom remodels",
        "Basement and attic conversions",
        "Commercial space renovations",
        "Historic building restoration",
        "Accessibility modifications"
      ]
    },
    {
      title: "Design Services",
      description: "Architectural design and planning to bring your construction project from concept to reality.",
      icon: FaPencilRuler,
      link: "/services#design",
      id: "design",
      details: [
        "Architectural planning",
        "Interior design",
        "3D visualization and rendering",
        "Sustainable and eco-friendly design",
        "Building code compliance planning"
      ]
    },
    {
      title: "Construction Consulting",
      description: "Expert advice and project management to ensure your construction project stays on track.",
      icon: FaChartLine,
      link: "/services#consulting",
      id: "consulting",
      details: [
        "Project management",
        "Budget planning and cost estimation",
        "Construction scheduling",
        "Quality control and inspections",
        "Building code and regulation compliance"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services | BuildMaster Construction</title>
        <meta name="description" content="Explore our wide range of residential and commercial construction services, from new builds to renovations and design services." />
      </Head>

      <Navbar />
      
      <main>
        {/* Services Hero */}
        <div className="relative bg-secondary py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url("/api/placeholder/1920/500")',
              opacity: '0.3'
            }}
          />
          <div className="container relative text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Construction Services</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Comprehensive construction solutions tailored to your specific needs. From concept to completion, we're with you every step of the way.
            </p>
          </div>
        </div>
        
        {/* Services Overview */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Detailed Services Sections */}
        {services.map((service, index) => (
          <section key={index} id={service.id} className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-64 md:h-96">
                    <div 
                      className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
                      style={{ backgroundImage: 'url("/api/placeholder/800/600")' }}
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="p-4 mb-6 text-white rounded-full bg-primary w-fit">
                    <service.icon size={24} />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-gray-600">{service.description}</p>
                  
                  <h3 className="mb-3 text-xl font-semibold">What we offer:</h3>
                  <ul className="mb-6 space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex items-center justify-center w-5 h-5 mt-1 mr-3 text-white rounded-full bg-primary text-xs">✓</div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="btn btn-primary">
                    Inquire About {service.title}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* Call to Action */}
        <section className="py-24 text-white bg-primary">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold">Need a Custom Solution?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Our team can create a tailored construction plan to meet your specific requirements and preferences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us Today
              </Link>
              <Link href="/quote" className="btn border-2 border-white hover:bg-white hover:text-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
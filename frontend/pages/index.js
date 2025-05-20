import Head from 'next/head';
import Link from 'next/link';
import { FaHome, FaBuilding, FaTools, FaPencilRuler, FaChartLine } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes built to your specifications with quality materials and expert craftsmanship.",
      icon: FaHome,
      link: "/services#residential"
    },
    {
      title: "Commercial Buildings",
      description: "Office spaces, retail stores, and industrial facilities designed for functionality and efficiency.",
      icon: FaBuilding,
      link: "/services#commercial"
    },
    {
      title: "Renovations",
      description: "Transform your existing space with our professional renovation and remodeling services.",
      icon: FaTools,
      link: "/services#renovation"
    },
    {
      title: "Design Services",
      description: "Architectural design and planning to bring your construction project from concept to reality.",
      icon: FaPencilRuler,
      link: "/services#design"
    },
    {
      title: "Construction Consulting",
      description: "Expert advice and project management to ensure your construction project stays on track.",
      icon: FaChartLine,
      link: "/services#consulting"
    }
  ];

  const featuredProjects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/modern-office"
    },
    {
      title: "Luxury Residence",
      category: "Residential",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/luxury-residence"
    },
    {
      title: "Shopping Mall Renovation",
      category: "Renovation",
      imageSrc: "/api/placeholder/600/400",
      link: "/projects/mall-renovation"
    }
  ];

  const testimonials = [
    {
      name: "John Davis",
      role: "Homeowner",
      text: "BuildMaster constructed our dream home exactly to specifications. Their attention to detail and quality of work exceeded our expectations.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      text: "The team at BuildMaster delivered our commercial project on time and within budget. Their professionalism and communication throughout the process was exceptional.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Property Developer",
      text: "I've worked with many construction companies over the years, and BuildMaster stands out for their reliability and quality craftsmanship.",
      rating: 4
    }
  ];

  return (
    <>
      <Head>
        <title>BuildMaster Construction | Quality Building Services</title>
        <meta name="description" content="Professional construction services for residential and commercial projects. BuildMaster delivers quality craftsmanship and excellent service." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Construction Services</h2>
              <p className="text-gray-600">
                We offer a comprehensive range of construction services to meet all your building needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/services" className="btn btn-primary">View All Services</Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Why Choose BuildMaster For Your Construction Needs</h2>
                <p className="mb-6 text-gray-600">
                  With over 20 years of experience in the construction industry, we have built a reputation for excellence, reliability, and customer satisfaction.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-primary">1</div>
                    <div>
                      <h3 className="text-xl font-bold">Quality Craftsmanship</h3>
                      <p className="text-gray-600">We use only the highest quality materials and employ skilled professionals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-primary">2</div>
                    <div>
                      <h3 className="text-xl font-bold">On-Time Delivery</h3>
                      <p className="text-gray-600">We understand the importance of deadlines and work efficiently to meet them.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-primary">3</div>
                    <div>
                      <h3 className="text-xl font-bold">Transparent Pricing</h3>
                      <p className="text-gray-600">Our detailed quotes ensure you know exactly what you're paying for.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-primary">4</div>
                    <div>
                      <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                      <p className="text-gray-600">We prioritize your needs and ensure your complete satisfaction with the final product.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-96 lg:h-auto">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-lg shadow-xl"
                  style={{ backgroundImage: 'url("/api/placeholder/800/600")' }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
              <p className="text-gray-600">
                Take a look at some of our recent construction projects showcasing our expertise and quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/projects" className="btn btn-primary">View All Projects</Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 text-white bg-primary">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Start Your Construction Project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact us today for a free consultation and quote. Let's bring your construction vision to life.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Get a Free Quote
            </Link>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
              <p className="text-gray-600">
                Don't just take our word for it. Here's what our clients have to say about working with BuildMaster.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

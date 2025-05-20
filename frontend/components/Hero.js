import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-secondary">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("/api/placeholder/1920/800")',
          opacity: '0.4'
        }}
      />
      <div className="container relative flex items-center px-4 py-32 text-white">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Building Your Vision With Excellence
          </h1>
          <p className="mb-8 text-xl">
            Quality construction services for residential and commercial projects. 
            We bring your ideas to life with expert craftsmanship and attention to detail.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">Get In Touch</Link>
            <Link href="/projects" className="btn border-2 border-white hover:bg-white hover:text-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function ProjectCard({ title, category, imageSrc, link }) {
  return (
    <Link href={link} className="block overflow-hidden transition-transform duration-300 rounded-lg shadow-lg group hover:-translate-y-2">
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${imageSrc}")` }}
        />
        <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-40" />
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-primary">{category}</p>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </Link>
  );
}

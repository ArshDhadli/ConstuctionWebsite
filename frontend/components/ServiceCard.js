import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ServiceCard({ title, description, icon: Icon, link }) {
  return (
    <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <div className="p-4 mb-4 text-white rounded-full bg-primary w-fit">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <Link href={link} className="flex items-center text-primary hover:underline">
        Learn More <FaArrowRight className="ml-2" size={14} />
      </Link>
    </div>
  );
}

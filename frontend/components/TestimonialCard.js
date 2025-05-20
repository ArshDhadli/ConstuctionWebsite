import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ name, role, text, rating }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"} 
            size={18} 
          />
        ))}
      </div>
      <p className="mb-6 italic text-gray-600">"{text}"</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  icon,
  title,
  category,
  description,
}) {
  return (
    <div className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sea-light via-white to-sea-light opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Icon */}
        <div className="mb-6 text-sea-primary transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-sea-dark mb-1">
          {title}
        </h3>

        <span className="text-sm uppercase tracking-wider text-gray-500">
          {category}
        </span>

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          <div className="bg-sea-primary text-white p-2 rounded-full shadow-md">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

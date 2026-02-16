import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function PageHeader({ title }) {
//   const location = useLocation();

  return (
    <section className="bg-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Home size={16} />
          <Link
            to="/"
            className="hover:text-sea-primary transition font-medium"
          >
            Home
          </Link>

          <span>›</span>

          <span className="text-sea-dark font-medium">
            {title}
          </span>
        </div>

        {/* Divider Line */}
        <div className="border-b border-gray-300 mt-4"></div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-sea-dark mt-8 leading-tight max-w-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

import ServiceCard from "./ServiceCard";
import { Globe, Target, Lightbulb } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-sea-gradient1 via-sea-gradient2 to-sea-gradient3">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ServiceCard
            icon={<Globe size={40} />}
            title="IT Services"
            category="IT SERVICES"
            description="From websites to mobile apps, our IT services are built for performance, security, and scalability."
          />

          <ServiceCard
            icon={<Target size={40} />}
            title="Digital Marketing Services"
            category="MARKETING"
            description="We combine strategy, creativity, and data to craft marketing campaigns that convert."
          />

          <ServiceCard
            icon={<Lightbulb size={40} />}
            title="Consultancy Services"
            category="STRATEGY"
            description="We help businesses make smarter moves with expert digital consultation and strategic insights."
          />

        </div>
      </div>
    </section>
  );
}

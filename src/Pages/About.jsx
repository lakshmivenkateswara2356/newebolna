import Footer from "../components/Footer";
import VisionSection from "../components/VisionSection";
import WhyChooseUs from "../components/WhyChooseUs";
import image from "../Assets/about.webp"
import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <>
    <div className="bg-white py-20">
    <PageHeader title="Where Bold Ideas Meet Seamless Execution." />
    </div>
    <section className="bg-white py-20">
         
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src={image}
            alt="Team working"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sea-primary font-semibold tracking-wide text-sm">
            ABOUT OUR COMPANY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-sea-deep mt-4 leading-tight">
            Working together <br /> to deliver value
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            We blend creativity, strategy, and technology to empower businesses
            digitally. From websites to mobile apps, digital marketing to
            automation—our expert team builds tailored solutions that fuel growth.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-sea-dark font-medium">
            {[
              "Digital-First Experiences",
              "Growth-Driven Marketing",
              "Smart Cloud Workspaces",
              "AI Tools That Scale",
              "Modern Business Profiles",
              "Seamless Email Automation",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-sea-primary">✔</span>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

      <WhyChooseUs/>
      <VisionSection/>
      
    </section>
    <Footer/>
    </>
  );
}

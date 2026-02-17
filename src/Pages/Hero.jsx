import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import background from "../Assets/premium_photo-1754262044723-ec60be088818 (1).avif";
import Navbar from "../components/Navbar";
import second from "../Assets/kelvin-zyteng-X5tXk8WSBks-unsplash.jpg";
import aboutImg from "../Assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg";
import { Globe, Target, Cpu, Sparkles, ArrowRight } from "lucide-react";
import Leadership from "../components/Leadership";
import DigitalExperience from "../components/DigitalExperience";
import Footer from "../components/Footer";

/* ---------------- SERVICES ---------------- */
const services = [
  { id: 1, icon: Globe, title: "IT Services", subtitle: "Web & App", description: "Smart Code, Seamless Experiences—Engineering the Digital Future.", gradient: "to-[#0A6CFF1a]" },
  { id: 2, icon: Target, title: "Digital Marketing", subtitle: "Social Media", description: "Creativity Meets Strategy—Marketing That Delivers, Every Time.", gradient: "to-[#0A6CFF26]" },
  { id: 3, icon: Cpu, title: "WayStars AI", subtitle: "Artificial Intelligence", description: "AI-powered solutions designed to automate, predict, and scale.", gradient: "to-[#0A6CFF33]" },
  { id: 4, icon: Sparkles, title: "Athena", subtitle: "Automation", description: "Intelligent automation that simplifies complex workflows.", gradient: "to-[#0A6CFF26]" },
  { id: 5, icon: Sparkles, title: "Athena", subtitle: "Automation", description: "Intelligent automation that simplifies complex workflows.", gradient: "to-[#0A6CFF26]" },
  { id: 6, icon: Sparkles, title: "Athena", subtitle: "Automation", description: "Intelligent automation that simplifies complex workflows.", gradient: "to-[#0A6CFF26]" },
];

/* ---------------- SERVICE CARD ---------------- */
const ServiceCard = ({ icon: Icon, title, subtitle, description, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -12 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-3xl p-10 border
               overflow-hidden hover:shadow-2xl"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-transparent ${gradient}`} />

    <div className="relative z-10">
      <Icon size={48} className="text-[#0A6CFF] mb-6" />
      <p className="text-gray-700 mb-6">{description}</p>
      <h3 className="text-xl font-bold text-[#003A8F]">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>

    <div className="absolute bottom-8 right-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition">
      <div className="w-12 h-12 rounded-full bg-[#0A6CFF] flex items-center justify-center text-white">
        <ArrowRight size={18} />
      </div>
    </div>
  </motion.div>
);

/* ---------------- MAIN ---------------- */
const Hero = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen">
        <Navbar />
        <img src={background} alt="hi" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-7xl font-light leading-tight"
            >
              TECH & DIGITAL <br />
              <span className="font-bold text-[#0A6CFF]">EXPERIENCE</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="text-6xl font-bold">
                <CountUp start={1} end={100} duration={2.5} />+
              </h2>
              <p className="text-xl">Completed Projects</p>
              <p className="text-lg mt-2">
                Volna Technologies is your all-in-one digital powerhouse.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIXED IMAGE */}
      <section className="relative min-h-screen">
        <div className="fixed inset-0 -z-10">
          <img src={second} alt="hi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* ABOUT */}
        <section className="bg-[#f7f6fb] py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src={aboutImg} alt="hi" className="rounded-2xl w-full" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-10 right-10 bg-gradient-to-br from-[#0A6CFF] to-white text-white rounded-2xl p-8 lg:w-56 w-25"
              >
                <h2
                  className="lg:text-[96px]  text-[42px] font-extrabold text-transparent"
                  style={{ WebkitTextStroke: "2px white" }}
                >
                  03
                </h2>
                <p className="font-bold">Years Experience</p>
              </motion.div>
            </motion.div>

            <motion.div
              
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="uppercase text-sm font-semibold mb-4 text-[#0A6CFF]">
                About Our Company
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Driven by Vision, Defined by Innovation.
              </h2>
              <p className="text-gray-700 mb-10 max-w-xl">
                At volna., we blend technology, AI, cloud and automation
                to help businesses scale faster.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TRANSPARENT CONTENT */}
        <div className="min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 text-white"
          >
            <h2 className="text-5xl font-bold mb-6">
              Trusted by businesses,<br />
respected for results
            </h2>
            
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f6f7fb] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 rounded-3xl p-10 text-white bg-gradient-to-br from-[#003A8F] to-[#0A6CFF]">
            <p className="uppercase text-sm mb-6">Our Products & Services</p>
            <h2 className="text-4xl font-bold">
              A Complete Tech & AI Ecosystem Built to Scale
            </h2>
          </div>

          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      
      <DigitalExperience />
      <Footer/>
    </>
  );
};

export default Hero;

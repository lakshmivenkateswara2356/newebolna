import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does Volna Technologies offer?",
    answer:
      "We offer end-to-end digital solutions including IT services (web & app development), digital marketing, business consultation, private cloud storage, email automation, AI tools, and NFC-enabled business profiles.",
  },
  {
    question: "Who can benefit from Volna Technologies services and products?",
    answer:
      "Startups, SMEs, enterprises, and individuals looking to scale digitally can benefit from our solutions.",
  },
  {
    question: "How is Volna Technologies different from other digital agencies?",
    answer:
      "We focus on innovation, measurable results, and long-term partnerships with guaranteed satisfaction.",
  },
];

const DigitalExperience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#f3f6ff] to-[#fdf2f8] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-purple-800 mb-4">
            OUR DIGITAL EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Not Just Innovation.
            <br />
            Reinvention.
          </h2>

          {/* CHECKLIST */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="space-y-4 mb-12"
          >
            {[
              "Expert Team with Proven Excellence",
              "Your Satisfaction, Fully Guaranteed—Every Time",
              "From Concept to Execution",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3 text-lg"
              >
                <span className="w-6 h-6 flex items-center justify-center border border-black rounded-md">
                  ✓
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* STATS */}
          <div className="flex items-center gap-14">
            <StatCircle value="94%" label="Satisfied Clients" />
            <div className="h-20 w-px bg-gray-300" />
            <StatCircle value="88%" label="Company Growth" />
          </div>
        </div>

        {/* RIGHT SIDE - FAQ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center py-6 text-left font-semibold text-lg"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

/* 🔵 ANIMATED STAT CIRCLE */
const StatCircle = ({ value, label }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="relative w-28 h-28 mx-auto mb-4">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border-[10px] border-blue-600 border-l-transparent border-b-blue-500"
      />
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
        {value}
      </div>
    </div>
    <p className="font-semibold">{label}</p>
  </motion.div>
);

export default DigitalExperience;

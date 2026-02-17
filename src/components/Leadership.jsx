import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Mr. Visionary",
    role: "CEO & Founder",
    image:
      "",
  },
  {
    name: "Sukhleen Kaur",
    role: "Workforce & Administration",
    image:
      "",
  },
  {
    name: "Salman Ali Hussaini",
    role: "Project Manager",
    image:
      "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Leadership = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest text-purple-800 font-semibold"
        >
          LEADERSHIP
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mt-4 mb-16"
        >
          Our Team of Seasoned Professionals
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-3xl overflow-hidden bg-white shadow-lg group"
            >
              {/* Image */}
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-[380px] object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />

              {/* Card Content */}
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 bg-white p-6 flex items-center gap-4"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  className="bg-blue-600 text-white p-3 rounded-lg"
                >
                  🔗
                </motion.div>

                <div className="text-left">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Leadership;

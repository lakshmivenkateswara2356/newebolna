import { useEffect, useState } from "react";

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discovery & Requirement Mapping",
      icon: "⚙️",
    },
    {
      number: "02",
      title: "Content & System Structuring",
      icon: "📄",
    },
    {
      number: "03",
      title: "Agile Development Workflow",
      icon: "💡",
    },
    {
      number: "04",
      title: "Launch & Digital Empowerment",
      icon: "🤝",
    },
  ];

  // Auto step progress like timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500); // change speed here

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf7fb] to-[#eef3ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Top Heading */}
        <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
          HOW WE WORK
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          BRILLIANT RESULTS BEGIN WITH A SMARTER, SEAMLESS PROCESS
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mb-20">
          At volna., our approach is built for clarity, collaboration, and speed.
          From the first exchange to final delivery, we turn complex ideas into powerful
          digital realities—smoothly, strategically, and successfully.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
          {steps.map((step, index) => {
            const isActive = index === activeStep;

            return (
              <div key={index} className="flex flex-col items-center relative">

                {/* Circle */}
                <div
                  className={`relative flex items-center justify-center w-36 h-36 rounded-full
                  ${
                    isActive
                      ? "bg-gradient-to-br from-black to-blue-600 text-white"
                      : "border border-gray-300 text-gray-700"
                  }`}
                >
                  {/* Rotating white dot */}
                  {isActive && (
                    <div className="absolute inset-0 rotate-dot">
                      <span className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md"></span>
                    </div>
                  )}

                  {/* Icon */}
                  <span className="text-4xl">{step.icon}</span>
                </div>

                {/* Large faint number */}
                <div className="mt-10 text-7xl font-extrabold text-black/10">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-black max-w-xs">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

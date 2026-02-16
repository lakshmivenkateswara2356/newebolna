export default function WhyChooseUs() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Left */}
        <div>
          <p className="text-sea-primary font-semibold text-sm tracking-wide">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-sea-deep mt-6 leading-tight">
            Because we don’t just build tech.
            <br /> We build trust, value, and the future.
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-8">
          {[
            {
              title: "Strategic Expertise",
              desc: "Decades of experience turned into tailored solutions that actually move the needle.",
            },
            {
              title: "Human-Centric Values",
              desc: "We collaborate with care, keeping transparency, ethics, and your goals at the heart.",
            },
            {
              title: "Future-Ready Innovation",
              desc: "From AI to cloud to code—we harness tomorrow’s tech to solve today’s problems.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-sea-light pb-6">
              <h4 className="text-sea-primary font-semibold text-lg">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

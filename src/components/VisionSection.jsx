import image from "../Assets/girl.webp"

export default function VisionSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Image + Badge */}
   <div className="relative max-w-md mx-auto">
  <img
    src={image}
    alt="Professional team"
    className="rounded-2xl shadow-xl w-full object-cover"
  />

  <div className="absolute top-6 left-6 bg-sea-deep text-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-4xl font-bold">03</h3>
    <p className="text-sm mt-1">Years Experience</p>
  </div>
</div>

        {/* Content */}
        <div>
          <p className="text-sea-primary font-semibold text-sm tracking-wide">
            ABOUT OUR COMPANY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-sea-deep mt-6 leading-tight">
            Driven by Vision, Defined by Innovation.
            <br /> This is WebWorks Co.
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            We blend cutting-edge technology, strategic marketing, AI, cloud,
            and automation to help businesses grow smarter and faster.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "IT Services",
              "Digital Marketing Services",
              "WayStars AI",
              "Athena",
              "BizKonnect Pro",
            ].map((service, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-3 text-sea-dark font-medium hover:text-sea-primary transition"
              >
                {service}
                <span>→</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

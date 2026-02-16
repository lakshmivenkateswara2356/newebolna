import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_5sta1be",        // ✅ Service ID
        "template_g4nej9z",       // ✅ Template ID
        formRef.current,
        "dRcxA4Y8esweiPgn9"        // ✅ Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Try again.");
        setLoading(false);
      });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#f6f1f7] to-[#eef3ff]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-14">
          <p className="text-purple-800 font-semibold mb-3">
            HAVE QUESTIONS?
          </p>

          <h2 className="text-3xl font-extrabold mb-10">
            Send us a Message
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

            {/* Name */}
            <div>
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border-b border-gray-300 focus:border-purple-700 outline-none py-2"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-600 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-b border-gray-300 focus:border-purple-700 outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border-b border-gray-300 focus:border-purple-700 outline-none py-2"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-600 mb-2">
                Tell Us About Your Project <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border-b border-gray-300 focus:border-purple-700 outline-none py-2 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 bg-gradient-to-br from-black to-purple-900 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "✈️ Get In Touch"}
            </button>

          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="pt-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Contact Information
          </h2>

          <p className="text-gray-600 max-w-md mb-12">
            We’re here to connect, collaborate, and create something exceptional.
            Reach out—we’d love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div>
              <h4 className="font-bold text-lg mb-3">Phone</h4>
              <p className="text-gray-700">+917842802368</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">Business Address</h4>
              <p className="text-gray-700 leading-relaxed">
                East Godavari, Malikipuram Mandal,<br />
                Gudapalli – 533244<br />
                Andhra Pradesh, India
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">Email</h4>
              <p className="text-gray-700">contact@volna.co.in</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { Send, Facebook, Linkedin } from "lucide-react";
import Logo from '../Assets/volnaLogo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#012f34] via-[#024950] to-[#0fb9b1] text-white">
      
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        
        {/* BRAND */}
        <div>
          <div className="flex gap-2">
           <img src={Logo} alt="volna logo" className="h-[50px]"/>
           <div>
          <h2 className="text-2xl font-bold tracking-wide mt-2">
            Volna Technologies
          </h2>

          <p className="text-sm text-white/80 mt-2 max-w-xs">
            The change you have been looking for.
          </p>
            </div>
          </div>

          

          {/* SOCIAL */}
          <div className="flex gap-6 mt-6">
           <a
  href="https://facebook.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#012f34] transition"
>
  <Facebook size={18} />
</a>

<a
  href="https://linkedin.com/company/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#012f34] transition"
>
  <Linkedin size={18} />
</a>

          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Company</h3>
          <ul className="space-y-4 text-white/80">
            {["Home", "About", "Services", "Products", "Contact", "Team"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Resources</h3>
          <ul className="space-y-4 text-white/80">
            {[
              "Blogs",
              "Cookie Policy",
              "Terms & Conditions",
              "Privacy Policy",
              "Shipping Policy",
              "Refund Policy",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Newsletter</h3>

          <p className="text-white/80 mb-6">
            Join our subscriber list to get the latest news and special offers
            instantly.
          </p>

          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-full py-4 pl-6 pr-16 text-[#012f34] outline-none"
            />

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2
                         w-12 h-12 rounded-full bg-[#012f34]
                         flex items-center justify-center
                         hover:bg-[#024950] transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-white/80">
        © 2025 All Rights Reserved. Volna Technologies Pvt Ltd <br />
        </div>
    </footer>
  );
};

export default Footer;

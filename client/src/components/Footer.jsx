import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Subscribed successfully!");
        setEmail("");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#020617] text-gray-300 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Lazar Joy</h3>
          <p className="text-sm text-gray-400 mb-4">
            Passionate Full Stack Developer specializing in the MERN stack, building dynamic and scalable web applications.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="hover:text-orange-500 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              aria-label="Website"
            >
              <FaGlobe />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Frontend UI Design</li>
            <li>Backend APIs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-[#0a0f1c] border border-gray-700 mb-3 outline-none focus:border-orange-500"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-md text-white transition"
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lazar G. All rights reserved.
      </div>
    </footer>
  );
}
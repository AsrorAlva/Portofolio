import contactData from "../data/contact.json";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_iqy251f",        // 🔹 ganti dengan Service ID kamu
        "template_3prw7bm",       // 🔹 ganti dengan Template ID kamu
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "asroralvaizzi191919@gmail.com", // email tujuanmu
        },
        "Dm-eB6L1IDX0OKB0B"     // 🔹 ganti dengan Public Key dari EmailJS
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{contactData.title}</h2>
        <p className="text-gray-700 mb-12">{contactData.description}</p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-6 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Simple Social Links */}
        <div className="flex justify-center gap-6 text-lg font-medium">
          <a
            href={contactData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 LinkedIn
          </a>
          <a
            href={contactData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

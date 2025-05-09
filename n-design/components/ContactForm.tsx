"use client";

import { useState, useEffect } from "react";

type Props = {
  trigger: boolean;
};

export default function ContactForm({ trigger }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-lg bg-[#1a1a1a] p-8 rounded-lg shadow-lg transition-all duration-5000 ${
        trigger ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-6 text-white text-center">
        Get in Touch
      </h3>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#f0a500] placeholder-gray-500 transition"
          required
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#f0a500] placeholder-gray-500 transition"
          required
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-md bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#f0a500] placeholder-gray-500 transition"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black p-3 rounded-md font-semibold hover:bg-[#d18f00] transition"
      >
        Send Message
      </button>

      {submitted && (
        <p className="text-center text-green-500 mt-4 animate-fadeIn">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}

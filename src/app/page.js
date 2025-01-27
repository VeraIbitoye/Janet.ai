"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-blue-400 to-gray-500 text-white fixed w-full z-20 shadow-lg top-0 left-0"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Janet</h1>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-blue-400 to-gray-500 md:bg-transparent md:flex md:space-x-6 text-center md:text-left transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["Home", "About Me", "Contact", "Assignment"].map((link) => (
              <li key={link} className="md:py-0 py-2">
                <a
                  href={`#${link.replace(" ", "").toLowerCase()}`}
                  className="block text-white hover:text-pink-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Sections */}
      <div className="mt-24">
        {/* Home Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-gray-400 text-white text-center px-4"
        >
          <motion.img
            src="/my-pictures.jpg"
            alt="My Picture"
            className="w-72 h-72 rounded-full border-4 border-pink-300 shadow-2xl object-cover"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-6 text-5xl font-extrabold"
          >
            Hello, I'm{" "}
            <span className="text-pink-300">Fakolujo Janet Omowunmi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg max-w-3xl"
          >
            Welcome to my portfolio!
          </motion.p>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="aboutme"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 py-12"
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-blue-400">
            About Me
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-gray-700 max-w-4xl"
          >
            Hi, I'm Fakolujo Janet Omowunmi, a dedicated Computer Science student at 
            Yaba College of Technology (YABATECH). With a strong passion for technology
             and problem-solving, I'm constantly exploring new concepts in programming,
              software development, and data analysis. My academic journey, under matric 
              number F/HD/23/3210035, has equipped me with valuable skills in coding, algorithm 
              design, and system analysis. I'm eager to contribute my knowledge to innovative projects
             and continuously expand my expertise in the ever-evolving tech industry.
          </motion.p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-center px-4 py-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-pink-300"
          >
            Contact Me
          </motion.h2>
          <motion.div variants={item} className="mt-6 space-y-4 text-lg">
            <p className="text-gray-700">
              <strong>Phone:</strong> +234 812 042 9916
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> fakjanet@gmail.com
            </p>
          </motion.div>
        </motion.section>

        {/* Assignment Section */}
        <motion.section
  id="assignment"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 py-12"
>
  <motion.h2 variants={item} className="text-4xl font-bold text-blue-400">
    Assignment
  </motion.h2>
  <div className="mt-8 max-w-3xl space-y-6 text-left text-gray-700">
    {[
      {
        title: "Machine Learning",
        content:
          "Machine learning empowers computers to identify patterns and improve their decision-making abilities based on data, without explicit programming instructions.",
      },
      {
        title: "Artificial Intelligence (AI)",
        content:
          "AI involves creating intelligent systems that can perform tasks typically requiring human intellect, such as analyzing data and making informed decisions.",
      },
      {
        title: "Supervised Learning",
        content:
          "This learning approach relies on labeled data to help a model learn patterns and make accurate predictions based on examples provided.",
      },
      {
        title: "Unsupervised Learning",
        content:
          "Unsupervised learning allows models to find hidden structures in data that hasn't been labeled, helping with clustering and data organization.",
      },
      {
        title: "Deep Learning",
        content:
          "Deep learning uses multi-layered neural networks to analyze complex data, enabling advanced tasks such as image recognition and natural language processing.",
      },
    ].map(({ title, content }) => (
      <motion.div key={title} variants={item}>
        <h3 className="text-2xl font-bold text-pink-300">{title}</h3>
        <p>{content}</p>
      </motion.div>
    ))}
  </div>
</motion.section>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gradient-to-r from-blue-400 to-gray-500 text-gray-100 text-center py-6"
      >
        <p>&copy; 2025 Janet. Designed with love. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

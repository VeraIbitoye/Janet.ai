"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAssignment2, setShowAssignment2] = useState(false);

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
          <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-blue-400 to-gray-500 md:bg-transparent md:flex md:space-x-6 text-center md:text-left transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
            {["Home", "About Me", "Contact", "Assignment"].map((link) => (
              <li key={link} className="md:py-0 py-2">
                <a href={`#${link.replace(" ", "").toLowerCase()}`} className="block text-white hover:text-pink-300 transition-colors" onClick={() => setMenuOpen(false)}>
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
        <motion.section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-gray-400 text-white text-center px-4">
          <motion.img src="/my-pictures.jpg" alt="My Picture" className="w-72 h-72 rounded-full border-4 border-pink-300 shadow-2xl object-cover" whileHover={{ scale: 1.1, rotate: 5 }} />
          <motion.h1 className="mt-6 text-5xl font-extrabold">
            Hello, I'm{" "}
            <span className="text-pink-300">Fakolujo Janet Omowunmi</span>
          </motion.h1>
          <motion.p className="mt-4 text-lg max-w-3xl">Welcome to my portfolio!</motion.p>
        </motion.section>

        {/* About Me Section */}
        <motion.section id="aboutme" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-blue-400">About Me</motion.h2>
          <motion.p className="mt-6 text-lg text-gray-700 max-w-4xl">
            Hi, I'm Fakolujo Janet Omowunmi, a dedicated Computer Science student at Yaba College of Technology (YABATECH). With a strong passion for technology and problem-solving, I'm constantly exploring new concepts in programming, software development, and data analysis. My academic journey, under matric number <strong>F/HD/23/3210035</strong>, has equipped me with valuable skills in coding, algorithm design, and system analysis.
          </motion.p>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-pink-300">Contact Me</motion.h2>
          <motion.div className="mt-6 space-y-4 text-lg">
            <p className="text-gray-700"><strong>Phone:</strong> +234 812 042 9916</p>
            <p className="text-gray-700"><strong>Email:</strong> fakjanet@gmail.com</p>
          </motion.div>
        </motion.section>

        {/* Assignment Section */}
        <motion.section id="assignment" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-blue-400">Assignment 1</motion.h2>
          <motion.h2 className="text-2xl font-bold text-gray-700">Write short notes on</motion.h2>
          <div className="mt-8 max-w-3xl space-y-6 text-left text-gray-700">
            {[
              {
                title: "Machine Learning",
                content: "Machine learning empowers computers to identify patterns and improve their decision-making abilities based on data, without explicit programming instructions.",
              },
              {
                title: "Artificial Intelligence (AI)",
                content: "AI involves creating intelligent systems that can perform tasks typically requiring human intellect, such as analyzing data and making informed decisions.",
              },
              {
                title: "Supervised Learning",
                content: "This learning approach relies on labeled data to help a model learn patterns and make accurate predictions based on examples provided.",
              },
              {
                title: "Unsupervised Learning",
                content: "Unsupervised learning allows models to find hidden structures in data that hasn't been labeled, helping with clustering and data organization.",
              },
              {
                title: "Deep Learning",
                content: "Deep learning uses multi-layered neural networks to analyze complex data, enabling advanced tasks such as image recognition and natural language processing.",
              },
            ].map(({ title, content }) => (
              <motion.div key={title}>
                <h3 className="text-2xl font-bold text-pink-300">{title}</h3>
                <p>{content}</p>
              </motion.div>
            ))}
          </div>

          {/* Read More Button */}
          {!showAssignment2 && (
            <motion.button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all" onClick={() => setShowAssignment2(true)}>
              Read More
            </motion.button>
          )}

          {/* Assignment 2 - Hidden until button is clicked */}
          {showAssignment2 && (
            <motion.div className="mt-12 text-left text-gray-700 max-w-3xl">
              <motion.h2 className="text-4xl font-bold text-blue-400">Assignment 2</motion.h2>
              <motion.h2 className="text-2xl font-bold text-gray-700">create a problem that can be solved by identifying the issues, debugging and isolating or solving the problem. You are to document the procedure on how you go about it</motion.h2>
              <motion.h3 className="text-2xl font-bold text-pink-300">Problem Statement:</motion.h3>
              <p>Create a program that simulates a simple quiz game. The game should ask the user a series of questions, keep track of the user's score, and provide feedback on correct or incorrect answers. However, there's a bug in the game that causes it to crash when the user enters an invalid answer.
              </p>

              <motion.h3 className="text-2xl font-bold text-pink-300 mt-6">Identifying Issues:</motion.h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>📌 The game crashes when a user enters an invalid answer.</li>
                <li>📌 There is no validation to check if the user's answer is correct.</li>
                <li>📌 The program does not handle exceptions properly, leading to crashes.</li>
              </ul>

              <motion.h3 className="text-2xl font-bold text-pink-300 mt-6">Debugging Steps:</motion.h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>🔹 Review the code for the *question-answering function* to locate the issue.</li>
                <li>🔹 Add *print statements* or use a *debugger* to track variable values.</li>
                <li>🔹 Identify the *line of code causing the crash* when invalid input is entered.</li>
              </ul>

              <motion.h3 className="text-2xl font-bold text-pink-300 mt-6">Example Code (Fixed Version):</motion.h3>
              <pre className="bg-gray-300 p-4 rounded-md text-gray-900 overflow-auto">
                {`class QuizGame:
  def _init_(self):
      self.score = 0
      self.questions = {
          "What is the capital of France?": "Paris",
          "What is the largest planet in our solar system?": "Jupiter",
          "Who painted the Mona Lisa?": "Leonardo da Vinci"
      }

  def ask_question(self, question, answer):
      try:
          user_answer = input(question + " ").strip()
          if not user_answer:
              raise ValueError("Input cannot be empty.")
          if user_answer.lower() == answer.lower():
              print("✅ Correct answer!")
              self.score += 1
          else:
              print(f"❌ Sorry, the correct answer is {answer}.")
      except ValueError as e:
          print(f"⚠️ Error: {e}")

  def play_game(self):
      for question, answer in self.questions.items():
          self.ask_question(question, answer)
      print(f"🎯 Game over! Your final score is {self.score}/{len(self.questions)}.")

# Create and start the quiz game
game = QuizGame()
game.play_game()`}
              </pre>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
}

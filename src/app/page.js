"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAssignment2, setShowAssignment2] = useState(false);

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
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-teal-700 to-gray-800 text-white fixed w-full z-20 shadow-lg top-0 left-0"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Joshua</h1>
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
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-teal-700 to-gray-800 md:bg-transparent md:flex md:space-x-6 text-center md:text-left transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["Home", "About Me", "Contact", "Assignment"].map((link) => (
              <li key={link} className="md:py-0 py-2">
                <a
                  href={`#${link.replace(" ", "").toLowerCase()}`}
                  className="block text-white hover:text-yellow-300 transition-colors"
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
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-teal-700 text-white text-center px-4"
        >
          <motion.img
            src="/my-picture.jpg"
            alt="My Picture"
            className="w-72 h-72 rounded-full border-4 border-yellow-300 shadow-2xl object-cover"
            whileHover={{ scale: 1.1, rotate: 5 }}
          /> 

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-6 text-5xl font-extrabold"
          >
            Hello, I'm{" "}
            <span className="text-yellow-300">Ntoka Joshua Samuel </span>
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
          className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4 py-12"
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-teal-400">
            About Me
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-gray-400 max-w-4xl"
          >

Hi, I'm Ntoka Joshua Samuel, a passionate Computer Science student at 
Yaba College of Technology (YABATECH), proudly studying under matriculation
 number F/HD/23/3210006. With a keen interest in technology, programming, and 
 innovative problem-solving, I am always eager to explore and learn new concepts
  in software development and data analysis. My academic journey has equipped me
   with essential skills in coding, algorithm design, and system architecture. I 
   aspire to contribute to groundbreaking projects 
that make a difference while continuously growing in this dynamic field.
          </motion.p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-center px-4 py-12"
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-yellow-300">
            Contact Me
          </motion.h2>
          <motion.div variants={item} className="mt-6 space-y-4 text-lg">
            <p className="text-gray-300">
              <strong>Phone:</strong> +234 813 026 0073
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> Njbrandy360@gmail.com
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
          className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4 py-12"
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-teal-400">
            Assignment 1
          </motion.h2>
          <div className="mt-8 max-w-3xl space-y-6 text-left text-gray-400">
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
                <h3 className="text-2xl font-bold text-yellow-300">{title}</h3>
                <p>{content}</p>
              </motion.div>
            ))}
          </div>
          {!showAssignment2 && (
            <motion.button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all" onClick={() => setShowAssignment2(true)}>
              Read More
            </motion.button>
          )}
           {showAssignment2 && (
  <motion.div className="mt-12 text-left text-gray-700 max-w-3xl">
    <motion.h2 className="text-4xl font-bold text-teal-400">
      Assignment 2
    </motion.h2>
    <motion.h3 className="text-2xl font-bold text-yellow-300 mt-4">
    Problem Statement:
    </motion.h3>
    <p className="text-gray-400">
   AI Image Recognition System Misclassifies Objects

Scenario:

A retail store uses an AI-powered image recognition system to identify products at checkout. However, customers and cashiers report that the system frequently misclassifies products, leading to incorrect prices and billing errors.

To resolve this issue, we will identify the root cause, debug the system, isolate the problem, and implement a solution.
    </p>

    <motion.h3 className="text-2xl font-bold text-yellow-300 mt-4">
    Step-by-Step Debugging and Problem-Solving Process:
    </motion.h3>
    
    <motion.h3 className="text-2xl font-bold text-yellow-300 mt-4">
      Step 1. Identify the Issue

    </motion.h3>
    <ul className="list-disc pl-6 text-gray-400">
      <li>	Collect reports from cashiers and customers about misclassified products.
      </li>
      <li>	Analyze error logs to find patterns (e.g., specific products frequently) 
      </li>
      <li> If the food will expire in 3 days or less, show an alert.</li>
      <li> Otherwise, tell the user how many days are left.</li>
    </ul>
    <motion.h4 className="text-xl font-bold text-blue-400 mt-3">
    Key Observations:
    </motion.h4>
    <ul className="list-disc pl-6 text-gray-400">
      <li>	Small and similar-looking products (e.g., different brands of bottled water) are often confused.
      </li>
      <li>	Poor lighting conditions cause recognition failures.
      </li>
      <li>	The AI struggles with occluded (partially hidden) product</li>
    </ul>

    <motion.h3 className="text-2xl font-bold text-yellow-300 mt-4">
      Step 2. Debug the AI Model

    </motion.h3>
    <ul className="list-disc pl-6 text-gray-400">
      <li>	Check how the system processes images.
      </li>
      <li>	Examine the dataset used to train the AI.
      </li>
      <li>	Test the AI with controlled inputs and analyze its decision-making process.</li>
    </ul>
    <motion.h4 className="text-xl font-bold text-blue-400 mt-3">
    Possible Causes Identified:
    </motion.h4>
    <ul className="list-disc pl-6 text-gray-400">
      <li>The AI training dataset lacks diverse product images.
      </li>
      <li>The model has difficulty distinguishing similar products due to feature overlap.
      </li>
      <li>The system struggles under low lighting conditions or poor image resolution.</li>
    </ul>
    <motion.h3 className="text-2xl font-bold text-yellow-300 mt-4">
      Step 3. Isolate the Problem

    </motion.h3>
    <ul className="list-disc pl-6 text-gray-400">
      <li>Test individual products under different conditions (lighting, angles, partial occlusion).
      </li>
      <li>Compare expected vs. actual classifications.
      </li>
      <li>Use visualization tools to check how the AI extracts product features.
      </li>
    </ul>
    <motion.h4 className="text-xl font-bold text-blue-400 mt-3">
    Findings: 
    </motion.h4>
    <ul className="list-disc pl-6 text-gray-400">
      <li>	Some product images in the training data are blurry or low-quality.
      </li>
      <li>The model does not handle background noise well.
      </li>
      <li>Edge cases (e.g., damaged packaging) are not well-represented in training data.</li>
    </ul>
   
    <motion.h3 className="text-2xl font-bold text-yellow-300 mt-4">
      Step 4. Implement a Solution
    </motion.h3>
    <motion.h4 className="text-xl font-bold text-blue-400 mt-3">
    ✅ Improve Training Data
    </motion.h4>
    <ul className="list-disc pl-6 text-gray-400">
      <li>Add high-quality images of misclassified products.
      </li>
      <li>Include more images with different angles, lighting conditions, and partial occlusions.
      </li>
    </ul>
    
    <motion.h4 className="text-xl font-bold text-blue-400 mt-3">
    ✅ Enhance Model Performance:
    </motion.h4>
    <ul className="list-disc pl-6 text-gray-400">
      <li>Fine-tune the AI with additional labeled data.
      </li>
      <li>
      Implement an advanced deep-learning model with better feature extraction.
      </li>
    </ul>
     
    <motion.h4 className="text-xl font-bold text-blue-400 mt-3">
    ✅ Improve Image Processing:
    </motion.h4>
    <ul className="list-disc pl-6 text-gray-400">
      <li>Use image preprocessing techniques (brightness correction, edge enhancement).
      </li>
      <li>Adjust the camera system for better lighting and clarity.
      </li>
    </ul>
    <motion.h4 className="text-xl font-bold text-blue-400 mt-3">
    ✅ Test and Validate:
    </motion.h4>
    <ul className="list-disc pl-6 text-gray-400">
      <li>Run the improved model on a test set.
      </li>
      <li>Compare accuracy before and after improvements.
      </li>
      <li>	Deploy the updated system and monitor for further errors.
      </li>
    </ul>
   
  </motion.div>
)}
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gradient-to-r from-gray-800 to-teal-700 text-gray-100 text-center py-6"
      >
        <p>&copy; 2025 Joshua. Designed with passion. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}


	




	


	


		
		

		
		
	
	








	

		
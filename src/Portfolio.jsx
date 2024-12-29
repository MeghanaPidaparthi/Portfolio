import React from "react";
import githubIcon from "./assets/mark-github.svg";
import github from "./assets/mark-github-2.svg";
import education from "./assets/education.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import htmlIcon from "./assets/html.svg"; // Replace with the actual path to your SVG
import cssIcon from "./assets/css.svg"; // Replace with the actual path to your SVG
import jsIcon from "./assets/js.svg"; // Replace with the actual path to your SVG
import reactIcon from "./assets/react.svg"; // Replace with the actual path to your SVG
import javaIcon from "./assets/java.svg"; // Replace with the actual path to your SVG
import Figma from "./assets/figma.svg"; // Replace with the actual path to your SVG

const Portfolio = () => {
  return (
    <div className="bg-background text-white font-montserrat min-h-screen px-4 sm:px-10 py-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl sm:text-6xl text-primaryPurple font-bold mb-4">
          Hello! I'm Meghana
        </h1>
        <p className="text-grayLight text-lg sm:text-xl">
          A passionate web developer who loves creating innovative websites and a casual coder!
        </p>
      </header>

      {/* Grid Container */}
      <div className="grid gap-8 mt-10 md:grid-cols-3">
        {/* About Me Section */}
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-lg font-semibold text-heading mb-4">About me</h2>
          <p>
            Hi! I’m Meghana, a{" "}
            <span className="text-primaryPurple font-bold">web developer</span> passionate about
            creating responsive, user-friendly websites. I’m currently pursuing B. Tech in Computer
            Science. I enjoy exploring modern JavaScript frameworks. Beyond coding, I love cooking
            and painting. Let’s build something amazing together!
          </p>
        </div>

        {/* Projects Section */}
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-lg font-semibold text-heading mb-4">Projects</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>KalaaBazaar</span>
              <button className="bg-primaryPurple text-white px-4 py-1 rounded text-sm">
                Details
              </button>
            </li>
            <li className="flex justify-between items-center">
              <span>RightsRevive</span>
              <button className="bg-primaryPurple text-white px-4 py-1 rounded text-sm">
                Details
              </button>
            </li>
            <li className="flex justify-between items-center">
              <span>Placeholder</span>
              <button className="bg-transparent border-2 border-[#222] text-white px-4 py-1 rounded text-sm flex items-center space-x-2 hover:bg-[#222] hover:text-white transition-all">
                <span>View on </span>
                <img src={githubIcon} alt="GitHub Icon" className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-lg font-semibold text-heading mb-4">Education</h2>
          <ul className="space-y-3">
            <li>
              <button className="bg-button text-white px-4 py-2 rounded w-full text-left flex items-center space-x-3">
                <img src={education} alt="graduation-cap" className="w-4 h-4" /> Malla Reddy University
              </button>
            </li>
            <li>
              <button className="bg-button text-white px-4 py-2 rounded w-full text-left flex items-center space-x-3">
                <img src={education} alt="graduation-cap" className="w-4 h-4" /> Bhavans Sri Aurobindo Jr. College
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-lg font-semibold text-heading mb-4">Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:pidaparthimeghana@gmail.com" className="text-primaryPurple">
              pidaparthimeghana@gmail.com
            </a>
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Social Links:</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/MeghanaPidaparthi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white px-4 py-1 rounded text-sm"
              >
                <img src={github} alt="GitHub Icon" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/meghana-pidaparthi/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white px-4 py-1 rounded text-sm"
              >
                <img src={LinkedIn} alt="LinkedIn Icon" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Accomplishments Section */}
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-lg font-semibold text-heading mb-4">Accomplishments</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-primaryPurple">
                GREEN Olympiad for Youth:
              </span>{" "}
              Earned a merit certificate
            </li>
            <li>
              <span className="font-semibold text-primaryPurple">
                B2 Cambridge Empower:
              </span>{" "}
              Successfully completed a B2 Level English proficiency program focused on advanced
              communication and comprehension skills
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-lg font-semibold text-heading mb-4">Skills</h2>
          <ul className="space-y-4">
            <li>
              <strong>Web Dev:</strong>
              <div className="flex items-center space-x-3 mt-2">
                <img src={htmlIcon} alt="HTML" className="w-6 h-6" />
                <img src={cssIcon} alt="CSS" className="w-6 h-6" />
                <img src={jsIcon} alt="JavaScript" className="w-6 h-6" />
                <img src={reactIcon} alt="React" className="w-6 h-6" />
              </div>
            </li>
            <li>
              <strong>Programming:</strong>
              <div className="flex items-center space-x-3 mt-2">
                <img src={javaIcon} alt="Java" className="w-6 h-6" />
              </div>
            </li>
            <li>
              <strong>Miscellaneous:</strong>
              <div className="flex items-center space-x-3 mt-2">
                <img src={github} alt="Github" className="w-6 h-6" />
              </div>
            </li>
            <li>
              <strong>UX Designing Tools:</strong>
              <div className="flex items-center space-x-3 mt-2">
                <img src={Figma} alt="Figma" className="w-6 h-6" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

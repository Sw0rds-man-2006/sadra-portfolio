import React, { useEffect } from "react";
import "./css/animaition.css";
import "./css/normalize.css";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const personalInfo = [
  { label: "Name", value: "Sadra" },
  { lable: "Nationality", value: "Iranian" },
  { label: "Last Name", value: "Izadi" },
  { label: "Age", value: "19" },
  { label: "Phone", value: "+98 903 925 7150" },
  { label: "Email", value: "sadraizadi@email.com" },
  { label: "Freelance", value: "Available" },
];

const Portfolio = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-left, .fade-in-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black font-modern overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex justify-center z-50">
        <div className="w-full max-w-[1000px] bg-neutral-900 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:justify-between items-center shadow-md space-y-3 sm:space-y-0 rounded-b-xl">
          <div className="text-2xl font-semibold text-white italic font-signature">
            Sadra
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 overflow-x-auto text-sm text-yellow-300">
            <a href="#" className="hover:text-yellow-500 transition">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              About
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              Portfolio
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 flex flex-col items-center px-4 space-y-16">
        {/* Section: Info */}
        <section className="w-full max-w-[800px] bg-neutral-900 rounded-xl shadow-xl p-8 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-8 fade-in-left">
          {/* Image */}
          <div className="w-36 h-36 bg-yellow-400 rounded-full border-4 border-yellow-500 flex items-center justify-center text-white font-semibold shrink-0">
            تصویر
          </div>

          {/* Description */}
          <div className="flex-1 text-yellow-200 text-base leading-relaxed text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor.
          </div>
        </section>

        {/* Section: Info Grid */}
        <section className="w-full max-w-[800px] bg-neutral-900 rounded-xl shadow-xl p-8 fade-in-right">
          <div className="mx-auto w-full max-w-[500px] text-white text-sm sm:grid sm:grid-cols-2 gap-x-8 gap-y-6 space-y-6 sm:space-y-0">
            {[
              ["Name", "Sadra"],
              ["Last Name", "Sadeghi"],
              ["Gender", "Male"],
              ["Age", "25"],
              ["Country", "Iran"],
              ["City", "Tehran"],
              ["Phone", "+98 912 345 6789"],
              ["Email", "example@email.com"],
              ["Marital Status", "Single"],
              ["Languages", "Persian, English"],
            ].map(([label, value], idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-yellow-400 font-semibold">{label}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Skills */}
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;

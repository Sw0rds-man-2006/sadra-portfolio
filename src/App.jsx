import React, { useEffect } from "react";
import "./css/animaition.css";
import "./css/normalize.css";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Portfolio = () => {
  const handleScroll = (e, id) => {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // اسکرول نرم به بخش مورد نظر
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

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
        <div
          id="about"
          className="w-full max-w-[1000px] bg-neutral-900 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:justify-between items-center shadow-md space-y-3 sm:space-y-0 rounded-b-xl"
        >
          <div className="text-2xl font-semibold text-white italic font-signature">
            Sadra
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 overflow-x-auto text-sm text-yellow-300">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-yellow-500 text-yellow-300 transition no-underline"
            >
              About
            </a>
            <a
              href="#resume"
              onClick={(e) => handleScroll(e, "resume")}
              className="hover:text-yellow-500 text-yellow-300 transition no-underline"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-yellow-500 text-yellow-300 transition no-underline"
            >
              Contact
            </a>
            <a
              href="/SadraIzadi-backend-developer-resume.pdf"
              download="SadraIzadi-backend-developer-resume.pdf"
              className="hover:text-yellow-500 text-yellow-300 transition no-underline"
            >
              Download CV
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 flex flex-col items-center px-4 space-y-16">
        {/* Section: Info */}
        <section className="w-full max-w-[800px] bg-neutral-900 rounded-xl shadow-xl p-8 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-8 fade-in-left">
          {/* Image */}
          <img
            src="images/profile.jpg"
            className="w-36 h-36 bg-yellow-400 rounded-full border-4 border-yellow-500 flex items-center justify-center text-white font-semibold shrink-0"
          ></img>

          <div className="flex-1 text-yellow-200 mt-10 ml-5 text-base leading-relaxed text-center sm:text-left">
            <p>
              {" "}
              A MOTIVATED <p className="text-amber">BACKEND DEVELOPER</p>READY
              TO TAKE ON WORK CHALLENGES.
            </p>
          </div>
        </section>

        {/* SECTION: INFO GRID */}
        <section className="w-full max-w-[800px] bg-neutral-900 rounded-xl shadow-xl p-8 fade-in-right">
          <div className="mx-auto w-full max-w-[500px] text-white text-sm sm:grid sm:grid-cols-2 gap-x-8 gap-y-6 space-y-6 sm:space-y-0">
            {[
              ["Name", "Sadra"],
              ["Last Name", "Izadi"],
              ["Age", "19"],
              ["Phone", "+98 903 925 7150"],
              ["Email", "sadraizadi@email.com"],
              ["Freelace", "Available"],
              ["Nationality", "Iranian"],
              ["telegram", "@SadraIzadi"],
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
        <Education id="resume" />
        <Projects />
        <Footer id="contact" />
      </main>
    </div>
  );
};

export default Portfolio;

import React from "react";

const education = [
  {
    title: "Diploma in Web Design",
    institution: "Baagher zade high school",
    duration: "2020 - 2023",
    description:
      "I studied web design, learning the basics of front-end technologies like HTML, CSS, and a little bit of php.",
  },
  {
    title: "Associate Degree in Software Engineering",
    institution: "Sadjad University",
    duration: "2024 - Present",
    description:
      "Right now, I'm studying for an associate degree in software at sadjad university in Mashhad",
  },
  {
    title: "Certificate in Electronics",
    institution: "Technical and Vocational Training Organization",
    duration: "2023",
    description:
      "I completed a certificate program in electronics, gaining hands-on experience with circuits, microcontrollers, and basic electronic systems.",
  },
];
const Education = () => {
  return (
    <section className="w-full max-w-[800px] bg-neutral-900 rounded-xl shadow-xl p-8 fade-in-left">
      <h2 className="text-white text-xl font-semibold mb-6 text-center">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-neutral-800 rounded-lg border border-neutral-700 p-6"
          >
            <span className="text-yellow-400 font-semibold text-lg mb-3">
              {item.title}
            </span>
            <span className="text-white text-sm mb-3">{item.institution}</span>
            <span className="text-white text-sm mb-4">{item.duration}</span>
            <p className="text-white text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

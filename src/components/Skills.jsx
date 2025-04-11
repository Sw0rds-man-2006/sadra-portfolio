import React from "react";

const skills = [
  { name: "Python", level: 65 },
  { name: "Java", level: 80 },
  { name: "Php", level: 60 },
  { name: "Spring boot", level: 70 },
  { name: "Djngo", level: 70 },
  { name: "Laravel", level: 60 },
];

const Skills = () => {
  return (
    <section className="w-full max-w-[800px] bg-neutral-900 rounded-xl shadow-xl p-8 fade-in-left">
      <h2 className="text-white text-xl font-semibold mb-6 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-yellow-400 font-semibold mb-3">
              {skill.name}
            </span>
            <div className="relative w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                style={{
                  width: `${skill.level}%`,
                  backgroundImage:
                    "linear-gradient(to right, #facc15, #facc15cc, transparent)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

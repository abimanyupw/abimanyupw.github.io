import React from "react";

const TechStack = () => {
  const techList = [
    {
      name: "React",
      image: "logo/react.svg",
    },
    {
      name: "JavaScript",
      image: "logo/javascript.svg",
    },
    {
      name: "Tailwind",
      image: "logo/tailwind.svg",
    },
    {
      name: "Node.js",
      image: "logo/nodejs.svg",
    },
    {
      name: "Python",
      image: "logo/python.svg",
    },
    {
      name: "Dart",
      image: "logo/dart.svg",
    },
    {
      name: "Mysql",
      image: "logo/mysql.svg",
    },
    {
      name: "PHP",
      image: "logo/php.svg",
    },
    { name: "Vite", image: "logo/vitejs.svg" },
    { name: "Laravel", image: "logo/laravel.svg" },
    { name: "Flutter", image: "logo/flutter.svg" },
    { name: "HTML", image: "logo/html.svg" },
    { name: "CSS", image: "logo/css.svg" },
    { name: "Figma", image: "logo/figma.svg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {techList.map((tech, i) => (
        <div
          key={i}
          data-aos="zoom-in"
          data-aos-delay={i * 50}
          className="group p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="w-12 h-12 mb-3 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;

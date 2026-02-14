import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "AnyuNet",
      desc: "E-commerce platform for high-performance networking hardware and Wi-Fi solutions.",
      image: "project/anyunet.jpg",
      githubLink: "https://github.com/abimanyupw/Anyunet",
      demoLink: "https://anyunet.vercel.app/",
      techStack: ["HTML", "CSS", "Javascript", "Midtrans"],
    },
    {
      title: "Network IT CLub",
      desc: "Laravel-based educational platform offering free networking courses and student dashboards.",
      image: "project/networkitclub.jpg",
      githubLink: "https://github.com/abimanyupw/networkitclub-laravel",
      techStack: ["Laravel", "Tailwind", "Mysql"],
    },
    {
      title: "Nyamnyam Food Finder",
      desc: "Flutter mobile application featuring dynamic restaurant listings via external API.",
      image: "project/nyamnyam.jpg",
      githubLink: "https://github.com/abimanyupw/nyamnyam-food-finder", // Link github kamu
      techStack: ["Flutter"],
    },
    {
      title: "Portofolio",
      desc: "Modern portfolio built with React & Tailwind CSS for high performance.",
      image: "project/portofolio.jpg",
      githubLinkLink: "https://github.com/abimanyupw/portofolio",
      demoLink: "https://portofolio-mu-tawny.vercel.app/", // Link github kamu
      techStack: ["React", "Tailwind", "Vite"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} delay={index * 150} />
      ))}
    </div>
  );
};

export default Projects;

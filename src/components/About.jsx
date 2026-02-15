import React from "react";
import {
  User,
  Code2,
  Rocket,
  Sparkles,
  Briefcase,
  Calendar,
  GraduationCap,
} from "lucide-react";

import { SiLaravel, SiFigma } from "react-icons/si";

export default function About() {
  const experiences = [
    {
      company: "JNET Global Network Solution",
      role: "Admin & Technician",
      period: "Juli 2024 - Desember 2024",
      desc: "Mengelola infrastruktur, menjaga keamanan data, serta memastikan konektivitas jaringan lancar.",
    },
    {
      company: "SMK Negeri 1 Pungging",
      role: "IT Support",
      period: "September 2022 - Mei 2025",
      desc: "Pendukung teknis infrastruktur sekolah: Mengelola lab komputer, menjaga keamanan jaringan, dan membantu solusi IT harian.",
    },
  ];

  const education = [
    {
      school: "SMK Negeri 1 Pungging",
      major: "Teknik Komputer dan Jaringan",
      period: "2022 - 2025",
      desc: "Mempelajari infrastruktur jaringan, administrasi server, dan dasar-dasar pengembangan perangkat lunak.",
    },
    {
      school: "Politeknik Elektronika Negeri Surabaya",
      major: "Teknik Telekomunikasi",
      period: "2025 - Now",
      desc: "Mempelajari rekayasa sistem komunikasi jarak jauh, mencakup perancangan, pengembangan, pengiriman informasi (suara, data, video) melalui media kabel, nirkabel (wireless), serat optik, hingga satelit.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#030014] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center mb-16" data-aos="fade-up">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Getting to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-12">
            <div data-aos="fade-right">
              <h3 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <User className="text-blue-500" size={32} />
                Who Am I?
              </h3>

              <div className="space-y-6 text-gray-400 leading-relaxed text-xl">
                <p>
                  Saya adalah mahasiswa{" "}
                  <span className="text-white font-semibold">
                    Teknik Telekomunikasi PENS
                  </span>{" "}
                  dengan latar belakang Teknik Komputer & Jaringan (TKJ). Saya
                  berfokus pada pembangunan ekosistem web modern yang
                  menggabungkan presisi infrastruktur dengan estetika visual.
                </p>

                <p>
                  Saat ini, fokus utama saya adalah menciptakan pengalaman
                  digital yang inovatif melalui:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">▹</span>
                    <span>
                      <strong className="text-white">Development:</strong>{" "}
                      Aplikasi web scalable dengan{" "}
                      <span className="text-blue-400">Laravel</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">▹</span>
                    <span>
                      <strong className="text-white">Design:</strong> UI/UX
                      intuitif melalui{" "}
                      <span className="text-indigo-400">Figma</span>.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-up">
              <StatCard
                icon={<Rocket className="text-blue-400" />}
                val="01+"
                label="Years Learning"
              />
              <StatCard
                icon={<Code2 className="text-indigo-400" />}
                val="3+"
                label="Projects Built"
              />
              <StatCard
                icon={<SiLaravel size={30} className="text-[#FF2D20]" />}
                val="Laravel"
                label="Main Framework"
              />
              <StatCard
                icon={<SiFigma size={30} className="text-[#F24E1E]" />}
                val="Figma"
                label="UI Styling"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-10">
            {/* WORK */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-indigo-500" size={24} />
                Work Experience
              </h3>
              <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-6 relative">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    title={exp.role}
                    subtitle={exp.company}
                    period={exp.period}
                    desc={exp.desc}
                  />
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-500" size={24} />
                Education
              </h3>
              <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-6 relative">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    title={edu.major}
                    subtitle={edu.school}
                    period={edu.period}
                    desc={edu.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* TIMELINE ITEM */
/* ========================= */
function TimelineItem({ title, subtitle, period, desc }) {
  return (
    <div className="relative">
      <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] border-4 border-[#030014]"></div>

      <div className="relative bg-white/5 border border-white/10 p-5 pb-14 rounded-2xl hover:bg-white/10 transition-all group">
        {/* CONTENT */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
            {title}
          </h4>

          <p className="text-blue-400 text-sm font-medium mt-1">{subtitle}</p>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mb-4">{desc}</p>

        <span className="absolute bottom-4 right-4 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-full">
          <Calendar size={10} /> {period}
        </span>
      </div>
    </div>
  );
}

function StatCard({ icon, val, label }) {
  return (
    <div className="group relative bg-white/5 border border-white/10 p-4 rounded-2xl transition-all hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-1">
      <div className="mb-3 p-2 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-black text-white mb-0.5">{val}</h4>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

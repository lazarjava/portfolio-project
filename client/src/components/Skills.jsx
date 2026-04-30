import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "HTML", level: 95, icon: FaHtml5, color: "text-orange-500", bar: "from-orange-400 to-orange-500" },
  { name: "CSS", level: 90, icon: FaCss3Alt, color: "text-blue-500", bar: "from-blue-400 to-blue-500" },
  { name: "JavaScript", level: 88, icon: FaJs, color: "text-yellow-400", bar: "from-yellow-400 to-yellow-500" },
  { name: "React", level: 85, icon: FaReact, color: "text-cyan-400", bar: "from-cyan-400 to-cyan-500" },
  { name: "Node.js", level: 80, icon: FaNodeJs, color: "text-green-500", bar: "from-green-400 to-green-500" },
  { name: "Express", level: 75, icon: SiExpress, color: "text-gray-300", bar: "from-gray-400 to-gray-500" },
  { name: "MongoDB", level: 78, icon: SiMongodb, color: "text-emerald-500", bar: "from-emerald-400 to-emerald-500" },
  { name: "Tailwind", level: 92, icon: SiTailwindcss, color: "text-sky-400", bar: "from-sky-400 to-sky-500" },
  { name: "Bootstrap", level: 85, icon: FaBootstrap, color: "text-purple-500", bar: "from-purple-400 to-purple-500" }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 text-center">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        My <span className="text-orange-400">Skills</span>
      </h2>

      <p className="text-gray-400 mb-14 max-w-xl mx-auto">
        A modern stack focused on building fast and scalable web applications.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.name} className="skill-card p-5 text-left">

              {/* ICON + NAME */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Icon className={`text-xl ${skill.color}`} />
                </div>
                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>
              </div>

              {/* TEXT */}
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Proficiency</span>
                <span className="text-orange-400">{skill.level}%</span>
              </div>

              {/* BAR */}
              <div className="w-full bg-white/10 h-[6px] rounded-full overflow-hidden">
                {visible && (
                  <div
                    className={`progress-bar bg-gradient-to-r ${skill.bar}`}
                    style={{
                      "--target-width": `${skill.level}%`
                    }}
                  ></div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
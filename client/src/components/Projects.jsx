const projects = [
  {
    title: "Joyful Food App",
    desc: "Full-stack MERN food ordering platform with real-time customization, offers, and secure user experience.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/food.png",
    github: "https://github.com/lazarjava/food-app.git",
    live: "https://food-app-r6i1.vercel.app/"
  },
  {
    title: "Personal Task Manager",
    desc: "Task management system with JWT authentication, CRUD operations, and responsive UI.",
    tech: ["React", "Express", "MongoDB"],
    image: "/projects/task.png",
    github: "https://github.com/lazarjava/frontend-task-.git",

    // ✅ FIXED: removed /login (causes Netlify error)
    live: "https://superlative-daifuku-d94c32.netlify.app/"
  },
  {
    title: "Fitness Journey Logger",
    desc: "Track fitness goals with charts, secure login, and real-time progress visualization.",
    tech: ["React", "Chart.js", "Node.js"],
    image: "/projects/fitness.png",
    github: "https://github.com/lazarjava/react-state-22.git",
    live: "https://cute-monstera-080750.netlify.app/"
  },
  {
    title: "Healthy Morsels",
    desc: "Multi-page React app with 3D animations and smooth navigation using React Router.",
    tech: ["React", "Bootstrap"],
    image: "/projects/morsels.png",
    github: "https://github.com/lazarjava/reac.git",
    live: "https://funny-hamster-efad90.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-white bg-[#020617]">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        My <span className="text-orange-400">Projects</span>
      </h2>

      <p className="text-gray-400 text-center mb-14">
        A showcase of my recent work
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card overflow-hidden rounded-2xl bg-[#0a0f1c] border border-gray-800 hover:scale-[1.02] transition duration-300"
          >

            {/* IMAGE */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                onError={(e) => (e.target.src = "/projects/fallback.png")}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-sm transition"
                >
                  Code
                </a>

                {/* LIVE */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-orange-500 hover:bg-orange-600 py-2 rounded-lg text-sm transition"
                >
                  Demo
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
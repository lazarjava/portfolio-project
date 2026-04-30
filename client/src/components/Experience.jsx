export default function Experience() {
  const projects = [
    {
      title: "Joyful Food App",
      desc: "Developed a full-stack MERN food ordering platform with dynamic menus, real-time customization, and secure user authentication. Integrated frontend with backend APIs for seamless user experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    },
    {
      title: "Personal Task Manager",
      desc: "Built a task management system with JWT authentication and full CRUD operations. Designed RESTful APIs and implemented responsive UI for efficient task handling.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    },
    {
      title: "Fitness Journey Logger",
      desc: "Created a fitness tracking app with goal monitoring and real-time data visualization using charts. Focused on secure data handling and interactive UI.",
      tech: ["React.js", "Node.js", "MongoDB", "Chart.js"],
    },
    {
      title: "Healthy Morsels",
      desc: "Designed a modern multi-page React application with smooth navigation and engaging UI. Implemented routing and responsive layouts with clean design.",
      tech: ["React.js", "Bootstrap", "React Router"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-orange-400">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-3 text-orange-400">
                {proj.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
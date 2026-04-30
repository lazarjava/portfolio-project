import joyImg from "../assets/Joys.png";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center overflow-hidden rounded-2xl">
          <img
            src={joyImg}
            alt="profile"
            className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-orange-400">Me</span>
          </h2>

          <p
            className="text-gray-400 text-base md:text-lg leading-relaxed md:leading-loose tracking-wide text-left md:text-justify"
            style={{ textAlignLast: "left" }}
          >
            I am Lazar G, an aspiring MERN Stack Developer with a strong passion for building modern and scalable web applications.
            I specialize in MongoDB, Express.js, React.js, and Node.js, enabling me to develop efficient, full-stack solutions with seamless user experiences.
            I have hands-on experience creating projects with clean UI design and robust backend integration, focusing on performance and maintainable code.
            I enjoy exploring new technologies and continuously improving my development skills.
            Some of my projects include a fitness tracker and a food ordering application.
            My goal is to grow into a skilled developer and eventually lead projects that deliver meaningful and impactful digital solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
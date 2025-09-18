import aboutData from "../data/about.json";
import skills from "../data/skills.json";

function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 bg-gray-50 min-h-screen">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Foto */}
        <div className="flex-shrink-0">
          <img
            src={aboutData.image}
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-xl object-cover border-4 border-white"
          />
        </div>

        {/* Teks */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {aboutData.title}
          </h2>
          <p className="max-w-2xl text-gray-600 leading-relaxed mb-6">
            {aboutData.description}
          </p>
        </div>
      </div>


      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-10 text-gray-800 text-center">
          Tech Stack
        </h3>

<div className="relative w-full overflow-hidden">
  <div className="auto-scroll">
    {skills.concat(skills).map((s, i) => (
      <div
        key={i}
        className="min-w-[100px] flex-shrink-0 flex justify-center items-center"
      >
        <img
          src={s.icon}
          alt={`Skill ${i}`}
          className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    ))}
  </div>
</div>
      </div>


      {/* Button */}
      <div className="text-center mt-16">
        <a
          href={aboutData.buttonLink}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {aboutData.buttonText}
        </a>
      </div>
    </section>
  );
}

export default About;

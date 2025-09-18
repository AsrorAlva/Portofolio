import projects from "../data/projects.json";

function Projects() {
  const previewProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 px-6 text-center relative z-10 bg-gray-50 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {previewProjects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md text-left 
                       flex flex-col justify-between hover:-translate-y-2 
                       hover:shadow-xl transition duration-300 min-h-[220px]"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-700 mb-4">{p.desc}</p>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-auto"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;

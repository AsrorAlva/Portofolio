import { useState } from "react";
import projectsData from "../data/projects.json";

function AllProjects() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");

  const filteredProjects = projectsData
    .filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "za") return b.title.localeCompare(a.title);
      if (sort === "newest") return b.year - a.year;
      return 0;
    });

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">All Projects</h2>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="az">Sort: A-Z</option>
            <option value="za">Sort: Z-A</option>
            <option value="newest">Sort: Newest</option>
          </select>
        </div>

        {/* Project Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-left"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.desc}</p>
                <p className="text-sm text-gray-500 mb-2">Year: {p.year}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">
            🔍 No projects found for "<span className="font-semibold">{search}</span>"
          </p>
        )}

        {/* Back button */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default AllProjects;

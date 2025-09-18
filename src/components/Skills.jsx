function Skills() {
  const skills = [
    { name: "React", category: "IT & Technology" },
    { name: "Unity3D", category: "IT & Technology" },
    { name: "JavaScript", category: "IT & Technology" },
    { name: "Python", category: "IT & Technology" },
    { name: "Branding (Internship Experience)", category: "Creative & Branding" },
    { name: "Photo & Video Editing", category: "Creative & Branding" },
    { name: "Network Installation (WiFi)", category: "IT & Technology" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills & Expertise</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="font-medium text-gray-800">{s.name}</p>
            <p className="text-sm text-gray-500">{s.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

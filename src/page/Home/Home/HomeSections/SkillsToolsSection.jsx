const SkillsToolsSection = () => {
  const skills = [
    "webpage Audit",
    "Key word Research",
    "Image SEO",
    "Facebook Ad run",
    "YouTubeSEO ",
    "Facebook Page SEO",
    "On Page SEO",
  ];

  return (
    <section id="skills" className="md:py-28">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border-b-2 border-r-2 transition-shadow inset-2 duration-200 h-56 flex items-center justify-center text-center"
            >
              <p className="text-lg font-semibold text-gray-700">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsToolsSection;

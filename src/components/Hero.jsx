function Hero() {
  return (
    <section
      id="Hero"
      className="fixed top-0 left-0 w-full h-screen 
                 flex flex-col justify-center items-center text-center
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                 text-white px-6 z-0"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        Hi, I'm <span className="text-yellow-300">Asror Alva</span>
      </h1>
      <p className="text-base sm:text-lg text-gray-100 max-w-xl">
        Informatics Engineering Student | Web & VR Developer
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
}
export default Hero;

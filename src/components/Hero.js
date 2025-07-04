import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24 px-6 flex items-center justify-center min-h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bgImg.png')", filter: 'brightness(0.7)' }} />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 opacity-70" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image with Glow and Ring */}
        <div className="relative group">
          <img
            src="/PP.jpg"
            alt="Profile"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl ring-4 ring-cyan-400 ring-offset-4 ring-offset-teal-900 transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight leading-tight drop-shadow-lg text-white">
            Biniyam Billiso
          </h1>
          {/* Animated Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-200 animate-fadeInUp">
            Creative Video Editor <span className="text-cyan-300">|</span> Storytelling Through Motion
          </p>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-cyan-100">
            I'm a passionate video editor who brings stories to life with rhythm, pacing, and visuals that resonate. With experience in <span className="font-semibold text-cyan-200">Adobe Premiere Pro</span>, <span className="font-semibold text-cyan-200">After Effects</span>, and more, I turn raw footage into stunning narratives.
          </p>
          {/* Call to Action Button */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-cyan-600 text-white font-bold text-lg shadow-lg hover:bg-cyan-400 hover:text-teal-900 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400"
          >
            Connect
          </a>
        </div>
      </div>
      {/* Custom Keyframes for Animation */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

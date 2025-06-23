import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 bg-opacity-90 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <img src="/icon.png" alt="Logo" className="w-10 h-10" />
        <nav className="space-x-6 hidden md:block">
          <a href="#hero" className="text-blue-100 hover:text-cyan-300 transition">Home</a>
          <a href="#videos" className="text-blue-100 hover:text-cyan-300 transition">Showcase</a>
          <a href="#skills" className="text-blue-100 hover:text-cyan-300 transition">Skills</a>
          <a href="#testimonials" className="text-blue-100 hover:text-cyan-300 transition">Testimonials</a>
          <a href="#contact" className="text-blue-100 hover:text-cyan-300 transition">Contact</a>
        </nav>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cyan-300 mb-1.5 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-300 mb-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-300 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 bg-opacity-95 backdrop-blur shadow-lg px-6 py-4 space-y-4 absolute top-full left-0 w-full animate-fadeInDown">
          <a href="#hero" className="block text-blue-100 hover:text-cyan-300 transition" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#videos" className="block text-blue-100 hover:text-cyan-300 transition" onClick={() => setMenuOpen(false)}>Showcase</a>
          <a href="#skills" className="block text-blue-100 hover:text-cyan-300 transition" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#testimonials" className="block text-blue-100 hover:text-cyan-300 transition" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="block text-blue-100 hover:text-cyan-300 transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
      {/* Animation for mobile menu */}
      <style>{`
        .animate-fadeInDown {
          animation: fadeInDown 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director at MotionStudios",
    feedback:
      "Biniyam Billiso's editing is top-notch. He brought our campaign to life with stunning visuals and perfect pacing.",
    avatar: "SJ"
  },
  {
    name: "James Carter",
    role: "YouTube Content Creator",
    feedback:
      "Working with Biniyam Billiso was a breeze. He understands the YouTube audience and delivers with creativity and speed.",
    avatar: "JC"
  },
  {
    name: "Lina Mebrahtu",
    role: "Event Organizer",
    feedback:
      "Biniyam Billiso captured the soul of our event perfectly. The recap video was emotional, engaging, and professional.",
    avatar: "LM"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-cyan-200 drop-shadow">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-cyan-900 p-8 rounded-2xl shadow-xl text-left flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-cyan-700 flex items-center justify-center text-2xl font-bold text-cyan-100 mb-4 shadow-lg">
                {testimonial.avatar}
              </div>
              <p className="text-blue-100 italic mb-6 text-center">"{testimonial.feedback}"</p>
              <div className="text-center">
                <p className="text-base font-bold text-cyan-100">{testimonial.name}</p>
                <p className="text-sm text-cyan-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animation for fadeInUp */}
      <style>{`
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

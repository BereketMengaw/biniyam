import React from 'react';

const skills = [
  {
    name: "Video Editing",
    icon: "🎬",
    description: "Expert in cinematic editing, storytelling, and pacing using Adobe Premiere Pro and Final Cut Pro."
  },
  {
    name: "Motion Graphics",
    icon: "✨",
    description: "Creative motion graphics and visual effects with After Effects and modern animation tools."
  },
  {
    name: "Color Grading",
    icon: "🌈",
    description: "Professional color correction and grading for mood, style, and consistency."
  },
  {
    name: "Sound Design",
    icon: "🎧",
    description: "Enhancing video with crisp, balanced audio and sound effects."
  },
  {
    name: "Storyboarding",
    icon: "📝",
    description: "Planning and visualizing scenes for smooth, impactful edits."
  },
  {
    name: "Social Media Content",
    icon: "📱",
    description: "Optimized edits for YouTube, Instagram, TikTok, and other platforms."
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-200 drop-shadow">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/10 backdrop-blur border border-cyan-900 shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <span className="text-5xl mb-4">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-cyan-100 mb-2">{skill.name}</h3>
              <p className="text-blue-100 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

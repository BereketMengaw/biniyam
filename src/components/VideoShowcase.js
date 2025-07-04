import React, { useState } from 'react';

const videos = [
   {
title: "Home Interior Showcase",
description: "video edit for real estate content",
    url: "https://youtube.com/shorts/YI7NuySmNz0",
  },
 
  {
    title: "Home Interior Tour",
    description: "Real Estate video edit for a real estate youtube channel",
    url: "https://www.youtube.com/embed/10mxCunVLVk",
  },
  {
    title: "Dubai and Abu Dhabi_ Documentary narration",
    description: "Sample edit for a documentary youtube channel",
    url: "https://www.youtube.com/embed/g1ztJPXqh-w",
  },
  {
    title: "Celebrity news video",
    description: "video for a celebrity niche youtube channel",
    url: "https://www.youtube.com/embed/Elz4q-lQ21k",
  },

  {
    title: "Educational site video",
description: "Video edit for a Educational content website user instructions",
    url: "https://www.youtube.com/embed/kBIw6wKhdjM",
  }
];

const VideoShowcase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo(null);
  };

  return (
    <section id="videos" className="bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 py-12 px-2 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-cyan-200 drop-shadow">Video Showcase</h2>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-xl overflow-hidden bg-white/10 backdrop-blur border border-cyan-900 hover:shadow-2xl transition cursor-pointer group"
                onClick={() => openModal(video)}
                tabIndex={0}
                role="button"
                aria-label={`Play ${video.title}`}
                onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && openModal(video)}
              >
                <div className="aspect-video relative w-full max-w-full">
                  <iframe
                    className="w-full h-full min-h-[180px] max-h-[320px] sm:min-h-[220px] sm:max-h-[360px] md:min-h-[240px] md:max-h-[400px] xl:min-h-[200px] xl:max-h-[320px] pointer-events-none opacity-70 group-hover:opacity-100 transition"
                    src={video.url + '?controls=0&disablekb=1&modestbranding=1&rel=0' }
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    tabIndex={-1}
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                    <svg className="w-16 h-16 text-cyan-300" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 text-cyan-100">{video.title}</h3>
                  <p className="text-xs sm:text-sm text-blue-100">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal Popup */}
      {modalOpen && activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn px-2">
          <div className="relative bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 rounded-2xl shadow-2xl p-2 sm:p-4 max-w-3xl w-full mx-2 sm:mx-4">
            <button
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-cyan-200 hover:text-white text-2xl sm:text-3xl font-bold focus:outline-none"
              onClick={closeModal}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full rounded-lg min-h-[180px] max-h-[60vw]"
                src={activeVideo.url + '?autoplay=1&controls=1&modestbranding=1&rel=0'}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mt-3 mb-1 sm:mt-4 sm:mb-2 text-cyan-100 text-center">{activeVideo.title}</h3>
            <p className="text-blue-100 text-xs sm:text-sm text-center">{activeVideo.description}</p>
          </div>
          {/* Modal background click closes modal */}
          <button
            className="fixed inset-0 w-full h-full cursor-default"
            style={{ zIndex: 0, background: 'transparent', position: 'fixed' }}
            onClick={closeModal}
            tabIndex={-1}
            aria-label="Close video modal background"
          />
        </div>
      )}
      {/* Modal Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default VideoShowcase;

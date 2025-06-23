import React from 'react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yourprofile',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
    ),
    handle: 'biniyam-billiso'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yourprofile',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.13.54c-.78.25-1.44.58-2.1 1.24-.66.66-.99 1.32-1.24 2.1-.228.74-.412 1.64-.47 2.92C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.242 2.18.47 2.92.25.78.58 1.44 1.24 2.1.66.66 1.32.99 2.1 1.24.74.228 1.64.412 2.92.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.242 2.92-.47.78-.25 1.44-.58 2.1-1.24.66-.66.99-1.32 1.24-2.1.228-.74.412-1.64.47-2.92.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.242-2.18-.47-2.92-.25-.78-.58-1.44-1.24-2.1-.66-.66-1.32-.99-2.1-1.24-.74-.228-1.64-.412-2.92-.47C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
    ),
    handle: '@biniyam.billiso'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/c/yourchannel',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 7.88 0 12 0 12s0 4.12.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.308 20.5 12 20.5 12 20.5s7.692 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.12 24 12 24 12s0-4.12-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
    ),
    handle: 'Biniyam Billiso'
  },
  {
    name: 'Email',
    url: 'mailto:biniyam.billiso@gmail.com',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
    ),
    handle: 'biniyam.billiso@gmail.com'
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-tr from-teal-900 via-cyan-900 to-blue-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-200 drop-shadow">Connect with Biniyam Billiso</h2>
        <p className="text-blue-100 mb-10 text-lg">Let's connect! Find me on social media or send me an email. I'm always open to new projects, collaborations, and creative opportunities.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 backdrop-blur border border-cyan-900 rounded-2xl shadow-lg p-6 hover:scale-105 hover:bg-cyan-900/30 transition-transform duration-300 text-cyan-100 text-lg font-semibold justify-center"
            >
              {social.icon}
              <span className="flex flex-col items-start">
                <span>{social.name}</span>
                <span className="text-blue-200 text-sm font-normal">{social.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

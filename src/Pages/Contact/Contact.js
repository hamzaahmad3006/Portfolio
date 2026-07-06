import React, { useState } from 'react';
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneSquareAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';

// The Web3Forms access key is read from .env.local (REACT_APP_WEB3FORMS_KEY),
// which is gitignored and never pushed to GitHub. See .env.example for the template.
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const socialLinks = [
    { Icon: FaFacebookF, href: 'https://www.facebook.com/' },
    { Icon: FaXTwitter, href: 'https://twitter.com/' },
    { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/hamza-ahmad-6aab63337/' },
    { Icon: FaGithub, href: 'https://github.com/hamzaahmad3006' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setFeedback('The contact form isn’t configured yet. Please add your Web3Forms access key.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New message from your portfolio');
    formData.append('from_name', 'Portfolio Contact Form');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFeedback('Thanks for reaching out! Your message has been sent — I’ll get back to you soon.');
        form.reset();
      } else {
        setStatus('error');
        setFeedback(data.message || 'Something went wrong. Please try again or email me directly.');
      }
    } catch (err) {
      setStatus('error');
      setFeedback('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="pt-24 pb-24 max-w-[1140px] mx-auto px-4 font-outfit relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-first-color/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[250px] h-[250px] bg-first-color/5 blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2.5s' }}></div>

      <h2 className="text-[44px] font-bold text-center mb-20 uppercase tracking-[2px] text-title-color">
        Get In <span className="text-first-color">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-x-20 gap-y-16 items-start">
        {/* Info Column - Fade In Left */}
        <div className="animate-fadeInLeft" style={{ animationFillMode: 'both' }}>
          <h3 className="text-[28px] font-bold mb-6 text-title-color tracking-tight">Let’s Connect</h3>

          <p className="mb-10 leading-[1.8] text-text-color text-[16px] opacity-90">
            I’m always open to discussing new projects, innovative ideas, or opportunities to collaborate and bring your vision to life. Feel free to reach out!
          </p>

          <div className="space-y-8 mb-12">
            <a href="mailto:hamzaahmad3006@gmail.com" className="flex items-center gap-x-5 group p-4 rounded-2xl hover:bg-first-color/5 transition-all duration-300">
              <FaEnvelopeOpen className="text-[34px] text-first-color transition-transform group-hover:scale-110" />
              <div>
                <span className="block font-bold text-[15px] text-title-color opacity-60 uppercase tracking-widest mb-1">Mail Me</span>
                <span className="block font-bold text-[18px] text-title-color">hamzaahmad3006@gmail.com</span>
              </div>
            </a>

            <a href="tel:+923226075308" className="flex items-center gap-x-5 group p-4 rounded-2xl hover:bg-first-color/5 transition-all duration-300">
              <FaPhoneSquareAlt className="text-[34px] text-first-color transition-transform group-hover:scale-110" />
              <div>
                <span className="block font-bold text-[15px] text-title-color opacity-60 uppercase tracking-widest mb-1">Call Me</span>
                <span className="block font-bold text-[18px] text-title-color">+92 3226075308</span>
              </div>
            </a>
          </div>

          <div className="flex gap-x-5 px-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-container-color text-title-color hover:bg-first-color hover:text-white transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1.5"
              >
                <Icon className="text-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Form Column - Fade In Right */}
        <form onSubmit={handleSubmit} className="w-full animate-fadeInRight" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          {/* Honeypot spam trap (hidden from real users) */}
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input required name="name" type="text" placeholder="Your Name" className="glass w-full py-4 px-7 border border-first-color/10 rounded-full bg-container-color/50 text-title-color outline-none focus:border-first-color focus:bg-white transition-all shadow-sm backdrop-blur-sm" />
            <input required name="email" type="email" placeholder="Your Email" className="glass w-full py-4 px-7 border border-first-color/10 rounded-full bg-container-color/50 text-title-color outline-none focus:border-first-color focus:bg-white transition-all shadow-sm backdrop-blur-sm" />
          </div>
          <input required name="subject" type="text" placeholder="Your Subject" className="glass w-full py-4 px-7 border border-first-color/10 rounded-full bg-container-color/50 text-title-color outline-none focus:border-first-color focus:bg-white transition-all shadow-sm backdrop-blur-sm mb-6" />

          <textarea
            required
            name="message"
            className="glass w-full min-h-[180px] py-5 px-7 border border-first-color/10 rounded-[25px] bg-container-color/50 text-title-color outline-none focus:border-first-color focus:bg-white transition-all shadow-sm backdrop-blur-sm resize-none"
            placeholder="Your Message"
          ></textarea>

          {/* Status feedback */}
          {feedback && (
            <div
              role="status"
              className={`mt-6 px-6 py-4 rounded-2xl text-[14.5px] font-semibold border ${
                status === 'success'
                  ? 'bg-green-500/10 border-green-500/30 text-green-600'
                  : 'bg-red-500/10 border-red-500/30 text-red-500'
              }`}
            >
              {feedback}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group relative inline-flex items-center h-[60px] px-10 pr-[75px] border border-first-color/30 rounded-full text-title-color text-[16px] font-bold transition-all duration-500 hover:text-white hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(44,62,80,0.15)] overflow-hidden mt-8 bg-transparent disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
            <span className="absolute right-[4px] top-[4px] w-[52px] h-[52px] bg-first-color text-white rounded-full flex items-center justify-center text-[20px] transition-all duration-500 group-hover:bg-white shadow-lg">
              <FiSend className={`transition-all duration-500 group-hover:text-first-color ${status === 'sending' ? 'animate-pulse' : ''}`} />
            </span>
            <div className="absolute inset-0 bg-first-color -z-10 translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0"></div>
          </button>
        </form>
      </div>
    </section>
  );
}

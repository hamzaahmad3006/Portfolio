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

  const inputClass =
    'w-full py-3.5 px-5 rounded-xl bg-body-color border border-border-color text-title-color text-[15px] placeholder:text-text-color/60 outline-none transition-all duration-300 focus:border-first-color focus:ring-2 focus:ring-first-color/15';

  return (
    <section className="pt-24 pb-24 max-w-[1140px] mx-auto px-4 font-outfit relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-first-color/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[250px] h-[250px] bg-first-color/10 blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2.5s' }}></div>

      {/* Header */}
      <div className="text-center max-w-[640px] mx-auto mb-16 animate-fadeInUp">
        <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-first-color mb-4">
          Contact
        </span>
        <h2 className="text-[38px] lg:text-[46px] font-bold uppercase tracking-[1px] text-title-color leading-tight">
          Get In <span className="text-first-color">Touch</span>
        </h2>
        <p className="mt-5 text-[15.5px] text-text-color leading-relaxed">
          Have a project in mind or just want to say hello? Fill out the form and I’ll get back to
          you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 items-stretch">
        {/* Info Card */}
        <div
          className="bg-container-color border border-border-color rounded-[24px] p-8 lg:p-10 animate-fadeInLeft"
          style={{ animationFillMode: 'both' }}
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-[13px] font-semibold text-green-600">Available for freelance</span>
          </div>

          <h3 className="text-[26px] font-bold mb-4 text-title-color tracking-tight">Let’s Connect</h3>
          <p className="mb-9 leading-[1.8] text-text-color text-[15px]">
            I’m always open to discussing new projects, innovative ideas, or opportunities to
            collaborate and bring your vision to life.
          </p>

          <div className="space-y-4 mb-10">
            <a
              href="mailto:hamzaahmad3006@gmail.com"
              className="flex items-center gap-x-4 group p-4 rounded-2xl bg-body-color border border-border-color hover:border-first-color transition-all duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-first-color/10 text-first-color text-[20px] transition-all duration-300 group-hover:bg-first-color group-hover:text-white">
                <FaEnvelopeOpen />
              </span>
              <div className="min-w-0">
                <span className="block font-bold text-[12px] text-text-color uppercase tracking-widest mb-0.5">Mail Me</span>
                <span className="block font-semibold text-[15px] text-title-color truncate">hamzaahmad3006@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+923226075308"
              className="flex items-center gap-x-4 group p-4 rounded-2xl bg-body-color border border-border-color hover:border-first-color transition-all duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-first-color/10 text-first-color text-[20px] transition-all duration-300 group-hover:bg-first-color group-hover:text-white">
                <FaPhoneSquareAlt />
              </span>
              <div className="min-w-0">
                <span className="block font-bold text-[12px] text-text-color uppercase tracking-widest mb-0.5">Call Me</span>
                <span className="block font-semibold text-[15px] text-title-color">+92 3226075308</span>
              </div>
            </a>
          </div>

          <span className="block font-bold text-[12px] text-text-color uppercase tracking-widest mb-4">Follow Me</span>
          <div className="flex gap-x-3">
            {socialLinks.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-body-color border border-border-color text-title-color hover:bg-first-color hover:text-white hover:border-first-color transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="text-[17px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-container-color border border-border-color rounded-[24px] p-8 lg:p-10 animate-fadeInUp"
          style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
        >
          {/* Honeypot spam trap (hidden from real users) */}
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" />

          <h3 className="text-[22px] font-bold mb-6 text-title-color">Send a Message</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[13px] font-semibold text-title-color mb-2">Your Name</label>
              <input required name="name" type="text" placeholder="John Doe" className={inputClass} />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-title-color mb-2">Your Email</label>
              <input required name="email" type="email" placeholder="john@example.com" className={inputClass} />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-[13px] font-semibold text-title-color mb-2">Subject</label>
            <input required name="subject" type="text" placeholder="Project inquiry" className={inputClass} />
          </div>

          <div className="mb-2">
            <label className="block text-[13px] font-semibold text-title-color mb-2">Message</label>
            <textarea
              required
              name="message"
              className={`${inputClass} min-h-[160px] resize-none`}
              placeholder="Tell me about your project…"
            ></textarea>
          </div>

          {/* Status feedback */}
          {feedback && (
            <div
              role="status"
              className={`mt-5 px-5 py-4 rounded-xl text-[14px] font-semibold border ${
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
            className="group mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-first-color text-white text-[15px] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-first-color/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
            <FiSend className={`text-[18px] transition-transform duration-300 group-hover:translate-x-1 ${status === 'sending' ? 'animate-pulse' : ''}`} />
          </button>
        </form>
      </div>
    </section>
  );
}

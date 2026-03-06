import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Heart, ArrowUp, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-3xl font-display font-bold tracking-tighter text-white group">
                KEA<span className="text-accent group-hover:italic transition-all">H</span>
              </a>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with a focus on AI, data analytics, and modern web technologies. Based in Dumaguete City.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-accent hover:bg-accent/10 border border-white/5 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-accent group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="p-2 bg-white/5 rounded-lg text-accent">
                  <Mail size={14} />
                </div>
                <span>barenokcy@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="p-2 bg-white/5 rounded-lg text-accent">
                  <MapPin size={14} />
                </div>
                <span>Dumaguete City, PH</span>
              </li>
            </ul>
          </div>

          {/* Back to Top / CTA */}
          <div className="flex flex-col items-center lg:items-end justify-center space-y-6">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-accent group-hover:text-accent transition-all duration-500">
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-accent transition-colors">Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {currentYear} Keah Criselle Bareno. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={12} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>in Philippines</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </footer>
  );
};


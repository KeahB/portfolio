import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import NeuralBackground from './NeuralBackground';
import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const certifications = [
  {
    title: "Career Service Eligibility Professional Level 2",
    issuer: "Civil Service Commission",
    date: "Oct 2025",
    link: "/files/KOICA-Certificate-1.png",
    image: "/files/KOICA-Certificate-1.png"
  },
  {
    title: "Training on Foundational Big Data Analytics and Al",
    issuer: "KOICA DX Civil Society Cooperation",
    date: "Mar 2026",
    link: "/files/KOICA-Certificate-1.png",
    image: "/files/KOICA-Certificate-1.png"
  },
  {
    title: "Contact Center Service NC II",
    issuer: "TESDA",
    date: "Mar 2026",
    link: "/files/KOICA-Certificate-1.png",
    image: "/files/KOICA-Certificate-1.png"
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Feb 2026",
    link: "/files/Networking Basics.png",
    image: "/files/Networking Basics.png"
  },
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    issuer: "IBM SkillsBuild",
    date: "Feb 2026",
    link: "/files/AI Fundamentals with IBM SkillsBuild.png",
    image: "/files/AI Fundamentals with IBM SkillsBuild.png"
  },
  {
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy",
    date: "Feb 2026",
    link: "/files/Introduction to IoT and Digital Transformation.png",
    image: "/files/Introduction to IoT and Digital Transformation.png"
  },
  
];

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden perspective-1000"
    >
      <NeuralBackground />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        style={{ opacity, scale, rotateX }}
        className="container-custom"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-accent"
            >
              <Award size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Achievements</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-white leading-none">
              My <span className="text-accent italic">Certifications</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg font-light">
              Professional recognitions and specialized training that validate my technical expertise in AI and Networking.
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 group"
            >
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 group"
            >
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, x: 100, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100, rotateY: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image Side */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={certifications[currentIndex].image}
                    alt={certifications[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={certifications[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:bg-accent hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent">
                    <Calendar size={16} />
                    <span className="text-sm font-semibold">{certifications[currentIndex].date}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                    {certifications[currentIndex].title}
                  </h3>
                  <p className="text-2xl text-slate-400 font-medium italic">
                    {certifications[currentIndex].issuer}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {certifications.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${
                          i === currentIndex ? "w-12 bg-accent" : "w-4 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-slate-500 font-mono text-sm">
                    0{currentIndex + 1} / 0{certifications.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};


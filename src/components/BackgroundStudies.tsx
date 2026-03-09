import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const studies = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Science in Information Technology",
    institution: "Negros Oriental State University",
    description: "Focused on software development, database management, and networking foundations.",
    icon: GraduationCap
  },
  {
    year: "2020 - 2022",
    title: "Senior High School - STEM",
    institution: "Saint Paul University Dumaguete",
    description: "Science in Technology Mathematics and Engineering",
    icon: BookOpen
  },
  {
    year: "2016 - 2020",
    title: "Junior High School",
    institution: "Negros Academy Negros College Inc.",
    description: "Developed early interest in technology and computer science.",
    icon: School
  }
];

const TimelineItem = ({ study, index }: any) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    [index % 2 === 0 ? 100 : -100, 0, 0, index % 2 === 0 ? 100 : -100]
  );

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, scale, x }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Dot */}
      <motion.div 
        style={{ scale: useTransform(scrollYProgress, [0.2, 0.3], [0, 1.5]) }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-black z-10 hidden md:block" 
      />

      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-accent/30 transition-all group shadow-xl shadow-orange-500/5 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <study.icon size={24} />
            </div>
            <span className="text-accent font-mono text-sm font-bold tracking-wider">{study.year}</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {study.title}
          </h3>
          <p className="text-slate-400 font-medium mb-4">{study.institution}</p>
          <p className="text-slate-500 text-sm leading-relaxed font-light">{study.description}</p>
        </motion.div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
};

export const BackgroundStudies = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="studies" ref={containerRef} className="section-padding bg-black relative overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, 200]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1])
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -200]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1])
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container-custom">
        <div className="space-y-4 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            My Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-white"
          >
            Educational <span className="text-accent italic">Background</span>
          </motion.h2>
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="h-1.5 bg-accent rounded-full mx-auto w-24 origin-center" 
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line with Progress Animation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent via-orange-400 to-accent origin-top"
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {studies.map((study, i) => (
              <TimelineItem key={i} study={study} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


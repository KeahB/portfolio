import React from 'react';
import { motion } from 'motion/react';
import NeuralBackground from './NeuralBackground';
import { 
  Code2, Database, Layout, Terminal, Cpu, Github, 
  Wind, Server, Zap, Layers, Settings, Move, 
  Route, Image, Monitor, FileJson, Code, Table, 
  FileText, MessageSquare, Sparkles, Briefcase, Box, 
  Globe, Palette, BarChart3, Binary
} from 'lucide-react';

const skills = [
  { name: "JavaScript", icon: FileJson, color: "text-yellow-400" },
  { name: "React.js", icon: Cpu, color: "text-blue-400" },
  { name: "TypeScript", icon: Code, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
  { name: "Bootstrap", icon: Box, color: "text-purple-500" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "Express", icon: Zap, color: "text-yellow-500" },
  { name: "MySQL", icon: Database, color: "text-blue-500" },
  { name: "XAMPP", icon: Settings, color: "text-orange-500" },
  { name: "Laravel", icon: Layers, color: "text-red-500" },
  { name: "Framer Motion", icon: Move, color: "text-pink-500" },
  { name: "HTML5", icon: Code2, color: "text-orange-600" },
  { name: "CSS3", icon: Palette, color: "text-blue-500" },
  { name: "SQL", icon: Database, color: "text-indigo-400" },
  { name: "Python", icon: Terminal, color: "text-blue-400" },
  { name: "Pandas", icon: BarChart3, color: "text-indigo-500" },
  { name: "NumPy", icon: Binary, color: "text-blue-500" },
  { name: "React Router", icon: Route, color: "text-red-400" },
  { name: "GitHub", icon: Github, color: "text-white" },
  { name: "VS Code", icon: Monitor, color: "text-blue-500" },
  { name: "Canva", icon: Image, color: "text-cyan-500" },
  { name: "Excel", icon: Table, color: "text-green-600" },
  { name: "Word", icon: FileText, color: "text-blue-700" },
  { name: "Google Docs", icon: FileText, color: "text-blue-400" },
  { name: "Google Sheets", icon: Table, color: "text-green-500" },
  { name: "Office 365", icon: Briefcase, color: "text-red-400" },
  { name: "ChatGPT", icon: MessageSquare, color: "text-emerald-500" },
  { name: "Gemini", icon: Sparkles, color: "text-blue-400" },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-black relative overflow-hidden">
      <NeuralBackground />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            My Tech Stack
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-white">
            Tools & <span className="text-accent italic">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent rounded-full mx-auto" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A comprehensive collection of technologies and software I use to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: i * 0.05 
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 106, 0, 0.5)"
              }}
              className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl transition-all duration-300 w-24 h-24 md:w-32 md:h-32 shadow-xl hover:shadow-accent/20"
            >
              <div className={`mb-2 transition-transform duration-500 group-hover:rotate-12 ${skill.color}`}>
                <skill.icon size={32} className="md:w-10 md:h-10" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-slate-300 group-hover:text-white text-center leading-tight">
                {skill.name}
              </span>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-accent rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


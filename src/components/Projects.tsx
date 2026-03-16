import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Folder, Sparkles } from 'lucide-react';
import p1Image from "../assets/files/project1.png";
import p2IMage from "../assets/files/project2.png";
const projects = [
  {
    title: "AI Data Explorer",
    description: "The app allows users to upload CSV or JSON datasets. Once uploaded, it instantly performs a deep statistical analysis, identifying numeric and categorical columns.",
    tech: ["React19", "Node.js", "TypeScript", "Express", "Gemini API","Tailwind CSS"],
    github: "https://github.com/KeahB/AI-Data-Explorer",
    live: "https://ai-data-explorer.onrender.com/",
    image: p1Image,
    color: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "Vagabound AI",
    description: "Vagabound AI is a web-based application that helps users generate personalized travel itineraries using artificial intelligence. The system allows users to input their destination and travel preferences, then automatically creates suggested activities, attractions, and travel plans.",
    tech: ["Next.js", "GEMINI AI API", "React", "Tailwind CSS"],
    github: "https://github.com/KeahB/AI-Travel-Planner",
    live: "https://vagabound-ai.vercel.app/",
    image: p2IMage,
    color: "from-emerald-600/20 to-teal-600/20"
  }
  // {
  //   title: "Crypto Tracker",
  //   description: "Real-time cryptocurrency monitoring dashboard with interactive charts and price alerts.",
  //   tech: ["React", "D3.js", "Coingecko API", "Firebase"],
  //   github: "#",
  //   live: "#",
  //   image: "https://picsum.photos/seed/crypto/800/600",
  //   color: "from-orange-600/20 to-red-600/20"
  // },
  // {
  //   title: "Social Connect",
  //   description: "A minimalist social media platform focused on privacy and meaningful interactions.",
  //   tech: ["React Native", "GraphQL", "AWS Amplify"],
  //   github: "#",
  //   live: "#",
  //   image: "https://picsum.photos/seed/social/800/600",
  //   color: "from-purple-600/20 to-pink-600/20"
  // }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index % 2 * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl hover:border-accent/40 transition-all duration-500"
    >
      {/* Folder Tab Effect */}
      <div className="absolute top-0 left-8 w-24 h-6 bg-white/10 rounded-t-xl -translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-x border-t border-white/10" />
      
      {/* Background Gradient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10`} />
      
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Floating Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest">
            Project 0{index + 1}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6">
          <div className="flex items-center justify-between">
            <div className="p-2.5 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
              <Folder size={20} />
            </div>
            <div className="flex items-center gap-3">
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href={project.github} 
                className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-accent transition-all border border-white/5"
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href={project.live} 
                className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-accent transition-all border border-white/5"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm font-light line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="pt-4 mt-auto border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string, j: number) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-bold rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles size={14} />
            <span>Portfolio</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white leading-none">
            Featured <span className="text-accent italic">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-xl">
            A curated selection of my work, showcasing expertise in AI integration, data analysis, and full-stack development.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              project={project} 
              index={i} 
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/KeahB?tab=repositories"
            target="_blank"
            className="group relative px-10 py-5 bg-white text-black rounded-2xl font-bold text-base overflow-hidden transition-all flex items-center gap-3 hover:pr-12"
          >
            <span className="relative z-10">View More Projects</span>
            <ExternalLink 
              size={18} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};



import React from 'react';
import { motion } from 'motion/react';
import NeuralBackground from './NeuralBackground';
import { Download, User, Mail, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

export const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/KEAH-CV.pdf";
    link.download = "Keah-Bareno-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const personalDetails = [
    { icon: User, label: "Name", value: "Keah Bareno" },
    { icon: Mail, label: "Email", value: "barenokcy@gmail.com" },
    { icon: MapPin, label: "Location", value: "Dumaguete City" },
    { icon: Calendar, label: "Experience", value: "2+ Years" },
    { icon: Briefcase, label: "Role", value: "Frontend Developer" },
    { icon: GraduationCap, label: "Education", value: "BS in Information Technology" },
  ];

  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      <NeuralBackground />
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Transparent Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-12 items-start">
                
                {/* Small Picture Column */}
                <div className="flex flex-col items-center space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-accent/30 p-1 bg-black/20"
                  >
                    <img
                      src="/pics/keah-about.jpg"
                      alt="Keah Bareno"
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white">Keah Bareno</h3>
                    <p className="text-accent text-sm font-medium">AI Prompt Engineer</p>
                  </div>
                  
                  <motion.button
                    onClick={handleDownloadCV}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-accent/20 transition-all"
                  >
                    <Download size={18} /> Download CV
                  </motion.button>
                </div>

                {/* Details Column */}
                <div className="md:col-span-2 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-bold text-white">
                      Personal <span className="text-accent">Details</span>
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                      I am an AI Prompt Engineer and Frontend Developer passionate about building intelligent, dynamic, and user-centered digital experiences. I combine technical foundations in networking with modern AI-driven solutions.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {personalDetails.map((detail, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors group/item"
                      >
                        <div className="p-2.5 bg-accent/10 rounded-lg text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">
                          <detail.icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{detail.label}</p>
                          <p className="text-slate-200 font-medium truncate max-w-[150px]">{detail.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

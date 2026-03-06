import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import NeuralBackground from './NeuralBackground';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      <NeuralBackground />
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, 300]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1])
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -300]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1])
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <motion.div 
        style={{ opacity, scale, y: springY }}
        className="container-custom"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest"
              >
                <Sparkles size={14} />
                <span>Available for projects</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white leading-none">
                Let's <span className="text-accent italic">Connect</span>
              </h2>
              <div className="w-24 h-1.5 bg-accent rounded-full" />
              <p className="text-slate-400 max-w-md text-xl leading-relaxed font-light">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "barenokcy@gmail.com", href: "mailto:barenokcy@gmail.com" },
                { icon: Phone, label: "Phone", value: "+639764810506", href: "tel:+639764810506" },
                { icon: MapPin, label: "Location", value: "Daro, Dumaguete City", href: "#" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="p-4 bg-white/5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-white/5 shadow-lg group-hover:shadow-accent/20">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{item.label}</p>
                    <a href={item.href} className="text-2xl font-display font-bold text-white hover:text-accent transition-colors duration-300 tracking-tight">{item.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Follow My Journey</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -8, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-5 bg-white/5 rounded-2xl text-slate-400 hover:text-accent transition-all border border-white/5 hover:border-accent/30 hover:bg-accent/5 shadow-xl"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="relative"
          >
            {/* Form Decorative Glow */}
            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-3xl -z-10 opacity-50" />
            
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent transition-all outline-none text-white placeholder:text-slate-600 font-medium"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent transition-all outline-none text-white placeholder:text-slate-600 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent transition-all outline-none resize-none text-white placeholder:text-slate-600 font-medium"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-5 bg-accent text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all disabled:opacity-70 group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSuccess ? (
                    "Message Sent Successfully!"
                  ) : (
                    <>
                      Send Message 
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


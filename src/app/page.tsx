"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

export default function Home() {
  return (
    <main id="inicio">
      <Hero />
      
      {/* Logos Section / Social Proof */}
      <section className="py-12 md:py-16 border-y border-white/5 bg-[#0B0C10] overflow-hidden">
        <Container>
          <Typography variant="small" className="text-center mb-8 uppercase tracking-[0.3em] font-bold text-gray-500 opacity-60 text-[10px] md:text-xs">
            Empresas que ya optimizaron sus procesos
          </Typography>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-30 hover:opacity-100 transition-all duration-500 px-4">
            <span className="text-xl md:text-2xl font-black italic text-white tracking-tighter">GROWINTEL</span>
            <span className="text-xl md:text-2xl font-black italic text-white tracking-tighter">TECHNOVA</span>
            <span className="text-xl md:text-2xl font-black italic text-white tracking-tighter">NEXUS AI</span>
            <span className="text-xl md:text-2xl font-black italic text-white tracking-tighter">SYSTEMA</span>
            <span className="text-xl md:text-2xl font-black italic text-white tracking-tighter">OPERA</span>
          </div>
        </Container>
      </section>

      <div id="servicios">
        <ServicePillars />
      </div>

      {/* Authority Section / Alex Maurici */}
      <section id="nosotros" className="py-20 md:py-24 bg-[#0B0C10] overflow-hidden relative">
        {/* Subtle grid in background */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(to right, #FF0000 1px, transparent 1px), linear-gradient(to bottom, #FF0000 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at 70% 30%, black, transparent 70%)'
          }}
        />

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-red-600/20 rounded-3xl rotate-3 -z-10 translate-x-4 translate-y-4 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                <div className="bg-white/5 rounded-3xl aspect-[4/5] flex items-center justify-center border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
                  {/* Placeholder for professional photo with a technical overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-60" />
                  <Typography className="text-gray-500 italic px-8 text-center text-sm">
                    [Fotografía Profesional de Alex Maurici: Ingeniero Mecánico y Consultor de IA]
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Typography variant="small" className="text-red-500 font-bold uppercase tracking-[0.3em] mb-4">Misión y Visión</Typography>
              <Typography variant="h2" className="mb-8 text-white tracking-tight">Alex Maurici IA</Typography>
              
              <div className="space-y-6 mb-10">
                <Typography variant="body" className="text-gray-400 text-lg leading-relaxed">
                  Nuestra misión es ayudar a las empresas a integrar inteligencia artificial para <span className="text-white font-semibold">optimizar su rendimiento</span>. Creemos en un futuro donde la tecnología facilita procesos y mejora la toma de decisiones.
                </Typography>
                <Typography variant="body" className="text-gray-400 text-lg leading-relaxed">
                  Trabajamos con una visión clara: ser la consultora líder en el ámbito de la inteligencia artificial, ofreciendo soluciones personalizadas que impulsen el <span className="text-white font-semibold">éxito real</span> de nuestros clientes.
                </Typography>
              </div>

              <ul className="space-y-5 mb-10">
                {[
                  "Soluciones personalizadas y escalables",
                  "Enfoque en eficiencia operativa y ROI",
                  "Acompañamiento en la mejora de procesos"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                    <Typography variant="body" className="text-gray-300 font-medium">{item}</Typography>
                  </motion.li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center space-x-3 text-white font-bold bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/10 transition-all"
              >
                <span>Conocer más sobre nosotros</span>
                <ChevronRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

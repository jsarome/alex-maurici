"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";

export const Hero = () => {
  // Mouse interaction for the grid glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX.set(e.touches[0].clientX);
        mouseY.set(e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  const handleBooking = () => {
    window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssI2YfBvU0R0B5p7vWf9W5_0B1pE_Z6g7yB8_j3w8", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0C10] overflow-hidden pt-20">
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #FF0000 1px, transparent 1px),
              linear-gradient(to bottom, #FF0000 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />
        
        {/* Dynamic Glow that follows mouse */}
        <motion.div 
          className="absolute w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full -z-10"
          style={{
            left: springX,
            top: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <Typography variant="small" className="text-red-400 font-bold tracking-wider uppercase">
                Primero procesos, luego herramientas
              </Typography>
            </div>

            <Typography variant="h1" className="text-white mb-6 leading-tight">
              Potencia tu negocio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Inteligencia Artificial</span>
            </Typography>
            
            <Typography variant="h3" className="text-gray-400 mb-10 font-normal leading-relaxed">
              Soy <span className="text-white font-bold">Alex Maurici</span>. Ayudo a PyMEs a escalar mediante la eficiencia operativa y la automatización inteligente.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={handleBooking}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-red-600 rounded-lg hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/20"
              >
                Agendar Consulta Gratuita
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-gray-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white active:scale-95"
              >
                Ver Soluciones
              </button>
            </div>

            <div className="mt-16 flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">+50</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">PyMEs Optimizadas</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">24/7</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Atención IA</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">40%</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Ahorro Tiempo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

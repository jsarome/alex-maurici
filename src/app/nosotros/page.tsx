"use client";

import { Container } from "@/components/ui/Container";
import { Typography, SectionTitle } from "@/components/ui/Typography";
import { Mail, Phone, MapPin, Send, Zap, Award, CheckCircle2, User, Target, Rocket } from "lucide-react";

export default function Nosotros() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Hero Section */}
        <div className="max-w-4xl mb-32">
          <Typography variant="small" className="text-primary font-bold uppercase tracking-[0.3em] mb-4">Nosotros</Typography>
          <Typography variant="h1" className="mb-6 text-6xl md:text-7xl">
            Ingeniería aplicada a la <span className="text-primary italic">IA</span>.
          </Typography>
          <Typography variant="h3" className="mb-8 text-2xl md:text-3xl font-light text-gray-400">
            Donde la capacidad resolutiva se encuentra con la innovación.
          </Typography>
          <Typography variant="body" className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Transforma la manera en que tu empresa opera con nuestra consultoría en inteligencia artificial. Te ayudamos a optimizar procesos, analizar datos y desarrollar soluciones personalizadas que se adaptan a tus necesidades.
          </Typography>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="/contacto" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Contáctanos
            </a>
            <button 
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssI2YfBvU0R0B5p7vWf9W5_0B1pE_Z6g7yB8_j3w8', '_blank')}
              className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Agendar Consulta
            </button>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
          <div>
            <Typography variant="h2" className="mb-10 flex items-center gap-4">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              Nuestra historia y valores
            </Typography>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                <span className="text-white font-semibold">Alex Maurici IA</span> nace de la combinación entre ingeniería y curiosidad por la inteligencia artificial. Desde 2023, explorando las posibilidades de la IA, descubrimos su potencial real: no solo automatizar, sino transformar completamente la forma en que los negocios operan.
              </p>
              <p>
                Lo que comenzó como experimentación con herramientas de IA se convirtió en una misión clara: ayudar a empresas a implementar soluciones prácticas que generen resultados medibles. Sin complicaciones técnicas, sin promesas vacías. Solo sistemas que funcionan.
              </p>
              <p>
                Nuestra filosofía es simple: <span className="text-white font-semibold">Cada negocio merece acceso a tecnología de vanguardia</span>, sin importar su tamaño. La IA no es solo para grandes corporaciones. Es para ese centro de estética que pierde clientes por citas olvidadas. Para esa clínica que dedica horas a responder las mismas preguntas.
              </p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-primary" />
             </div>
             <Typography variant="h4" className="text-primary mb-6 uppercase tracking-widest text-sm">El Enfoque</Typography>
             <Typography variant="body" className="text-xl text-white mb-8 italic leading-relaxed">
                "Combinamos conocimiento en ingeniería con comprensión profunda de procesos empresariales. No vendemos tecnología por vender. Desarrollamos soluciones que resuelven problemas reales."
             </Typography>
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <Zap size={24} />
                   </div>
                   <Typography className="text-gray-300 font-medium">Resultados prácticos y medibles</Typography>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle2 size={24} />
                   </div>
                   <Typography className="text-gray-300 font-medium">Implementación moderna y ética</Typography>
                </div>
             </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-40 pt-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-white/5 rounded-[40px] border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 italic px-12 text-center text-sm">
                   [Fotografía de Alexandre Maurici Moreiras Marcelo]
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <Typography variant="h3" className="text-white text-3xl mb-1">Alexandre Maurici</Typography>
                  <Typography className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Fundador & Consultor de IA</Typography>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-3xl shadow-xl shadow-primary/40 rotate-3 hidden md:block">
                <Award size={40} className="text-white" />
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Typography variant="small" className="text-primary font-bold uppercase tracking-[0.3em] mb-4">Quién está detrás</Typography>
              <Typography variant="h2" className="mb-8 text-white">Alexandre Maurici Moreiras Marcelo</Typography>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Soy <span className="text-white font-semibold">ingeniero mecánico y consultor de IA</span> enfocado en una cosa: hacer que tu empresa funcione más rápido, con menos fricción y menos costes, usando automatización y sistemas inteligentes.
                </p>
                <p>
                  Me especializo en detectar cuellos de botella en procesos (captación de leads, atención al cliente, gestión interna, seguimiento comercial, reporting…) y convertirlos en flujos claros y medibles.
                </p>
                <p className="bg-white/5 p-8 rounded-3xl border-l-4 border-primary text-white italic">
                  "Mi enfoque es 100% práctico: primero proceso, luego herramienta. No vendo 'IA por tener IA', sino implementaciones que se notan en el día a día."
                </p>
                <p>
                  Desde automatizaciones en WhatsApp, email y web, hasta agentes virtuales que atienden, filtran, califican y derivan tareas sin que tu equipo tenga que perseguirlo todo manualmente. Cuando tiene sentido, también acompaño en la implantación de CRM y sistemas de gestión (como Odoo) para que todo quede integrado y ordenado.
                </p>
                <p className="text-white font-bold">
                  Si buscas aplicar IA de forma realista y rentable, aquí es donde empieza.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                    <div className="text-4xl font-black text-white mb-2">100<span className="text-primary">%</span></div>
                    <Typography className="text-gray-400 text-sm">Servicio de calidad y atención personalizada.</Typography>
                 </div>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                    <div className="text-4xl font-black text-white mb-2">100<span className="text-primary">%</span></div>
                    <Typography className="text-gray-400 text-sm">Estilo moderno y ético en cada implementación.</Typography>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-12 md:p-24 rounded-[60px] text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <Typography variant="h2" className="mb-8 text-white text-4xl md:text-5xl font-black">¿Listo para recuperar tu agenda?</Typography>
            <Typography variant="body" className="text-white/90 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
              Si sos dueño de una estética, clínica o consultorio y sentís que la gestión administrativa te está consumiendo, hablemos.
            </Typography>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contacto" 
                className="bg-white text-primary px-10 py-5 rounded-2xl font-black hover:bg-gray-100 transition-all shadow-xl active:scale-95"
              >
                Comenzar Auditoría Gratuita
              </a>
              <button 
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssI2YfBvU0R0B5p7vWf9W5_0B1pE_Z6g7yB8_j3w8', '_blank')}
                className="bg-black/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-black/30 transition-all active:scale-95"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

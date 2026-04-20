"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Typography, SectionTitle } from "../ui/Typography";
import { BrainCircuit, Workflow, LayoutDashboard, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Automatización de Procesos",
    description: "Elimina tareas repetitivas y libera tiempo para lo que realmente importa. Desde gestión de citas hasta recordatorios automáticos.",
    icon: Workflow,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Asistentes Virtuales Inteligentes",
    description: "Atiende a tus clientes 24/7 con agentes de IA que conocen tu negocio y responden como si fueras tú.",
    icon: BrainCircuit,
    color: "from-indigo-600 to-indigo-400",
  },
  {
    title: "Implementación de CRM",
    description: "Centraliza la gestión de tu negocio en una sola plataforma: clientes, ventas, inventario y más.",
    icon: LayoutDashboard,
    color: "from-cyan-600 to-cyan-400",
  },
];

export const ServicePillars = () => {
  return (
    <section id="servicios" className="py-24 bg-[#0B0C10] border-t border-white/5 relative overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <Typography variant="small" className="text-red-500 font-bold uppercase tracking-[0.3em] mb-4">Soluciones</Typography>
          <Typography variant="h2" className="text-white mb-6">Cómo podemos ayudarte</Typography>
          <Typography variant="body" className="max-w-2xl mx-auto text-gray-400">
            Diseñamos sistemas que trabajan por vos, permitiéndote enfocarte en lo que realmente importa: hacer crecer tu empresa.
          </Typography>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-8 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 p-10 rounded-2xl border border-white/5 hover:border-red-500/20 hover:shadow-2xl hover:shadow-red-500/5 transition-all group backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8" />
              </div>
              <Typography variant="h3" className="mb-4 text-white text-2xl">{step.title}</Typography>
              <Typography variant="body" className="mb-8 text-gray-400">
                {step.description}
              </Typography>
              <Link 
                href="/servicios" 
                className="inline-flex items-center text-red-500 font-bold group-hover:translate-x-2 transition-transform"
              >
                Saber más <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

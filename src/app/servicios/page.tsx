"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, LineChart, MessageSquare, Clock, ShieldCheck, Headphones } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Typography, SectionTitle } from "@/components/ui/Typography";

const services = [
  {
    title: "Automatización de CRM",
    description: "Sincronizamos tus herramientas para que no pierdas ni un solo lead. Implementación de flujos en Odoo, Salesforce o Hubspot.",
    details: ["Manejo de contactos automático", "Pipeline de ventas optimizado", "Recordatorios de citas", "Integración con calendarios"],
    icon: Clock,
  },
  {
    title: "Agentes de IA y Chatbots",
    description: "Atención al cliente personalizada las 24 horas del día. Respuestas humanizadas y agendamiento directo desde el chat.",
    details: ["Integración con WhatsApp/IG", "Entrenamiento con tus propios datos", "Cierre de ventas automático", "Escalamiento humano inteligente"],
    icon: MessageSquare,
  },
  {
    title: "Análisis y Predicción",
    description: "Transformamos tus reportes estáticos en dashboards dinámicos que predicen tendencias y detectan fugas de dinero.",
    details: ["Visualización en tiempo real", "KPIs de rendimiento operativo", "Predicción de demanda", "Reportes semanales automáticos"],
    icon: LineChart,
  }
];

const faqs = [
  {
    question: "¿Cuánto tiempo demora la implementación?",
    answer: "Depende de la complejidad, pero una automatización base suele estar operativa en 10 a 15 días hábiles después de la auditoría inicial."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "Para nada. Nosotros nos encargamos de toda la ingeniería 'bajo el capó'. Vos solo recibís un sistema simple que funciona solo."
  },
  {
    question: "¿Cómo es el soporte post-vía?",
    answer: "Ofrecemos planes de mantenimiento preventivo y soporte prioritario para asegurar que los flujos nunca se detengan."
  }
];

const FAQAccordion = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-6">
      <button 
        className="flex w-full items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="h4" className="text-lg group-hover:text-primary transition-colors">{question}</Typography>
        <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Typography variant="body" className="pt-4 text-muted">
              {answer}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Servicios() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-3xl mb-24">
          <Typography variant="h1" className="mb-8">Nuestras <span className="text-primary italic">Soluciones</span>.</Typography>
          <Typography variant="body" className="text-xl">
            Desglosamos la ingeniería detrás de cada proceso para ofrecerte soluciones llave en mano que impacten positivamente en tu margen de ganancia.
          </Typography>
        </div>

        {/* Services Detail */}
        <div className="space-y-32 mb-32">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <service.icon className="w-8 h-8" />
                </div>
                <Typography variant="h2" className="mb-6">{service.title}</Typography>
                <Typography variant="body" className="text-lg mb-8">{service.description}</Typography>
                <ul className="space-y-4">
                  {service.details.map(detail => (
                    <li key={detail} className="flex items-center space-x-3">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <Typography variant="body">{detail}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-secondary aspect-video rounded-3xl flex items-center justify-center">
                <Typography className="text-muted italic px-8 text-center">[Interfaz / Dashboard Demo de {service.title}]</Typography>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-24 border-t">
          <SectionTitle 
            title="Dudas Frecuentes"
            subtitle="Todo lo que necesitás saber antes de empezar la transformación digital de tu negocio."
            centered
          />
          <div className="mt-12 bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12">
            {faqs.map(faq => (
              <FAQAccordion key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

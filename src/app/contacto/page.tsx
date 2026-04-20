"use client";

import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contacto() {
  return (
    <div className="py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <Typography variant="h1" className="mb-8">Hablemos de <span className="text-primary italic">eficiencia</span>.</Typography>
            <Typography variant="body" className="text-xl mb-12">
              Estamos listos para auditar tus procesos y encontrar las oportunidades de automatización que tu PyME necesita.
            </Typography>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h4" className="mb-1 text-sm uppercase tracking-widest text-muted">Email</Typography>
                  <Typography variant="body" className="font-bold text-lg">contacto@growintell.com</Typography>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h4" className="mb-1 text-sm uppercase tracking-widest text-muted">Atención</Typography>
                  <Typography variant="body" className="font-bold text-lg">Remoto para todo el mundo</Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-100 border">
            <Typography variant="h3" className="mb-8">Envíanos un mensaje</Typography>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-brand bg-gray-50 border focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Empresa / Clínica</label>
                  <input 
                    type="text" 
                    placeholder="Tu negocio"
                    className="w-full px-4 py-3 rounded-brand bg-gray-50 border focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Corporativo</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@growintell.com"
                  className="w-full px-4 py-3 rounded-brand bg-gray-50 border focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="¿En qué área sentís que perdés más tiempo?"
                  className="w-full px-4 py-3 rounded-brand bg-gray-50 border focus:border-primary outline-none transition-all resize-none"
                />
              </div>
              <Button size="lg" className="w-full group">
                Enviar Solicitud
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-32 w-full h-[400px] bg-secondary rounded-[40px] flex items-center justify-center overflow-hidden grayscale contrast-125 border">
           <Typography className="text-muted italic px-8 text-center">[Mapa de Ubicación / Cobertura Global]</Typography>
        </div>
      </Container>
    </div>
  );
}

import { Container } from "@/components/ui/Container";
import { Typography, SectionTitle } from "@/components/ui/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Alex Maurici",
  description: "Conocé la historia y el enfoque de ingeniería detrás de SmartIntel IA.",
};

export default function Nosotros() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-3xl mb-24">
          <Typography variant="h1" className="mb-8">
            Ingeniería de procesos aplicada a la <span className="text-primary italic">IA</span>.
          </Typography>
          <Typography variant="body" className="text-xl">
            No somos una agencia de marketing más. Somos ingenieros que analizan datos y optimizan flujos de trabajo para liberar el recurso más valioso de cualquier dueño de negocio: el tiempo.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <Typography variant="h2" className="mb-8 font-extrabold">Nuestra Filosofía</Typography>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <Typography variant="h4" className="mb-2">Obsesión por la Eficiencia</Typography>
                <Typography variant="body">
                  Cada clic, cada mensaje y cada tarea manual evitable es un desperdicio de potencial. Nuestra misión es eliminar la fricción operativa.
                </Typography>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <Typography variant="h4" className="mb-2">La IA como Herramienta, no como Fin</Typography>
                <Typography variant="body">
                  No implementamos IA porque "está de moda". La usamos para resolver cuellos de botella específicos que identificamos en tu fase de auditoría.
                </Typography>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <Typography variant="h4" className="mb-2">Resultados Medibles</Typography>
                <Typography variant="body">
                  Si no se puede medir, no se puede mejorar. Todos nuestros sistemas entregan métricas claras de ahorro de tiempo y conversión.
                </Typography>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-secondary rounded-3xl relative p-12 flex flex-col justify-center">
            <Typography variant="h3" className="text-primary mb-6 italic text-5xl">"Primero procesos, luego herramientas."</Typography>
            <Typography variant="body" className="font-bold uppercase tracking-wider text-sm">
              — Mantra de ingeniería de Alex Maurici
            </Typography>
          </div>
        </div>

        <div className="bg-primary text-white p-12 md:p-24 rounded-[40px] text-center shadow-2xl shadow-blue-300">
          <Typography variant="h2" className="mb-8 text-white">¿Listo para recuperar tu agenda?</Typography>
          <Typography variant="body" className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Si sos dueño de una estética, clínica o consultorio y sentís que la gestión administrativa te está consumiendo, hablemos.
          </Typography>
          <div className="flex justify-center">
            <a 
              href="/contacto" 
              className="bg-white text-primary px-10 py-4 rounded-brand font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Comenzar Auditoría Gratuita
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

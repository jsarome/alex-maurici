import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Alex Maurici",
  description: "Descubrí nuestras soluciones de automatización de CRM, agentes de IA y análisis de datos.",
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Alex Maurici",
  description: "Ponete en contacto con nosotros para auditar tus procesos y encontrar oportunidades de automatización con IA.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

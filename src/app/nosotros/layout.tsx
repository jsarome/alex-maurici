import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Alex Maurici",
  description: "Conocé la historia y el enfoque de ingeniería detrás de Alex Maurici IA.",
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

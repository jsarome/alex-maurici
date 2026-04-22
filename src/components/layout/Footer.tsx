import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Mail, Cpu, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

export const Footer = () => {
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <footer id="contacto" className="bg-[#0B0C10] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle light effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-red-600 p-2 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase">
                ALEX MAURICI<span className="text-red-600">.</span>
              </span>
            </div>
            <Typography variant="h3" className="text-white mb-6 text-3xl font-bold tracking-tight">¿Hablamos?</Typography>
            <Typography variant="body" className="text-gray-400 mb-8 max-w-sm text-lg leading-relaxed">
              Estamos listos para transformar tu negocio con soluciones de IA que realmente funcionan. No esperes a que el futuro te pase de largo.
            </Typography>
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/alexmaurici/", label: "LinkedIn" },
                { icon: FaFacebookF, href: "https://www.facebook.com/alexmauriciia/", label: "Facebook" },
                { icon: FaInstagram, href: "http://www.instagram.com/morichi.ia", label: "Instagram" }
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="bg-white/5 p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <Typography variant="h4" className="text-white mb-8 text-lg font-bold border-l-4 border-red-600 pl-4 uppercase tracking-wider">Contacto</Typography>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4 group">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-300">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-0.5">Email</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors truncate text-sm">hola@alexmaurici.com</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-300">
                  <span className="text-red-600 font-black text-[10px] tracking-tighter">WA</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-0.5">Whatsapp</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">+376 363683</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <Typography variant="h4" className="text-white mb-8 text-lg font-bold border-l-4 border-red-600 pl-4 uppercase tracking-wider">Navegación</Typography>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-red-500 transition-all flex items-center group text-sm md:text-base font-medium">
                    <ChevronRight className="w-4 h-4 text-red-600/0 group-hover:text-red-600 -ml-5 group-hover:ml-0 transition-all mr-2" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="small" className="text-gray-500 font-medium tracking-tight">
            © 2026 Alex Maurici. Todos los derechos reservados.
          </Typography>
          <div className="flex space-x-8">
            <Link href="#" className="text-[10px] text-gray-600 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">Privacidad</Link>
            <Link href="#" className="text-[10px] text-gray-600 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">Términos</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

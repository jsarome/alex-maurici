"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0C10]/80 backdrop-blur-md border-b border-white/5">
      <Container>
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-red-500/50 transition-colors">
              <Image 
                src="/logo.png" 
                alt="Alex Maurici" 
                width={40}
                height={40}
                className="object-contain p-1.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white leading-none">ALEX MAURICI</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-red-500">IA & INGENIERÍA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssI2YfBvU0R0B5p7vWf9W5_0B1pE_Z6g7yB8_j3w8', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all active:scale-95 shadow-lg shadow-red-600/20"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#0B0C10] border-b border-white/5 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold tracking-tight ${
                    pathname === item.href ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssI2YfBvU0R0B5p7vWf9W5_0B1pE_Z6g7yB8_j3w8', '_blank');
                }}
                className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-600/20 active:scale-95 transition-all"
              >
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

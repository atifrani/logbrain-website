import React from 'react';
import { Brain } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

export function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8" />
            <span className="font-bold text-xl">Logbrain</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#clients">Clients</NavLink>
            <NavLink href="#appointments">Book a Call</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Twitter, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-32 bg-white px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-16">
        <div className="text-5xl font-display font-black tracking-tighter uppercase italic opacity-10">
          Sea Makeup
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <a href="#" className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-black/40 hover:text-pink-500 transition-colors group">
            <Instagram size={16} className="group-hover:scale-110 transition-transform" />
            إنستغرام
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-black/40 hover:text-blue-400 transition-colors group">
            <Twitter size={16} className="group-hover:scale-110 transition-transform" />
            تويتر
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-black/40 hover:text-red-500 transition-colors group">
            <Youtube size={16} className="group-hover:scale-110 transition-transform" />
            يوتيوب
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-black/40 hover:text-sky-500 transition-colors group">
            <Send size={16} className="group-hover:scale-110 transition-transform" />
            تليغرام
          </a>
        </div>
        <div className="w-full h-px bg-black/5" />
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-gray-200 tracking-[0.5em] uppercase">
            صمم للتميز.
          </div>
          <div className="text-[10px] font-bold text-gray-300 tracking-[0.4em] uppercase text-center">
            © 2026 سي ميك أب بيوتي. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}

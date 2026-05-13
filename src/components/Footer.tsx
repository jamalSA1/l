/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Twitter, Youtube, Send, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-32 bg-white px-8 border-t border-black/5 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-16">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors shadow-xl group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

        <div className="text-5xl font-display font-black uppercase italic opacity-10">
          Sea Makeup
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase text-black/40 hover:text-pink-500 transition-colors group">
            <Instagram size={16} className="group-hover:scale-110 transition-transform" />
            إنستغرام
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase text-black/40 hover:text-blue-400 transition-colors group">
            <Twitter size={16} className="group-hover:scale-110 transition-transform" />
            تويتر
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase text-black/40 hover:text-red-500 transition-colors group">
            <Youtube size={16} className="group-hover:scale-110 transition-transform" />
            يوتيوب
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase text-black/40 hover:text-sky-500 transition-colors group">
            <Send size={16} className="group-hover:scale-110 transition-transform" />
            تليغرام
          </a>
        </div>
        <div className="w-full h-px bg-black/5" />
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-gray-200 uppercase">
            صمم للتميز.
          </div>
          <div className="text-[10px] font-bold text-gray-300 uppercase text-center">
            © 2026 سي ميك أب بيوتي. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}

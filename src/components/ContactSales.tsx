/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import bgContact from "../assets/images/input_file_4.png";

interface ContactSalesProps {
  fadeIn: any;
}

export default function ContactSales({ fadeIn }: ContactSalesProps) {
  return (
    <section
      id="contact-sales"
      className="relative py-40 overflow-hidden bg-white"
    >
      {/* Background Image - Matching Section 1 style exactly */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bgContact}
          alt="Background texture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/90" />
      </div>

      <div className="max-w-4xl mx-auto px-12 relative z-10 text-center space-y-16">
        <motion.div {...fadeIn} className="space-y-6">
          <p className="text-[12px] font-black text-pink-500 uppercase block">
            هل تودين الحصول على تجربة مخصصة؟
          </p>
          <h2 className="text-5xl md:text-7xl font-medium leading-tight text-black">
            دعينا نساعدكِ في <br /> اختيار الأنسب لجمالكِ
          </h2>
          <p className="text-xl text-gray-400 font-serif italic max-w-2xl mx-auto">
            فريق المبيعات لدينا جاهز لتقديم استشارات مخصصة حول الألوان والكميات
            التي تناسب احتياجاتكِ الخاصة.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8"
        >
          <a
            href="mailto:sales@seamakeup.com"
            className="group relative px-12 py-6 bg-black text-white rounded-full text-xs font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105"
          >
            <p className="relative z-10">تحدثي مع المبيعات</p>
            <div className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>

        <div className="pt-20 flex justify-center gap-12 text-[10px] font-bold text-gray-300 tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
            استجابة خلال 24 ساعة
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
            دعم مخصص بالكامل
          </div>
        </div>
      </div>
    </section>
  );
}

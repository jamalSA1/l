/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useTransform, MotionValue } from "motion/react";
import craftsmanshipImg from "../assets/images/input_file_3.png";

interface CraftsmanshipProps {
  fadeIn: any;
  scrollYProgress: MotionValue<number>;
}

export default function Craftsmanship({
  fadeIn,
  scrollYProgress
}: CraftsmanshipProps) {
  const yImage = useTransform(scrollYProgress, [0.5, 1], [0, 80]);

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeIn} className="space-y-8">
          <div className="inline-flex items-center gap-6">
            <div className="w-12 h-[1px] bg-black/20" />
            <span className="text-[10px] font-black tracking-[0.4em] text-black">
              إتقان الصنع
            </span>
          </div>
          <h2 className="text-5xl font-medium tracking-tighter leading-tight">
            دقة تليق <br /> بجمالك الفريد
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            التصميم الخارجي ليس مجرد مظهر؛ بل هو هندسة دقيقة تضمن سهولة
            الاستخدام وحماية التركيبة من العوامل الخارجية. أداة التطبيق المبتكرة
            تصل لكل زاوية من شفتيكِ بسهولة مطلقة.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-black/10">
              اكتشف المزيد
            </button>
          </div>
        </motion.div>
        <motion.div
          style={{ y: yImage }}
          className="flex justify-end relative group"
        >
          {/* Decorative elements behind the image */}
          <div className="absolute -inset-10 bg-pink-100/30 rounded-full blur-[100px] group-hover:bg-pink-200/40 transition-colors duration-1000 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-pink-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 opacity-50" />

          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={craftsmanshipImg}
            alt="Product Assembly"
            className="w-full max-w-[500px] drop-shadow-[0_40px_50px_rgba(255,182,193,0.3)] relative z-10 transition-transform rounded-[80px] duration-700 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}

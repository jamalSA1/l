/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import textureImg from "../assets/images/input_file_1.png";

interface TextureProps {
  fadeIn: any;
}

export default function Texture({ fadeIn }: TextureProps) {
  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          {...fadeIn}
          className="relative aspect-square overflow-hidden rounded-[80px] shadow-3xl"
        >
          <img
            src={textureImg}
            alt="Texture Close-up"
            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
        <motion.div {...fadeIn} className="space-y-12">
          <div className="space-y-6">
            <p className="text-[10px] font-black text-pink-600 uppercase block">
              إثبات علمي
            </p>
            <h2 className="text-6xl font-medium leading-tight">
              عناية مكثفة <br /> بلمسة زجاجية
            </h2>
          </div>
          <p className="text-xl text-gray-500 font-serif leading-relaxed italic">
            "لقد صممنا Sea Makeup ليكون رفيقكِ الدائم. تركيبتنا لا تكتفي بصبغ
            الشفاه، بل تعالجها من العمق باستخدام تقنيات بلمبليكس المتقدمة."
          </p>
          <div className="flex gap-16 border-t border-black/5 pt-12">
            {[
              { val: "+95%", label: "ترطيب" },
              { val: "12H", label: "ثبات" }
            ].map((stat, i) =>
              <div key={i} className="space-y-2">
                <div className="text-4xl font-display font-bold tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

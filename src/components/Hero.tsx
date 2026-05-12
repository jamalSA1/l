/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface Benefit {
  id: string;
  title: string;
  desc: string;
  tag: string;
}

interface HeroProps {
  benefits: Benefit[];
}

export default function Hero({ benefits }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col pt-40 pb-32 overflow-hidden bg-white">
      {/* Background Image - Absolute position covering full section */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/src/assets/images/input_file_2.png"
          alt="Background texture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/90" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-12 grid grid-cols-1 md:grid-cols-12 gap-0 items-start relative z-10">
        {/* Text Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-12 space-y-12 z-10 pt-20 flex flex-col items-center text-center"
        >
          <div className="space-y-6 max-w-2xl mx-auto">
            <span className="text-[16px] font-medium tracking-tight text-gray-500 block">
              عناية عصرية بشيخوخة الشفاه
            </span>
            <h1 className="text-6xl md:text-[85px] font-bold tracking-tighter leading-[0.95] text-black">
              سحر الببتيدات لشفاه ممتلئة
            </h1>
            <p className="text-[15px] text-gray-400 font-medium tracking-tight mx-auto">
              مزيج من مكونات العناية الراقية بالبشرة لترطيب وتبريد ومقاومة
              الأكسدة في منتج واحد 3 في 1
            </p>
          </div>

          {/* Benefits Section Inside Hero */}
          <div className="pt-20 w-full flex flex-col items-center">
            <div className="flex items-center gap-4 mb-12 max-w-4xl w-full">
              <div className="h-[1px] flex-grow bg-gray-200" />
              <h2 className="text-[18px] font-bold text-black uppercase tracking-wider shrink-0">
                المميزات
              </h2>
              <div className="h-[1px] flex-grow bg-gray-200" />
            </div>

            <div className="relative max-w-4xl w-full">
              {/* First row of benefits: 1, 2, 3 */}
              <div className="grid grid-cols-3 gap-8 mb-16 relative">
                {[benefits[0], benefits[1], benefits[2]].map((benefit, idx) =>
                  <div key={benefit.id} className="relative group">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
                        {benefit.id}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-[13px] font-bold text-black break-keep leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed break-keep font-medium">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                    {idx < 2 &&
                      <div className="absolute top-3 -right-4 text-gray-200 text-[10px]">
                        ★
                      </div>}
                  </div>
                )}
              </div>

              {/* Second row of benefits: 4, 5 staggered */}
              <div className="flex justify-center gap-24 relative">
                {[benefits[3], benefits[4]].map((benefit, idx) =>
                  <div
                    key={benefit.id}
                    className="relative group max-w-[180px]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
                        {benefit.id}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-[13px] font-bold text-black break-keep leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed break-keep font-medium">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                    {idx === 0 &&
                      <div className="absolute top-3 -right-12 text-gray-200 text-[10px]">
                        ★
                      </div>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

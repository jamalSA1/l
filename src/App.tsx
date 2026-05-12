/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useScroll } from "motion/react";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Texture from "./components/Texture";
import Craftsmanship from "./components/Craftsmanship";
import ContactSales from "./components/ContactSales";
import Footer from "./components/Footer";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const benefits = [
    {
      id: "1",
      title: "مكونات طبيعية 100%",
      desc:
        "تركيبة فريدة تعتمد على مستخلص بلمبليكس الفرنسي لترطيب يدوم طويلاً.",
      tag: "100% NATURAL"
    },
    {
      id: "2",
      title: "مركب الببتيدات السداسي",
      desc: "يعمل على تحسين مظهر الخطوط الدقيقة وتغذية الشفاه بعمق.",
      tag: "6 PEPTIDES"
    },
    {
      id: "3",
      title: "لمعان زجاجي فائق",
      desc: "يغلف الشفاه بطبقة لامعة غير مريحة تغطي التشققات بسلاسة.",
      tag: "ULTRA GLOSS"
    },
    {
      id: "4",
      title: "ألوان شفافة طبيعية",
      desc: "خمس درجات لونية تناسب جميع ألوان البشرة لإطلالة طبيعية.",
      tag: "5 SHADES"
    },
    {
      id: "5",
      title: "منتج نباتي بالكامل",
      desc: "صديق للبيئة ولم يتم تجربته على الحيوانات نهائياً.",
      tag: "VEGAN"
    }
  ];

  return (
    <div
      className="min-h-screen bg-white text-[#0a0a0a] font-sans selection:bg-pink-100 selection:text-pink-900"
      dir="rtl"
    >
      <Navbar />
      <main ref={containerRef} className="overflow-hidden">
        <Hero benefits={benefits} />
        <Texture fadeIn={fadeIn} />
        <Craftsmanship fadeIn={fadeIn} scrollYProgress={scrollYProgress} />
        <ContactSales fadeIn={fadeIn} />
        <Footer />
      </main>
    </div>
  );
}

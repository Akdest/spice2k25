"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Team from "@/components/Team";
import UpcomingEvents from "@/components/UpcomingEvents";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import Cursor from "@/components/Cursor";
import { StickyScrollRevealDemo } from "@/components/PastEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Result from "@/components/Result";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [announcements, setShowAnnouncements] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Cursor />

      <main className="scroll-smooth hero-bg overflow-hidden">
        <Hero />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <UpcomingEvents />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <StickyScrollRevealDemo />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Sponsors />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Team />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <CTA />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ContactUs />
        </motion.div>
        <Footer />
      </main>

      {/* 🔼 Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 border border-blue-500 text-blue-500 hover:text-white rounded-[0.4rem] backdrop-blur-md bg-white/10 shadow-[0_0_12px_rgba(0,170,255,0.4)] group overflow-hidden transition-all duration-300"
        >
          {/* Arrow Icon */}
          <ArrowUp className="mx-auto z-10 relative transition-transform text-blue-600 duration-300 group-hover:-translate-y-1" />

          {/* Pulse Glow on Hover */}
          <span className="absolute inset-0 rounded-[0.4rem] bg-blue-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping-fast pointer-events-none"></span>
        </button>
      )}

      {/* Announcements */}
      {showButton && (
        <button
          onClick={() => setShowAnnouncements(true)}
          className="fixed bottom-6 left-6 z-50 w-fit px-4 h-12 border border-blue-500 text-blue-500 rounded-[0.4rem] backdrop-blur-md bg-white/10 shadow-[0_0_12px_rgba(0,170,255,0.4)] group overflow-visible transition-all duration-300"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Check Results
          <span className="absolute inset-0 rounded-[0.4rem] bg-blue-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping-fast pointer-events-none"></span>
        </button>
      )}

      <AnimatePresence>
        {announcements && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative backdrop-blur-lg rounded-xl shadow-xl p-6 w-full"
            >
              <button
                onClick={() => setShowAnnouncements(false)}
                className="absolute top-6 right-6 text-gray-600 hover:text-red-500 text-3xl z-[100]"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="h-8 w-8 text-white hover:text-blue-400"
                />
              </button>
              <Result />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

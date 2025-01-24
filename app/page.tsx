'use client'

import { motion } from "framer-motion";
import About from "@/components/About";
import Adventure from "@/components/Adventure";
import CallToAction from "@/components/CallToAction";
import Destination from "@/components/Destination";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Rating from "@/components/Rating";
import Testimonials from "@/components/Testimonials";

const fadeIn = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      <div className="mt-[-70px]" id="hero">
        <div>
          <Hero />
        </div>
      </div>

      <div id="about-us" className="bg-primary">
        <div>
          <About />
        </div>

        <div>
          <Adventure />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
        >
          <Rating />
        </motion.div>
      </div>

      <div id="packages">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <Packages />
        </motion.div>
      </div>

      <div id="destination">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <Destination />
        </motion.div>
      </div>

      <div id="testimonials">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <Testimonials />
        </motion.div>
      </div>

      <div id="call-to-action">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <CallToAction />
        </motion.div>
      </div>
    </main>
  );
}

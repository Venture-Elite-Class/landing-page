"use client";

import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";
import { fadeIn } from "@/lib/animations";
import faqItems from "@/data/faqs/faqs";

const FAQ = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-2/3 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-32">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-gradient-1 font-bold mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-5xl font-bold serif mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our program.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          {faqItems.map((category, idx) => (
            <div key={idx} className="relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold serif mb-2">
                  <span className="text-gradient-1">{category.category}</span>
                </h3>
                <p className="text-gray-400">{category.description}</p>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg opacity-75" />
                <Accordion items={category.items} />
              </div>
            </div>
          ))}
        </motion.div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center py-8 my-16">
          Need more help?{" "}
          <a href="/contact" className="text-gradient-1 hover:underline">
            Contact our support team
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQ;

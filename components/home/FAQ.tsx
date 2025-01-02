'use client';

import { motion } from 'framer-motion';
import Accordion from '../ui/Accordion';
import { fadeIn } from '@/lib/animations';

const faqItems = [
  {
    category: "Getting Started",
    description: "Essential information about our program and certification process",
    items: [
      {
        title: "Are two weeks sufficient for certification?",
        content: "Yes! Our intensive program is specifically designed to prepare you for both Microsoft certifications in two weeks. With focused training, hands-on labs, and expert guidance, our success rate is consistently high. We provide additional support and resources even after the program if needed."
      },
      {
        title: "What's included in the program fee?",
        content: "The $2,500 all-inclusive fee covers: certification exam vouchers, training materials, access to CMU facilities, accommodation arrangements, networking events, tech company visits, and post-program career support. Travel and visa expenses are not included."
      }
    ]
  },
  {
    category: "Program Support",
    description: "Information about accommodation and visa assistance",
    items: [
      {
        title: "How is the visa process handled?",
        content: "We provide comprehensive visa application support, including official invitation letters, program documentation, and guidance throughout the process. Our team has extensive experience helping international students secure their visas for short-term programs."
      },
      {
        title: "What are the accommodation arrangements?",
        content: "Students are accommodated in fully furnished apartments near the CMU Silicon Valley campus. All units include Wi-Fi, basic amenities, and are within walking distance or short commute to campus. Room sharing is arranged with fellow program participants."
      }
    ]
  },
  {
    category: "Financial Information",
    description: "Details about scholarships and payment options",
    items: [
      {
        title: "Can I get a scholarship or financial aid?",
        content: "Yes! We offer performance-based scholarships that can cover up to 100% of the program fee. Additionally, our Elite 50 Referral Program provides opportunities for substantial rewards and additional benefits. Contact our team for detailed eligibility criteria."
      }
    ]
  }
];

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
          variants={fadeIn('up', 0.3)}
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
            Find answers to common questions about our program. Need more help?{' '}
            <a href="/contact" className="text-gradient-1 hover:underline">
              Contact our support team
            </a>.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.5)}
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
      </div>
    </section>
  );
};

export default FAQ; 
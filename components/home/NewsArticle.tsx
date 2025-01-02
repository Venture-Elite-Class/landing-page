'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Link from 'next/link';
import newsArticles from '@/data/home/news';

const formatDescription = (description: string) => {
  return description
    .replace(/\[AI\](.*?)\[\/AI\]/g, '<span class="text-gradient-1 font-semibold">$1</span>')
    .replace(/\[highlight\](.*?)\[\/highlight\]/g, '<span class="text-yellow-400 font-semibold">$1</span>');
};

const NewsArticle = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto px-4 py-24"
    >
      <motion.div
        variants={fadeIn('down', 0.3)}
        className="text-center mb-20"
      >
        <div className="inline-block">
          <h2 className="text-4xl md:text-6xl font-bold serif mb-4 text-white border-b-2 border-white pb-6 uppercase tracking-widest">
            The Elite Tech Times
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-serif italic mt-4">
            Your Daily Digest of AI Innovation
          </p>
        </div>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {newsArticles.map((article, index) => (
          <motion.article
            key={index}
            variants={fadeIn('up', 0.2 * index)}
            className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-sm border border-gray-700 hover:border-gray-500 transition-all duration-300 flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex flex-col h-full p-8 relative">
              <div>
                <div className="flex items-center text-sm text-gray-400 font-serif mb-3">
                  <span className="uppercase tracking-wider">{article.source}</span>
                  <span className="mx-3 text-gray-600">|</span>
                  <span className="text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold serif mb-4 text-white leading-tight group-hover:text-gradient-1 transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
              <div className="mt-auto">
                <p 
                  className="text-gray-300 mb-6 font-serif leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatDescription(article.description) }}
                />
                <Link 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white group-hover:text-gradient-1 inline-flex items-center font-serif italic transition-colors duration-300"
                >
                  Continue reading 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default NewsArticle;
'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 gap-16 text-gray-800 dark:text-gray-200">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100">Sonic Hedge Fund</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
            Harnessing the power of AI and machine learning to revolutionize quantitative trading strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">AI-Driven Analysis</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our proprietary AI models process vast amounts of market data to identify patterns and predict trends with unprecedented accuracy.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Machine Learning Algorithms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Continuously evolving algorithms adapt to market changes in real-time, optimizing trading strategies for maximum performance.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Big Data Integration</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Leveraging diverse data sources including social media, satellite imagery, and economic indicators for comprehensive market insights.
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl">
          <h2 className="text-3xl font-light mb-8 text-center text-gray-900 dark:text-gray-100">Our Technological Edge</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <AnimatedNumber end={10} />PB+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Data Processed Daily</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <AnimatedNumber end={99.9} duration={2500} />%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Model Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                0.<AnimatedNumber end={1} duration={1500} />ms
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Average Trade Execution</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">24/7</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">AI-Powered Monitoring</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
          <a
            className="flex-1 bg-blue-600 text-white transition-colors flex items-center justify-center hover:bg-blue-700 text-base h-16 px-6 font-semibold rounded"
            href="/algorithms/zdtz"
          >
            Explore ZDTZ Algorithm
          </a>
          <a
            className="flex-1 bg-blue-600 text-white transition-colors flex items-center justify-center hover:bg-blue-700 text-base h-16 px-6 font-semibold rounded"
            href="/data-driven-approach"
          >
            Data-Driven Approach
          </a>
          <a
            className="flex-1 bg-blue-600 text-white transition-colors flex items-center justify-center hover:bg-blue-700 text-base h-16 px-6 font-semibold rounded"
            href="/academic-approach"
          >
            Academic Approach
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

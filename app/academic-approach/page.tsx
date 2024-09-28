'use client';

import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function AcademicApproachPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 
          className={`text-7xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Our Academic Approach
        </h1>
        
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {[
              {
                title: 'Research Foundation',
                content: 'Our strategies are built on a solid foundation of academic research in financial economics, statistical analysis, and machine learning. We continuously review and incorporate the latest findings from top-tier academic journals.'
              },
              {
                title: 'Empirical Testing',
                content: 'We rigorously test our hypotheses using historical data and advanced statistical methods. Our approach combines traditional econometric techniques with cutting-edge machine learning algorithms to validate our strategies.'
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h2 className="text-5xl font-bold mb-8 text-blue-800 dark:text-blue-300">{item.title}</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section 
          className={`mb-32 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center text-blue-800 dark:text-blue-300">Key Academic Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Efficient Market Hypothesis",
              "Behavioral Finance",
              "Factor Investing",
              "Statistical Arbitrage",
              "Time Series Analysis",
              "Machine Learning in Finance"
            ].map((principle, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center transition-all duration-500 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <p className="text-xl font-semibold text-center text-gray-700 dark:text-gray-300">{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              title: "Research Areas",
              items: ["Market Microstructure", "Asset Pricing Models", "Portfolio Optimization", "Risk Management", "Algorithmic Trading"]
            },
            {
              title: "Academic Collaborations",
              items: ["University Research Partnerships", "PhD Internship Programs", "Academic Advisory Board", "Conference Presentations", "Peer-Reviewed Publications"]
            },
            {
              title: "Continuous Learning",
              items: ["Internal Research Seminars", "External Expert Lectures", "Online Course Subscriptions", "Academic Conference Attendance", "Sponsored Research Projects"]
            }
          ].map((section, index) => (
            <div 
              key={section.title}
              className={`transition-all duration-1000 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${1200 + index * 200}ms` }}
            >
              <h3 className="text-3xl font-bold mb-8 text-blue-800 dark:text-blue-300">{section.title}</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
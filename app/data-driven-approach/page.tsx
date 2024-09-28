'use client';

import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function DataDrivenApproachPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 
          className={`text-7xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Our Data-Driven Approach
        </h1>
        
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {['Big Data Integration', 'Advanced Analytics'].map((title, index) => (
              <div 
                key={title}
                className={`transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h2 className="text-5xl font-bold mb-8 text-blue-800 dark:text-blue-300">{title}</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {title === 'Big Data Integration'
                    ? 'We harness the power of vast data sources, including financial markets, social media, satellite imagery, and economic indicators. This comprehensive approach enables us to uncover unique insights and identify patterns that others might overlook.'
                    : 'Our team leverages cutting-edge machine learning algorithms and statistical models to analyze data. We employ sophisticated techniques such as natural language processing, time series analysis, and deep learning to extract meaningful insights.'}
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
          <h2 className="text-5xl font-bold mb-12 text-center text-blue-800 dark:text-blue-300">Our Data Processing Pipeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Data Collection: Gathering diverse datasets from multiple sources",
              "Data Cleaning: Ensuring data quality and consistency",
              "Feature Engineering: Creating relevant features for our models",
              "Model Training: Developing and refining our predictive models",
              "Real-time Analysis: Continuously updating our insights based on new data",
              "Decision Making: Informing trading strategies based on data-driven insights"
            ].map((step, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 transition-all duration-500 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <span className="text-4xl font-bold text-blue-500 dark:text-blue-400">{index + 1}.</span>
                <p className="text-lg text-gray-700 dark:text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              title: "Data Sources",
              items: ["Financial market data", "Economic indicators", "Social media sentiment", "Satellite imagery", "News and events"]
            },
            {
              title: "Technologies Used",
              items: ["Apache Hadoop", "Apache Spark", "TensorFlow", "PyTorch", "Scikit-learn"]
            },
            {
              title: "Key Benefits",
              items: ["Enhanced market insights", "Improved risk management", "Faster decision making", "Identification of new opportunities", "Adaptive strategies"]
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
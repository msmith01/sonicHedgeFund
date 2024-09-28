'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isAlgorithmsOpen, setIsAlgorithmsOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400">
          Sonic Hedge Fund
        </Link>
        <ul className="flex space-x-6 items-center">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/data-driven-approach" className="hover:text-blue-400">Data-Driven Approach</Link></li>
          <li><Link href="/academic-approach" className="hover:text-blue-400">Academic Approach</Link></li>
          <li className="relative">
            <button 
              onClick={() => setIsAlgorithmsOpen(!isAlgorithmsOpen)}
              className="hover:text-blue-400 flex items-center"
            >
              Algorithms
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAlgorithmsOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                <li>
                  <Link href="/algorithms/zdtz" className="block px-4 py-2 text-sm hover:bg-gray-600">
                    ZDTZ
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
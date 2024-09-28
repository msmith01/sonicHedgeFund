import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sonic Hedge Fund</h3>
            <p className="text-sm">Harnessing the power of AI and machine learning for quantitative trading strategies.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-blue-400">Home</Link></li>
              <li><Link href="/data-driven-approach" className="text-sm hover:text-blue-400">Data-Driven Approach</Link></li>
              <li><Link href="/academic-approach" className="text-sm hover:text-blue-400">Academic Approach</Link></li>
              <li><Link href="/algorithms/zdtz" className="text-sm hover:text-blue-400">ZDTZ Algorithm</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 Sonic Hedge Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
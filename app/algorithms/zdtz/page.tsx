'use client';

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const data = [
  { name: 'Apr 24', ZDTZ: -5, DKF: -10 },
  { name: 'May 24', ZDTZ: 0, DKF: 5 },
  { name: 'Jun 24', ZDTZ: 2, DKF: 8 },
  { name: 'Jul 24', ZDTZ: 3, DKF: 10 },
  { name: 'Aug 24', ZDTZ: 3.5, DKF: 12 },
  { name: 'Sep 24', ZDTZ: 4.05, DKF: 14.64 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 border border-gray-700 rounded">
        {payload.map((entry, index) => (
          <div key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toFixed(2)}%`}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function ZDTZPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">ZDTZ Algorithm</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <StylishBox title="Overview">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              A DARWIN is an investable index with independent risk management that combines trader signals with Darwinex Zero's independent Risk Management Engine.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <MetricItem
                title="Performance (since inception)"
                value="17.53%"
                color="text-green-600 dark:text-green-400"
              />
              <MetricItem
                title="Maximum Drawdown"
                value="-12.04%"
                color="text-red-600 dark:text-red-400"
              />
              <MetricItem
                title="Performance (last 6 months)"
                value="3.58%"
                color="text-green-600 dark:text-green-400"
              />
              <MetricItem
                title="Assets under management"
                value="€30,000.00"
                color="text-blue-600 dark:text-blue-400"
              />
            </div>
          </StylishBox>
          
          <StylishBox title="DarwinIA Statistics">
            <div className="grid grid-cols-2 gap-4">
              <MetricItem
                title="Current Rating"
                value="69.27"
                color="text-blue-600 dark:text-blue-400"
              />
              <MetricItem
                title="Rating for assured allocation"
                value="75.00"
                color="text-blue-600 dark:text-blue-400"
              />
              <MetricItem
                title="Performance (current month)"
                value="6.35%"
                color="text-green-600 dark:text-green-400"
              />
              <MetricItem
                title="Performance (previous 5 months)"
                value="-2.18%"
                color="text-red-600 dark:text-red-400"
              />
              <MetricItem
                title="Max drawdown (since Apr 01)"
                value="-12.04%"
                color="text-red-600 dark:text-red-400"
              />
              <MetricItem
                title="Current DarwinIA SILVER position"
                value="#1,567 / 7,229"
                color="text-blue-600 dark:text-blue-400"
              />
            </div>
          </StylishBox>
        </div>
        
        <StylishBox title="Correlation Comparison of ZDTZ with other DARWINs">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Investing in assets that are uncorrelated with each other is fundamental to building a diversified investment portfolio. By allocating part of your capital to investing in DARWINs, you can reduce your portfolio's exposure to sudden market movements.
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#8A8DA1" />
              <XAxis dataKey="name" stroke="#8A8DA1" />
              <YAxis stroke="#8A8DA1" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="ZDTZ" stroke="#f4b350" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="DKF" stroke="#26a65b" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </StylishBox>

        <StylishBox title="Top Correlated DARWINs">
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700 dark:text-gray-300">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-2 text-left">DARWIN</th>
                  <th className="p-2 text-right">Correlation</th>
                  <th className="p-2 text-center">Participating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">DKF</td>
                  <td className="p-2 text-right">0.75</td>
                  <td className="p-2 text-center">Both</td>
                </tr>
                <tr>
                  <td className="p-2">LSMA</td>
                  <td className="p-2 text-right">0.74</td>
                  <td className="p-2 text-center">Both</td>
                </tr>
                <tr>
                  <td className="p-2">ZBZ</td>
                  <td className="p-2 text-right">0.73</td>
                  <td className="p-2 text-center">Both</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </StylishBox>

        <StylishBox title="Performance Comparison">
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700 dark:text-gray-300">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-2 text-left">Metric</th>
                  <th className="p-2 text-right">DARWIN ZDTZ</th>
                  <th className="p-2 text-right">DARWIN DKF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Return</td>
                  <td className="p-2 text-right">4.05 %</td>
                  <td className="p-2 text-right">14.64 %</td>
                </tr>
                <tr>
                  <td className="p-2">Annualized return</td>
                  <td className="p-2 text-right">8.23 %</td>
                  <td className="p-2 text-right">31.33 %</td>
                </tr>
                <tr>
                  <td className="p-2">Maximum drawdown</td>
                  <td className="p-2 text-right">-12.04 %</td>
                  <td className="p-2 text-right">-16.47 %</td>
                </tr>
                <tr>
                  <td className="p-2">Annualized volatility</td>
                  <td className="p-2 text-right">15.71 %</td>
                  <td className="p-2 text-right">25.96 %</td>
                </tr>
                <tr>
                  <td className="p-2">Sharpe ratio</td>
                  <td className="p-2 text-right">0.52</td>
                  <td className="p-2 text-right">1.21</td>
                </tr>
                <tr>
                  <td className="p-2">% winning days</td>
                  <td className="p-2 text-right">43.56 %</td>
                  <td className="p-2 text-right">51.64 %</td>
                </tr>
                <tr>
                  <td className="p-2">Best daily return</td>
                  <td className="p-2 text-right">4.44 %</td>
                  <td className="p-2 text-right">9.34 %</td>
                </tr>
                <tr>
                  <td className="p-2">Average daily return</td>
                  <td className="p-2 text-right">0.60 %</td>
                  <td className="p-2 text-right">0.98 %</td>
                </tr>
                <tr>
                  <td className="p-2">Worst daily return</td>
                  <td className="p-2 text-right">-2.79 %</td>
                  <td className="p-2 text-right">-3.91 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </StylishBox>

        <StylishBox title="DarwinIA Statistics">
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700 dark:text-gray-300">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-2 text-left">Metric</th>
                  <th className="p-2 text-right">DARWIN ZDTZ</th>
                  <th className="p-2 text-right">DARWIN DKF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Return (current month)</td>
                  <td className="p-2 text-right">6.35 %</td>
                  <td className="p-2 text-right">1.07 %</td>
                </tr>
                <tr>
                  <td className="p-2">Return (previous 5 months)</td>
                  <td className="p-2 text-right">-2.18 %</td>
                  <td className="p-2 text-right">13.47 %</td>
                </tr>
                <tr>
                  <td className="p-2">Max. drawdown (since Apr 01)</td>
                  <td className="p-2 text-right">-12.04 %</td>
                  <td className="p-2 text-right">-16.45 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </StylishBox>
      </main>
      <Footer />
    </div>
  );
}

interface StylishBoxProps {
  title: string;
  children: React.ReactNode;
}

const StylishBox: React.FC<StylishBoxProps> = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mb-8">
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);

interface MetricItemProps {
  title: string;
  value: string;
  color: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ title, value, color }) => (
  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
    <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">{title}</h3>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);
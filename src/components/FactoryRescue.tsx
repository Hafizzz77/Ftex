import { TrendingUp, AlertCircle } from 'lucide-react';

const reasons = [
  'Low and inconsistent orders from buyers',
  'Unskilled or inadequate labor force',
  'Frequent machine breakdowns affecting production',
  'Acute cash flow and working capital challenges',
  'Poor management and unclear processes',
  'Outdated machinery and inefficient production methods',
];

const kpis = [
  { metric: 'OEE Improvement', value: '+35-50%', description: 'Overall Equipment Effectiveness' },
  { metric: 'Production Increase', value: '+40-60%', description: 'Within same footprint' },
  { metric: 'Defect Rate', value: '-60-80%', description: 'Quality consistency improved' },
  { metric: 'Downtime', value: '-70%', description: 'Machine availability increased' },
  { metric: 'Labor Efficiency', value: '+45%', description: 'Output per worker' },
  { metric: 'Cost Reduction', value: '-25-35%', description: 'Per unit production cost' },
];

export default function FactoryRescue() {
  return (
    <section id="turnkey" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Factory Rescue & Turnkey Operation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let us transform your struggling factory into a profitable, efficient operation
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <AlertCircle size={28} className="text-blue-600" />
            Why Factory Owners Hand Us Their Operations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-blue-50 rounded">
                <span className="text-blue-600 font-bold text-lg">→</span>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6">Our Turnkey Model</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-6 py-3">
              <h4 className="font-semibold text-black mb-2">How It Works</h4>
              <p className="text-gray-700">
                We take over complete factory operations. Our experienced team (GM, Dyeing Master, skilled labor) runs your factory while you receive guaranteed production targets and shared profits.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 py-3">
              <h4 className="font-semibold text-black mb-2">Our Team Provides</h4>
              <p className="text-gray-700">
                General Manager, Dyeing Master, all production staff, procurement expertise, quality control, maintenance, and 24/7 operational oversight.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 py-3">
              <h4 className="font-semibold text-black mb-2">Contract Terms</h4>
              <p className="text-gray-700">
                Flexible contract duration (1-5 years) with profit-sharing model. We guarantee minimum production targets and efficiency improvements.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow">
              <TrendingUp size={32} className="text-blue-600 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">{kpi.description}</p>
              <div className="text-3xl font-bold text-blue-600 mb-2">{kpi.value}</div>
              <p className="text-sm font-semibold text-black">{kpi.metric}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Ready to Transform Your Factory?</h3>
          <p className="text-gray-700 mb-6">Schedule a consultation with our experts to discuss your specific needs and potential partnership.</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            Start Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

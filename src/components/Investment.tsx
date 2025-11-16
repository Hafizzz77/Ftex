import { PieChart } from 'lucide-react';

const investmentModels = [
  {
    title: 'Equity Partnership',
    description: 'Become a co-owner in our manufacturing ventures',
    terms: [
      'Investment Range: $100K - $500K',
      'Expected ROI: 20-30% annually',
      'Co-management rights',
      'Profit sharing based on ownership %',
      'Decision milestones: 6, 12, 24 months',
    ],
  },
  {
    title: 'Joint Venture',
    description: 'Collaborate on specific project or factory setup',
    terms: [
      'Investment Range: $50K - $300K',
      'Project-specific returns',
      'Shared operational responsibility',
      'Market expertise + our technical capability',
      'Exit strategy at project completion',
    ],
  },
  {
    title: 'Project Financing with Profit-Sharing',
    description: 'Finance our projects and share profits',
    terms: [
      'Investment Range: $75K - $400K',
      'Expected return: 18-28% per annum',
      'Quarterly profit distributions',
      'Collateral and security provided',
      'Professional fund management',
    ],
  },
];

export default function Investment() {
  return (
    <section id="investment" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Investment & Partnership Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Grow your wealth by partnering with a trusted industrial machinery leader
          </p>
        </div>

        <div className="mb-12">
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            We invite qualified investors and business partners to join us in expanding our manufacturing capabilities across Asia. With proven expertise, established market presence, and strong operational track record, we offer attractive returns and transparent partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {investmentModels.map((model, idx) => (
            <div key={idx} className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <PieChart size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{model.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{model.description}</p>
              <div className="space-y-2">
                {model.terms.map((term, i) => (
                  <div key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    {term}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Investment Process & Milestones</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-black">Initial Discussion</h4>
                <p className="text-sm text-gray-700">Understand your investment objectives and our opportunities</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-black">Due Diligence</h4>
                <p className="text-sm text-gray-700">Complete financial, legal, and operational review (2-4 weeks)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-black">Agreement & Documentation</h4>
                <p className="text-sm text-gray-700">Legal documentation and partnership agreement finalized</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-black">Fund Transfer & Activation</h4>
                <p className="text-sm text-gray-700">Funds received and operations begin immediately</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="font-semibold text-black">Regular Updates & Distributions</h4>
                <p className="text-sm text-gray-700">Quarterly reports, profit distributions, and investment milestones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-black mb-4">Why Invest With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-2">25+</p>
              <p className="text-gray-700">Years Industry Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-2">60+</p>
              <p className="text-gray-700">Countries Global Reach</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-700">Successful Installations</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">Interested in learning more about investment opportunities?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            Request Investment Prospectus
          </a>
        </div>
      </div>
    </section>
  );
}

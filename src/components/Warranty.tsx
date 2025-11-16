import { Shield, Zap, Clock, CheckCircle } from 'lucide-react';

const warranties = [
  {
    icon: Shield,
    title: 'Equipment Warranty',
    items: [
      'Standard: 12 months parts & labor',
      'Extended options: Up to 5 years available',
      'Covers manufacturing defects',
      'Excludes wear and tear',
    ],
  },
  {
    icon: Zap,
    title: 'Commissioning Guarantee',
    items: [
      'Machine brought to rated production within 30 days',
      'If not achieved, we fix at no cost',
      'Full operator training included',
      'Performance documentation provided',
    ],
  },
  {
    icon: Clock,
    title: '24/7 Support',
    items: [
      'Emergency hotline available round-the-clock',
      '48-hour onsite response for critical issues',
      'Remote troubleshooting and guidance',
      'Spare parts expedited shipping',
    ],
  },
  {
    icon: CheckCircle,
    title: 'After-Sales Service',
    items: [
      'Preventive maintenance programs',
      'Scheduled equipment inspections',
      'Performance optimization services',
      'Spare parts availability guaranteed for 10 years',
    ],
  },
];

export default function Warranty() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Warranty & Guarantees</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand behind every machine we build with comprehensive protection and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {warranties.map((warranty, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <warranty.icon size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-black mb-4">{warranty.title}</h3>
              <ul className="space-y-2">
                {warranty.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-blue-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-black mb-6">Our Commitment to You</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-black mb-2">Quality Assurance</h4>
              <p className="text-gray-700">
                Every machine undergoes rigorous testing before dispatch. We perform 100% quality checks on all components and assemblies to ensure they meet international standards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Technical Support</h4>
              <p className="text-gray-700">
                Our team of experienced engineers is available to assist with troubleshooting, optimization, and maintenance. We provide comprehensive documentation and training for all operators and maintenance staff.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Spare Parts Availability</h4>
              <p className="text-gray-700">
                We maintain an extensive inventory of spare parts for all our machinery. Standard parts are shipped within 5-10 days, and critical components are often available within 48 hours.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Continuous Improvement</h4>
              <p className="text-gray-700">
                We constantly upgrade our machines based on customer feedback and market developments. Existing customers benefit from our improvement programs and technology updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

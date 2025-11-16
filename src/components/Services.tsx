import { Wrench, Zap, Package, Users, Shield } from 'lucide-react';

const serviceData = [
  {
    icon: Wrench,
    title: 'Repair & Maintenance',
    description: 'Expert repair and scheduled maintenance services',
    details: [
      '48-hour onsite response for breakdowns',
      'Preventive maintenance programs',
      'Parts lead time: 5-10 days for most items',
      'Extended warranty options available',
    ],
  },
  {
    icon: Zap,
    title: 'Upgradation Services',
    description: 'Modernize your existing machinery',
    details: [
      'Performance optimization',
      'Control system upgrades',
      'Energy efficiency improvements',
      'Capacity enhancement modifications',
    ],
  },
  {
    icon: Package,
    title: 'Installation & Commissioning',
    description: 'Complete setup of imported or new machinery',
    checklist: [
      'Machine alignment and leveling',
      'Electrical and mechanical calibration',
      'Trial run and performance verification',
      'Operator and maintenance staff training',
      'Documentation and handover',
    ],
  },
  {
    icon: Package,
    title: 'Spare Parts Manufacturing',
    description: 'Custom and OEM spare parts production',
    details: [
      'Precision roll balancing (10 micron tolerance)',
      'Shaft manufacturing and balancing',
      'Wear part replacement',
      'Quick turnaround manufacturing',
    ],
  },
  {
    icon: Users,
    title: 'Factory Consultancy',
    description: 'Complete factory setup guidance and planning',
    details: [
      'Mechanical and electrical design',
      'Production line layout optimization',
      'Machine selection and procurement',
      'Manpower planning and training programs',
    ],
  },
  {
    icon: Shield,
    title: 'Turnkey Factory Contracts',
    description: 'We take over complete factory operations',
    coverage: [
      'General Manager & production oversight',
      'Dyeing Master & technical staff',
      'Skilled labor provision',
      'Procurement and vendor management',
      'Production target guarantees',
      'Contract duration: 1-5 years with profit sharing',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From installation to full operation, we provide comprehensive industrial support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <service.icon size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>

              {service.details && (
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {service.checklist && (
                <div>
                  <p className="text-sm font-semibold text-black mb-3">Installation Checklist:</p>
                  <ul className="space-y-2">
                    {service.checklist.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-blue-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.coverage && (
                <div>
                  <p className="text-sm font-semibold text-black mb-3">What's Covered:</p>
                  <ul className="space-y-2">
                    {service.coverage.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-blue-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

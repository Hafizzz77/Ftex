import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function CustomBuildFlow() {
  const [formData, setFormData] = useState({
    industry: '',
    productionTarget: '',
    bottlenecks: '',
    floorSpace: '',
    powerSupply: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const steps = [
    { number: 1, title: 'Inquiry', description: 'Tell us about your needs' },
    { number: 2, title: 'Site Survey', description: 'We visit and assess' },
    { number: 3, title: 'Design & Proposal', description: 'Custom solution planned' },
    { number: 4, title: 'Manufacture', description: 'Built to specification' },
    { number: 5, title: 'Installation & Commissioning', description: 'Full setup & training' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Custom Build Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From your initial inquiry to full factory operation, we handle every step with precision and expertise.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h4 className="font-semibold text-black text-center">{step.title}</h4>
                <p className="text-xs text-gray-600 text-center mt-1">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden sm:block mt-4 -mr-2">
                    <ArrowRight size={20} className="text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-black mb-6">Tell Us About Your Project</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry Type *</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g., Textile, Food Processing, Paper"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Production Target (per day) *</label>
                <input
                  type="text"
                  name="productionTarget"
                  value={formData.productionTarget}
                  onChange={handleChange}
                  placeholder="e.g., 500 kg, 1000 units"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Bottlenecks</label>
              <textarea
                name="bottlenecks"
                value={formData.bottlenecks}
                onChange={handleChange}
                placeholder="Describe your current production challenges..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Floor Space (sq ft)</label>
                <input
                  type="text"
                  name="floorSpace"
                  value={formData.floorSpace}
                  onChange={handleChange}
                  placeholder="e.g., 5000"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Power Supply Available (kW)</label>
                <input
                  type="text"
                  name="powerSupply"
                  value={formData.powerSupply}
                  onChange={handleChange}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
              >
                Request Onsite Survey
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

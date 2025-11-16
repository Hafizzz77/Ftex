import { useState } from 'react';
import { ChevronDown, Factory } from 'lucide-react';

const products = [
  {
    id: 'textile',
    name: 'Textile Machinery',
    icon: Factory,
    subtypes: [
      {
        name: 'Lab Machinery',
        description: 'Testing and quality control equipment for fabric analysis',
        applications: 'Lab testing, dye strength verification, fabric properties analysis',
        models: 'TL-2000, TL-3500, TL-5000',
      },
      {
        name: 'Dyeing Machinery',
        description: 'Advanced dyeing systems for batch and continuous processing',
        applications: 'Fabric dyeing, yarn dyeing, color matching, batch processing',
        models: 'DM-500, DM-1000, DM-2000',
      },
      {
        name: 'Finishing Machinery',
        description: 'Finishing and treatment systems for textile refinement',
        applications: 'Fabric finishing, soft feel processing, wrinkle resistance treatment',
        models: 'FM-100, FM-300, FM-500',
      },
      {
        name: 'Heat Setting Machine',
        description: 'Precision heat setting for fabric stabilization',
        applications: 'Polyester finishing, dimensional stability, permanent pleats',
        models: 'HS-80, HS-150, HS-300',
      },
      {
        name: 'Knitting/Weaving Equipment',
        description: 'Automated knitting and weaving machinery',
        applications: 'Fabric production, pattern creation, high-speed weaving',
        models: 'KW-2000, KW-4000, KW-6000',
      },
    ],
  },
  {
    id: 'food',
    name: 'Food Machinery',
    icon: Factory,
    subtypes: [
      {
        name: 'Processing Lines',
        description: 'Complete food processing and production lines',
        applications: 'Bakery products, snacks, ready-to-eat meals, beverages',
        models: 'PL-50, PL-100, PL-300',
      },
      {
        name: 'Packaging Systems',
        description: 'Automated packaging and sealing equipment',
        applications: 'Pouching, carton packing, flow wrapping, labeling',
        models: 'PS-2000, PS-5000, PS-8000',
      },
      {
        name: 'Ovens & Baking',
        description: 'Industrial ovens for large-scale baking',
        applications: 'Bread production, cake baking, pastry cooking, drying',
        models: 'OV-100, OV-250, OV-500',
      },
      {
        name: 'Mixing & Blending',
        description: 'Industrial mixers for consistent batching',
        applications: 'Dough mixing, ingredient blending, flavor distribution',
        models: 'MX-50, MX-150, MX-300',
      },
    ],
  },
  {
    id: 'paper',
    name: 'Paper Machinery',
    icon: Factory,
    subtypes: [
      {
        name: 'Coating Systems',
        description: 'Paper coating and lamination equipment',
        applications: 'Paper finishing, waterproofing, gloss coating, lamination',
        models: 'CS-200, CS-500, CS-1000',
      },
      {
        name: 'Cutting Equipment',
        description: 'Precision cutting and trimming machinery',
        applications: 'Sheet cutting, die cutting, trim waste reduction',
        models: 'CT-500, CT-1000, CT-2000',
      },
      {
        name: 'Calendering',
        description: 'Paper calendering for thickness and smoothness control',
        applications: 'Paper smoothing, thickness uniformity, gloss control',
        models: 'CL-300, CL-600, CL-1200',
      },
    ],
  },
  {
    id: 'printing',
    name: 'Printing Machinery',
    icon: Factory,
    subtypes: [
      {
        name: 'Flexographic Press',
        description: 'High-speed flexographic printing equipment',
        applications: 'Packaging printing, label production, corrugated printing',
        models: 'FX-6, FX-8, FX-10',
      },
      {
        name: 'Digital Printing',
        description: 'Advanced digital printing systems',
        applications: 'Short-run printing, personalization, on-demand production',
        models: 'DP-A3, DP-A2, DP-Roll',
      },
      {
        name: 'Screen Printing',
        description: 'Automatic screen printing machines',
        applications: 'Textiles, signage, decorative printing, merchandise',
        models: 'SP-4, SP-8, SP-12',
      },
    ],
  },
];

export default function ProductCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string>('textile');
  const [expandedSubtype, setExpandedSubtype] = useState<string>('');

  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Machinery Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete industrial solutions across textile, food, paper, and printing sectors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setExpandedCategory(product.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                expandedCategory === product.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <product.icon size={24} className={expandedCategory === product.id ? 'text-blue-600' : 'text-gray-600'} />
                <h3 className="font-bold text-black">{product.name}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {products
            .find((p) => p.id === expandedCategory)
            ?.subtypes.map((subtype, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSubtype(expandedSubtype === `${expandedCategory}-${index}` ? '' : `${expandedCategory}-${index}`)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="text-left">
                    <h4 className="font-semibold text-black">{subtype.name}</h4>
                    <p className="text-sm text-gray-600">{subtype.description}</p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 ml-4 transition-transform ${
                      expandedSubtype === `${expandedCategory}-${index}` ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedSubtype === `${expandedCategory}-${index}` && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Typical Applications:</p>
                        <p className="text-sm text-gray-600">{subtype.applications}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Example Models:</p>
                        <p className="text-sm text-gray-600">{subtype.models}</p>
                      </div>
                      <a
                        href="#contact"
                        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                      >
                        Request Specs / Quote
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

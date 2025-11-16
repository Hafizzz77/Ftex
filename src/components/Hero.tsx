import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Industrial Machinery Solutions for <span className="text-blue-600">Maximum Productivity</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            From textile to food processing, we design, manufacture, and install custom machinery that scales with your business. Expert setup or complete factory operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              Get a Quote <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors"
            >
              Book Consultation
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">60+</div>
              <p className="text-gray-600 text-sm">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <p className="text-gray-600 text-sm">Service Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-xs text-gray-500 px-4">
        <p className="mb-2">پاکستان میں صنعتی مشین حل کے لیے آپ کا معتبر ساتھی</p>
        <p>اپنی پروڈکشن کو بڑھائیں ہمارے ساتھ</p>
      </div>
    </section>
  );
}

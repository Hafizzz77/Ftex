import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Check, AlertCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          industry: formData.industry,
          message: formData.message,
        },
      ]);

      if (error) {
        setSubmitStatus('error');
        setErrorMessage(error.message || 'Failed to submit form');
      } else {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          industry: '',
          message: '',
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us today for quotes, consultations, or partnership discussions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <Phone size={32} className="text-blue-600 mb-4" />
            <h3 className="font-semibold text-black mb-2">Phone</h3>
            <p className="text-gray-700 text-sm mb-3">+92-42-3123-4567</p>
            <a href="tel:+924231234567" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Call Now
            </a>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <MessageCircle size={32} className="text-blue-600 mb-4" />
            <h3 className="font-semibold text-black mb-2">WhatsApp</h3>
            <p className="text-gray-700 text-sm mb-3">+92-300-1234567</p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Send Message
            </a>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <Mail size={32} className="text-blue-600 mb-4" />
            <h3 className="font-semibold text-black mb-2">Email</h3>
            <p className="text-gray-700 text-sm mb-3">info@ftextech.com</p>
            <a href="mailto:info@ftextech.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Send Email
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry Type</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select an industry</option>
                  <option value="textile">Textile</option>
                  <option value="food">Food Processing</option>
                  <option value="paper">Paper</option>
                  <option value="printing">Printing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded flex gap-3">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded flex gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <p className="text-green-700 text-sm">Thank you! We'll be in touch shortly.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                {submitStatus === 'loading' ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Our Office</h3>
            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-4">
                <MapPin size={16} className="inline mr-2 text-blue-600" />
                F-TEX Industries
              </p>
              <address className="text-gray-700 not-italic leading-relaxed">
                Plot No. 456, Industrial Area<br />
                Lahore, Punjab 54000<br />
                Pakistan
              </address>
            </div>

            <div className="bg-gray-100 rounded-lg h-80 border border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 text-sm">Map placeholder</p>
                <p className="text-gray-500 text-xs mt-2">Replace with Google Maps embed</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600">
                <strong>Privacy Notice:</strong> We do not share your details with third parties. Your information is used solely for responding to your inquiry and providing services you request.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-black mb-4">Download Our Company Brochure</h3>
          <p className="text-gray-700 mb-6">Get detailed information about our services, machinery, and capabilities</p>
          <a
            href="/downloads/ftex-company-brochure.pdf"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            Download PDF (2.5 MB)
          </a>
        </div>
      </div>
    </section>
  );
}

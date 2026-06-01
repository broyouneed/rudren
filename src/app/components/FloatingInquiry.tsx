import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingInquiry() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/911234567890', '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center z-40 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Quick Inquiry Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl flex items-center justify-center z-40"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Send className="w-6 h-6" />}
      </motion.button>

      {/* Quick Inquiry Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-40"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
              <h3 className="font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Inquiry
              </h3>
              <p className="text-sm text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>
                We'll get back to you shortly
              </p>
            </div>
            <form className="p-4 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              ></textarea>
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

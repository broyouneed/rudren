import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get in touch with our team of packaging experts
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <ContactInfoSection />

      {/* Contact Form & Map */}
      <FormAndMapSection />

      {/* Additional Info */}
      <AdditionalInfoSection />
    </div>
  );
}

function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactCards = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Visit Us',
      info: '123 Industrial Park, Business District',
      subinfo: 'Mumbai - 400001, Maharashtra, India',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      info: '+91 123 456 7890',
      subinfo: 'Mon-Sat, 9:00 AM - 6:00 PM',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      info: 'info@broyouneed.com',
      subinfo: 'sales@broyouneed.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      info: '+91 987 654 3210',
      subinfo: '24/7 Quick Support',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section ref={ref} className="py-12 -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center text-white mb-4`}
              >
                {card.icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {card.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                {card.info}
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                {card.subinfo}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormAndMapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Fill out the form below and our team will get back to you within 24 hours
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Product Interest
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <option>Select a product category</option>
                  <option>Strapping Machines</option>
                  <option>Carton Sealing Machines</option>
                  <option>Stretch Wrapping Machines</option>
                  <option>Pallet Wrapping Systems</option>
                  <option>Complete Packaging Line</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Tell us about your packaging requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-xl h-96 flex items-center justify-center border border-blue-100">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Visit Our Facility
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  123 Industrial Park, Business District
                  <br />
                  Mumbai - 400001, Maharashtra, India
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Open in Maps
                </a>
              </div>
            </div>
            <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="space-y-8 self-start"
></motion.div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            {/* <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-xl text-white">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Need Immediate Assistance?
              </h3>
              <p className="mb-6 text-green-50" style={{ fontFamily: 'Inter, sans-serif' }}>
                Chat with us on WhatsApp for instant support and quick quotes
              </p>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:shadow-2xl transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Start WhatsApp Chat
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AdditionalInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const offices = [
    {
      city: 'Mumbai (Head Office)',
      address: '123 Industrial Park, Business District, Mumbai - 400001',
      phone: '+91 123 456 7890',
      email: 'mumbai@broyouneed.com',
    },
    {
      city: 'Delhi',
      address: '456 Manufacturing Hub, Industrial Area, Delhi - 110020',
      phone: '+91 987 654 3210',
      email: 'delhi@broyouneed.com',
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Electronic City, Bangalore - 560100',
      phone: '+91 555 123 4567',
      email: 'bangalore@broyouneed.com',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Locations
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Find us across major cities in India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {office.city}
              </h3>
              <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">{office.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-blue-600">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-blue-600">
                    {office.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Package,
  Shield,
  Zap,
  Award,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import HeroCarousel from '../components/HeroCarousel';

export function HomePage() {
  const [stats, setStats] = useState({ projects: 0, clients: 0, countries: 0, experience: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = { projects: 5000, clients: 500, countries: 25, experience: 15 };
      let current = { projects: 0, clients: 0, countries: 0, experience: 0 };

      const timer = setInterval(() => {
        current = {
          projects: Math.min(current.projects + targets.projects / steps, targets.projects),
          clients: Math.min(current.clients + targets.clients / steps, targets.clients),
          countries: Math.min(current.countries + targets.countries / steps, targets.countries),
          experience: Math.min(current.experience + targets.experience / steps, targets.experience),
        };

        setStats({
          projects: Math.floor(current.projects),
          clients: Math.floor(current.clients),
          countries: Math.floor(current.countries),
          experience: Math.floor(current.experience),
        });

        if (
          current.projects >= targets.projects &&
          current.clients >= targets.clients &&
          current.countries >= targets.countries &&
          current.experience >= targets.experience
        ) {
          clearInterval(timer);
        }
      }, interval);
    };

    animateStats();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Animated Machine Showcase */}
      <AnimatedShowcaseSection />

      {/* Company Introduction */}
      <CompanyIntroSection />

      {/* Featured Products */}
      <FeaturedProductsSection />

      {/* Brand Partners */}
      <BrandPartnersSection />

      {/* Industries Served */}
      <IndustriesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Testimonials */}
      {/* <TestimonialsSection /> */}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
      <div
        className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {number}
      </div>
      <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </div>
    </div>
  );
}

function AnimatedShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            State-of-the-Art Machinery
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Experience the future of packaging with our advanced automation solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Industrial packaging machine"
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Automated Production
                </h3>
                <p className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  High-speed machinery for maximum efficiency
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Industrial robot arm"
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Smart Robotics
                </h3>
                <p className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  AI-powered automation for precision packaging
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CompanyIntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About Rudren Solutions
            </h2>
            <p
              className="text-lg text-gray-600 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              With over 15 years of excellence in the packaging industry, BroYouNeed Packaging
              Solutions has established itself as a trusted partner for businesses worldwide. We
              specialize in providing comprehensive packaging machinery and automation solutions that
              drive efficiency and innovation.
            </p>
            <p
              className="text-lg text-gray-600 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our commitment to quality, customer satisfaction, and cutting-edge technology has made us
              the preferred choice for leading brands across multiple industries.
            </p>
            <Link
              to="/company"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Quality Assured"
              description="ISO certified products"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Fast Delivery"
              description="Quick installation"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Award Winning"
              description="Industry recognition"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Expert Support"
              description="24/7 assistance"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3
        className="text-lg font-semibold text-gray-900 mb-2"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
        {description}
      </p>
    </div>
  );
}

function FeaturedProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const products = [
    {
      title: 'Strapping Machines',
      category: 'Itipack',
      image: 'https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'High-performance automatic strapping ',
    },
    {
      title: 'Pallet Wrapping',
      category: 'Atlanta',
      image: 'https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Advanced pallet wrapping systems',
    },
    {
      title: 'Carton Sealing',
      category: 'Itipack',
      image: 'https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Efficient carton sealing machines',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Featured Products
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Discover our range of premium packaging machinery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  category,
  image,
  description,
}: {
  title: string;
  category: string;
  image: string;
  description: string;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
        <button
          className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function BrandPartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const brands = ['Itipack', 'Atlanta', 'PackPro', 'IndustrialTech', 'GlobalPack', 'AutoWrap'];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Brand Partners
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Collaborating with global leaders in packaging technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <span
                className="text-xl font-bold text-gray-400"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const industries = [
    { name: 'Chemical', icon: '💊', color: 'from-orange-500 to-red-500' },
    { name: 'Pharmaceutical', icon: '🛒', color: 'from-green-500 to-emerald-500' },
    { name: 'Steel', icon: '🚗', color: 'from-blue-500 to-indigo-500' },
    { name: 'Aluminium', icon: '铝', color: 'from-purple-500 to-pink-500' },
    { name: 'Logistics', icon: '📦', color: 'from-yellow-500 to-orange-500' },
    { name: 'Heavy Engineering', icon: '🛍️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Glassr', icon: '🛍️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Shipping', icon: '🛍️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Cargo Securing', icon: '🛍️', color: 'from-cyan-500 to-blue-500' },


  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Industries We Serve
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Delivering excellence across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border border-gray-100 cursor-pointer">
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}
                >
                  {industry.icon}
                </div>
                <h3
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/industries"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>Explore Industries</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'ISO certified products with international standards',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'Latest technology and automation solutions',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Presence',
      description: 'Serving clients in 25+ countries worldwide',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: '24/7 technical support and consultation',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why Choose Us
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Experience the Rudren Solutions advantage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechPack Industries',
      text: 'Exceptional quality and outstanding service. The packaging solutions have significantly improved our production efficiency.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Foods Ltd',
      text: 'Rudren Solutions has been our trusted partner for years. Their machines are reliable and their support team is always ready to help.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'AutoParts Direct',
      text: 'The automated systems have transformed our packaging process. Highly recommended for any business looking to scale.',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Client Testimonials
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            What our clients say about us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p
                className="text-gray-700 mb-6 italic"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
              <div>
                <p
                  className="font-bold text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to Transform Your Packaging Process?
          </h2>
          <p
            className="text-xl text-blue-100 mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get in touch with our experts today and discover how we can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Us Now
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-blue-500/30 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-blue-500/50 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

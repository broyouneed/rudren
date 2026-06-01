import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Delivering excellence across diverse sectors worldwide
          </motion.p>
        </div>
      </section>

      <IndustrySection
        title="Food & Beverage Industry"
        icon=""
        image="https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        description="Specialized packaging solutions for the food and beverage sector, ensuring hygiene, freshness, and compliance with international food safety standards."
        features={[
          'Food-grade materials',
          'Hygienic design standards',
          'Temperature control systems',
          'FDA compliance',
          'Quick changeover capability',
          'Automated quality checks',
        ]}
        applications={[
          'Fresh produce packaging',
          'Beverage bottling lines',
          'Frozen food wrapping',
          'Snack food packaging',
          'Dairy product sealing',
        ]}
      />

      <IndustrySection
        title="FMCG (Fast Moving Consumer Goods)"
        icon=""
        image="https://images.unsplash.com/photo-1651615832931-1f0540d43ef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        description="High-speed packaging machinery designed for the demanding FMCG sector, where efficiency and reliability are paramount."
        features={[
          'Ultra-high-speed operation',
          'Minimal downtime',
          'Multi-format capability',
          'Brand protection features',
          'Cost-effective operation',
          'Scalable solutions',
        ]}
        applications={[
          'Personal care products',
          'Household items packaging',
          'Beauty products',
          'Cleaning supplies',
          'Consumer electronics',
        ]}
        reverse
      />

      <IndustrySection
        title="Automotive Industry"
        icon=""
        image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        description="Robust packaging systems for automotive parts and components, ensuring protection during storage and transportation."
        features={[
          'Heavy-duty construction',
          'Corrosion protection',
          'Custom packaging design',
          'Parts protection systems',
          'Supply chain optimization',
          'Returnable packaging',
        ]}
        applications={[
          'Spare parts packaging',
          'Component protection',
          'Engine parts wrapping',
          'Electrical components',
          'Bulk parts handling',
        ]}
      />

      <IndustrySection
        title="Pharmaceutical Industry"
        icon=""
        image="https://images.unsplash.com/photo-1669101283516-e608dcf142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        description="GMP-compliant packaging solutions for the pharmaceutical sector, meeting the highest standards of quality and safety."
        features={[
          'GMP compliance',
          'Cleanroom compatible',
          'Tamper-evident systems',
          'Serialization ready',
          'Temperature monitoring',
          'Validation documentation',
        ]}
        applications={[
          'Tablet packaging',
          'Vial and ampoule handling',
          'Medical device packaging',
          'Sterile product wrapping',
          'Blister pack sealing',
        ]}
        reverse
      />

      <IndustrySection
        title="Logistics & Warehousing"
        icon=""
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        description="Efficient pallet wrapping and securing solutions for logistics operations, optimizing warehouse processes."
        features={[
          'High throughput systems',
          'Automated operation',
          'Load stability',
          'Film cost optimization',
          'Integration with WMS',
          'Real-time monitoring',
        ]}
        applications={[
          'Pallet stabilization',
          'Distribution center packing',
          '3PL warehouse solutions',
          'Cross-docking operations',
          'E-commerce fulfillment',
        ]}
      />

      <IndustrySection
        title="E-commerce"
        icon=""
        image="https://images.unsplash.com/photo-1672552226380-486fe900b322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        description="Flexible packaging automation for e-commerce businesses, handling varying product sizes and high-volume orders."
        features={[
          'Variable size handling',
          'High-speed order fulfillment',
          'Packaging optimization',
          'Returns management',
          'Brand customization',
          'Sustainability focus',
        ]}
        applications={[
          'Parcel packaging',
          'Gift wrapping automation',
          'Multi-item bundling',
          'Protective packaging',
          'Last-mile preparation',
        ]}
        reverse
      />
    </div>
  );
}

function IndustrySection({
  title,
  icon,
  image,
  description,
  features,
  applications,
  reverse,
}: {
  title: string;
  icon: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
  reverse?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white odd:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={reverse ? 'md:order-2' : ''}
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={reverse ? 'md:order-1' : ''}
          >
            <div className="text-6xl mb-6">{icon}</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              {description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {applications.map((app, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

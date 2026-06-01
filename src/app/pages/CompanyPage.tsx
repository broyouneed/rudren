import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Building2, Target, Eye, Award, Users, Factory, CheckCircle2, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* About Company */}
      <AboutSection />

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Manufacturing Capabilities */}
      <ManufacturingSection />

      {/* Infrastructure */}
      <InfrastructureSection />

      {/* Certifications Timeline */}
      <CertificationsSection />

      {/* Company Milestones */}
      <MilestonesSection />

      {/* Leadership */}
      <LeadershipSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660496247667-3fb697c396af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Company building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          About Rudren Solutiins LLP
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-blue-100"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Leading the packaging industry with innovation and excellence
        </motion.p>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Company
            </h2>
            <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Established in 2010, BroYouNeed Packaging Solutions has grown to become one of the most
              trusted names in the packaging machinery industry. With over 15 years of experience, we
              have successfully delivered innovative packaging solutions to over 500 clients across 25
              countries.
            </p>
            <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our state-of-the-art manufacturing facility spans 50,000 sq ft and houses the latest
              technology for producing high-quality packaging equipment. We are authorized distributors
              for leading international brands including Itipack and Atlanta.
            </p>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our commitment to quality, innovation, and customer satisfaction has earned us ISO
              9001:2015 certification and numerous industry awards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <StatBox icon={<Building2 />} value="50,000" label="Sq Ft Facility" />
            <StatBox icon={<Users />} value="100+" label="Team Members" />
            <StatBox icon={<Award />} value="25+" label="Awards Won" />
            <StatBox icon={<TrendingUp />} value="500+" label="Happy Clients" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
      <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {value}
      </div>
      <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </div>
    </div>
  );
}

function VisionMissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Vision
            </h3>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              To be the global leader in packaging automation, recognized for innovation, quality, and
              customer-centric solutions that drive business growth and operational excellence across all
              industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Mission
            </h3>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              To deliver world-class packaging machinery and comprehensive solutions that empower
              businesses to optimize efficiency, reduce costs, and achieve sustainable growth through
              cutting-edge technology and exceptional service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ManufacturingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const capabilities = [
    'Advanced CNC Machining',
    'Robotic Welding',
    'Precision Assembly',
    'Quality Control Testing',
    'Custom Engineering',
    'Rapid Prototyping',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Manufacturing Capabilities
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            State-of-the-art facilities equipped with latest technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all"
            >
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {capability}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Infrastructure
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            World-class facilities designed for excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1716194583732-0b9874234218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Manufacturing facility"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Production Facility
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  50,000 sq ft modern manufacturing plant with climate-controlled environment
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Quality Lab
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Advanced testing equipment ensuring international quality standards
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  R&D Center
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Dedicated innovation center for developing next-generation solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    { year: '2010', title: 'Company Established', description: 'Founded with a vision for excellence' },
    { year: '2013', title: 'ISO 9001:2008', description: 'Quality management certification' },
    { year: '2016', title: 'CE Certification', description: 'European safety standards' },
    { year: '2020', title: 'ISO 9001:2015', description: 'Updated quality standards' },
    { year: '2023', title: 'Industry Awards', description: 'Multiple excellence recognitions' },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our journey of excellence
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-indigo-200" />

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {cert.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {cert.title}
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestonesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    { number: '5000+', label: 'Machines Installed' },
    { number: '500+', label: 'Active Clients' },
    { number: '25+', label: 'Countries' },
    { number: '100+', label: 'Team Members' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Milestones
          </h2>
          <p className="text-xl text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {milestone.number}
              </div>
              <div className="text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>
                {milestone.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const leaders = [
    { name: 'Amit Sharma', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Priya Patel', role: 'CTO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Rahul Mehta', role: 'COO', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400' },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Experienced professionals driving innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

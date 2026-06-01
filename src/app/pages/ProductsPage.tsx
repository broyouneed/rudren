import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Package, Filter, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams(tab !== 'all' ? { tab } : {});
    setCategoryFilter('all');
  };

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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Premium packaging machinery for every industry
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 overflow-x-auto">
            <TabButton active={activeTab === 'all'} onClick={() => handleTabChange('all')}>
              All Products
            </TabButton>
            <TabButton active={activeTab === 'itipack'} onClick={() => handleTabChange('itipack')}>
              Itipack Machines
            </TabButton>
            <TabButton active={activeTab === 'atlanta'} onClick={() => handleTabChange('atlanta')}>
              Atlanta Machines
            </TabButton>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            {activeTab !== 'all' && (
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="all">All Categories</option>
                {activeTab === 'itipack' && (
                  <>
                    <option value="strapping">Strapping Machines</option>
                    <option value="carton">Carton Sealing</option>
                    <option value="stretch">Stretch Wrapping</option>
                    <option value="shrink">Shrink Wrapping</option>
                    <option value="consumables">Consumables</option>
                  </>
                )}
                {activeTab === 'atlanta' && (
                  <>
                    <option value="semi">Semi Automatic</option>
                    <option value="auto">Fully Automatic</option>
                    <option value="pallet">Pallet Wrapping</option>
                    <option value="industrial">Industrial Equipment</option>
                  </>
                )}
              </select>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'all' && <AllProductsTab searchQuery={searchQuery} />}
          {activeTab === 'itipack' && <ItipackTab searchQuery={searchQuery} categoryFilter={categoryFilter} />}
          {activeTab === 'atlanta' && <AtlantaTab searchQuery={searchQuery} categoryFilter={categoryFilter} />}
        </div>
      </section>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
        active ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

function AllProductsTab({ searchQuery }: { searchQuery: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const allProducts = [
    {
      name: 'Automatic Strapping Machine',
      brand: 'Itipack',
      category: 'Strapping',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'High-speed automatic strapping for pallets and cartons',
    },
    {
      name: 'Pallet Stretch Wrapper',
      brand: 'Atlanta',
      category: 'Wrapping',
      image: 'https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Fully automatic pallet wrapping system',
    },
    {
      name: 'Carton Sealing Machine',
      brand: 'Itipack',
      category: 'Sealing',
      image: 'https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Efficient carton sealing with tape application',
    },
    {
      name: 'Industrial Robot Arm',
      brand: 'Atlanta',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'AI-powered robotic packaging solution',
    },
    {
      name: 'Shrink Wrapping System',
      brand: 'Itipack',
      category: 'Wrapping',
      image: 'https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Complete shrink wrap packaging line',
    },
    {
      name: 'Semi-Auto Strapper',
      brand: 'Atlanta',
      category: 'Strapping',
      image: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Portable semi-automatic strapping tool',
    },
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  );
}

function ItipackTab({ searchQuery, categoryFilter }: { searchQuery: string; categoryFilter: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      name: 'Automatic Strapping Machine ITP-200',
      brand: 'Itipack',
      category: 'strapping',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'High-speed strapping up to 30 straps/min',
      specs: ['30 straps/min', 'PLC control', 'Auto tension'],
    },
    {
      name: 'Carton Sealing Machine ITP-CS50',
      brand: 'Itipack',
      category: 'carton',
      image: 'https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Automatic top and bottom sealing',
      specs: ['Variable speed', 'Adjustable height', 'Easy setup'],
    },
    {
      name: 'Stretch Wrapping System ITP-SW300',
      brand: 'Itipack',
      category: 'stretch',
      image: 'https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Automatic pallet stretch wrapper',
      specs: ['Pre-stretch 300%', 'Touch screen', 'Auto film cutting'],
    },
    {
      name: 'Shrink Tunnel ITP-ST100',
      brand: 'Itipack',
      category: 'shrink',
      image: 'https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Heat shrink tunnel system',
      specs: ['Digital temp control', 'Energy efficient', 'Variable speed'],
    },
    {
      name: 'PP Strapping Roll',
      brand: 'Itipack',
      category: 'consumables',
      image: 'https://images.unsplash.com/photo-1621954938124-02e637ba3584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'High-quality polypropylene strapping',
      specs: ['12mm width', '2500m length', 'Multiple colors'],
    },
    {
      name: 'Packaging Tape Dispenser',
      brand: 'Itipack',
      category: 'consumables',
      image: 'https://images.unsplash.com/photo-1716194583732-0b9874234218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Heavy-duty tape dispenser gun',
      specs: ['Ergonomic design', 'Adjustable brake', 'Durable build'],
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div ref={ref}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Itipack Packaging Machines
        </h2>
        <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          Italian engineering excellence for superior packaging solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard {...product} showSpecs />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AtlantaTab({ searchQuery, categoryFilter }: { searchQuery: string; categoryFilter: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      name: 'Semi-Auto Pallet Wrapper ATL-SA',
      brand: 'Atlanta',
      category: 'semi',
      image: 'https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Manual operation with powered turntable',
      specs: ['2000kg capacity', 'Variable speed', 'Foot pedal control'],
    },
    {
      name: 'Fully Automatic Wrapper ATL-FA',
      brand: 'Atlanta',
      category: 'auto',
      image: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Complete automation with conveyor',
      specs: ['PLC controlled', 'Auto film attach', 'Remote diagnostics'],
    },
    {
      name: 'Robotic Pallet Wrapper ATL-R500',
      brand: 'Atlanta',
      category: 'pallet',
      image: 'https://images.unsplash.com/photo-1717386255893-59c0846cdef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Advanced robotic wrapping system',
      specs: ['360° rotation', 'AI optimization', 'Multi-pattern wrap'],
    },
    {
      name: 'Heavy Duty Strapping ATL-HD',
      brand: 'Atlanta',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Industrial-grade strapping machine',
      specs: ['5000kg tension', 'Steel strap', 'Pneumatic drive'],
    },
    {
      name: 'Mobile Wrapping Unit ATL-M100',
      brand: 'Atlanta',
      category: 'semi',
      image: 'https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Portable wrapping solution',
      specs: ['Battery powered', 'Lightweight', 'Quick setup'],
    },
    {
      name: 'Automated Packaging Line ATL-APL',
      brand: 'Atlanta',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1716194583732-0b9874234218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Complete integrated packaging system',
      specs: ['Modular design', 'IoT enabled', 'Industry 4.0 ready'],
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div ref={ref}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Atlanta Packaging Systems
        </h2>
        <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          American innovation for heavy-duty industrial applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard {...product} showSpecs />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  name,
  brand,
  category,
  image,
  description,
  specs,
  showSpecs,
}: {
  name: string;
  brand: string;
  category?: string;
  image: string;
  description: string;
  specs?: string[];
  showSpecs?: boolean;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
          {brand}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {name}
        </h3>
        <p className="text-gray-600 mb-4 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>

        {showSpecs && specs && (
          <div className="mb-4 space-y-1">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>{spec}</span>
              </div>
            ))}
          </div>
        )}

        <button
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Request Quote
        </button>
      </div>
    </div>
  );
}

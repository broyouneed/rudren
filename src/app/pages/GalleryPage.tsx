import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const images = [
    { url: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'machines', title: 'Packaging Machine' },
    { url: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'machines', title: 'Robotic Arm' },
    { url: 'https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'installation', title: 'Factory Setup' },
    { url: 'https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'factory', title: 'Production Line' },
    { url: 'https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'machines', title: 'Assembly Equipment' },
    { url: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'products', title: 'Machine Display' },
    { url: 'https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'factory', title: 'Manufacturing Floor' },
    { url: 'https://images.unsplash.com/photo-1717386255893-59c0846cdef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'machines', title: 'Industrial Equipment' },
    { url: 'https://images.unsplash.com/photo-1716194583732-0b9874234218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'installation', title: 'Worker Assembly' },
    { url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'factory', title: 'Warehouse Storage' },
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'factory', title: 'Logistics Center' },
    { url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'factory', title: 'Warehouse Racks' },
    { url: 'https://images.unsplash.com/photo-1669101283516-e608dcf142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'installation', title: 'Quality Check' },
    { url: 'https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'products', title: 'Food Processing' },
    { url: 'https://images.unsplash.com/photo-1651525670114-2b8117390b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'products', title: 'Product Packaging' },
    { url: 'https://images.unsplash.com/photo-1621954938124-02e637ba3584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', category: 'products', title: 'Strapping Equipment' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter((img) => img.category === filter);

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore our machines, installations, and manufacturing facilities
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              All
            </FilterButton>
            <FilterButton active={filter === 'machines'} onClick={() => setFilter('machines')}>
              Machines
            </FilterButton>
            <FilterButton active={filter === 'products'} onClick={() => setFilter('products')}>
              Products
            </FilterButton>
            <FilterButton active={filter === 'installation'} onClick={() => setFilter('installation')}>
              Installation
            </FilterButton>
            <FilterButton active={filter === 'factory'} onClick={() => setFilter('factory')}>
              Factory
            </FilterButton>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={filteredImages} />
        </div>
      </section>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
        active
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}

function GalleryGrid({ images }: { images: Array<{ url: string; category: string; title: string }> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref}>
      <Masonry columnsCount={3} gutter="1.5rem">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
          >
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {image.title}
                </h3>
                <p
                  className="text-sm text-gray-300 capitalize"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {image.category}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}

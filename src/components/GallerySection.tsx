import React, { useState } from 'react';
import { Eye, Image as ImageIcon, Sparkles, X, Download, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { Language, GalleryItem } from '../types';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', labelEn: 'All Photos', labelHi: 'सभी तस्वीरें' },
    { id: 'Services', labelEn: 'Cafe & Workstations', labelHi: 'कैफे एवं वर्कस्टेशन' },
    { id: 'Solar', labelEn: 'Solar Energy', labelHi: 'सोलर ऊर्जा प्रोजेक्ट्स' },
    { id: 'Milestone', labelEn: 'Grand Opening & Posters', labelHi: 'उद्घाटन एवं पोस्टर' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'hi' ? 'फोटो गैलरी' : 'Visual Gallery'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {language === 'hi' ? 'कैफे, उपकरण एवं सोलर गैलरी' : 'Facility, Workstation & Solar Showcase'}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'hi'
              ? 'हमारे आधुनिक कंप्यूटर वर्कस्टेशन, प्रिंटिंग सुविधा, रूफटॉप सोलर स्थापना और उद्घाटन समारोह का दृश्य।'
              : 'Take a look inside our modern digital service center, high-speed workstations, printing equipment and rooftop solar installations in Unnao.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {language === 'hi' ? f.labelHi : f.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-navy-dark/90 text-amber-400 text-[10px] font-bold border border-white/20 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-bold text-sm sm:text-base group-hover:text-amber-300 transition-colors">
                  {language === 'hi' ? item.titleHi : item.titleEn}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {language === 'hi' ? item.captionHi : item.captionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 bg-brand-navy-dark flex items-center justify-between border-b border-white/10 text-white">
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    {language === 'hi' ? selectedImage.titleHi : selectedImage.titleEn}
                  </h3>
                  <p className="text-xs text-amber-400">{selectedImage.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedImage.imageUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                    title="Open or Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image Container */}
              <div className="max-h-[75vh] flex items-center justify-center bg-black/60 p-2">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.titleEn}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-4 bg-brand-navy text-xs sm:text-sm text-slate-300 border-t border-white/10">
                <p>{language === 'hi' ? selectedImage.captionHi : selectedImage.captionEn}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

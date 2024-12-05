import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    title: 'Annual Investor Meet 2024',
    category: 'Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2340',
    title: 'Investment Workshop',
    category: 'Workshops'
  },
  {
    url: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2340',
    title: 'Client Seminar',
    category: 'Seminars'
  },
  {
    url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2340',
    title: 'Team Building Event',
    category: 'Corporate'
  }
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm text-blue-300">{image.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
import React from "react";

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-serif text-gold mb-6">Featured Collection</h2>
      <p className="max-w-3xl mx-auto text-lg mb-10">A glimpse of our premium gemstone selection.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 rounded-lg h-64"></div>
        <div className="bg-white/10 rounded-lg h-64"></div>
        <div className="bg-white/10 rounded-lg h-64"></div>
      </div>
    </section>
  );
}

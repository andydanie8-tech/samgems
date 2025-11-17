import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center p-4">
      <div>
        <h1 className="text-5xl md:text-7xl font-serif text-gold">
          Luxury Rough Gemstones. Timeless Elegance.
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
          Global suppliers of premium rough gemstones for collectors, designers & investors.
        </p>
        <div className="mt-8">
          <a href="#gallery" className="px-8 py-4 bg-gold text-navy font-bold rounded-lg mr-4">
            Explore Collection
          </a>
          <a href="#contact" className="px-8 py-4 border border-gold text-gold font-bold rounded-lg">
            Quick Contact
          </a>
        </div>
      </div>
    </section>
  );
}

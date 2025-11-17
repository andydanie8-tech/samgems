import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-serif text-gold mb-6">Why Choose Us</h2>
      <p className="max-w-3xl mx-auto text-lg">
        With decades of experience in gemstone sourcing, SAM Gemstones provides authentic,
        ethically sourced, high-quality rough gemstones trusted by global buyers.
      </p>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        <div className="p-6 border border-gold rounded-xl">Ethical Sourcing</div>
        <div className="p-6 border border-gold rounded-xl">Premium Quality</div>
        <div className="p-6 border border-gold rounded-xl">Global Shipping</div>
      </div>
    </section>
  );
}

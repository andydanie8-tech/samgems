import React from "react";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import GalleryPreview from "./components/GalleryPreview";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-navy text-white font-sans">
      <Hero />
      <WhyChooseUs />
      <GalleryPreview />
      <Contact />
      <footer className="text-center py-8">
        © {new Date().getFullYear()} SAM Gemstones Co. Ltd. All rights reserved.
      </footer>
    </div>
  );
}

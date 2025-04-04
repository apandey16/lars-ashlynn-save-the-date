"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1);
  const images = [
    { src: "/images/engagement1.jpg", alt: "Lars and Ashlynn engagement photo 1" },
    { src: "/images/engagement2.jpg", alt: "Lars and Ashlynn engagement photo 2" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 1 ? 2 : 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-10 px-8 bg-gradient-to-b from-[#98c5b0] to-[#b8e6cf]">
      <main className="flex flex-col gap-[32px] items-center text-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="cursive text-4xl md:text-5xl mb-4 text-[#1e3d8f]">Lars & Ashlynn</h1>
          <p className="text-2xl md:text-3xl mb-8 text-[#3d7a7a]">Save the Date</p>
          <div className="h-px w-48 bg-[#3d7a7a] mb-8"></div>
          <p className="cursive text-3xl md:text-4xl text-[#1e3d8f] mb-8">August 8, 2025</p>
        </div>
        
        <div className="relative w-full aspect-[4/3] mb-8 mx-auto overflow-hidden rounded-lg shadow-xl border-4 border-[#98c5b0]">
          {images.map((image, index) => (
            <Image 
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              className={`
                object-cover
                transition-opacity duration-1000
                ${currentImage === index + 1 ? 'opacity-100' : 'opacity-0'}
                ${index === 0 ? 'object-[center_35%] scale-125' : 'object-[center_55%]'}
              `}
              priority
            />
          ))}
        </div>
        
        <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm w-full border border-[#3d7a7a]">
          <div className="mb-8">
            <h2 className="cursive text-2xl mb-2 text-[#1e3d8f]">The Wedding of</h2>
            <p className="text-xl mb-1 text-[#3d7a7a]">Lars-Allan Holien</p>
            <p className="text-xl mb-4 text-[#3d7a7a]">& Ashlynn Mathews</p>
            <p className="text-lg text-[#3d7a7a]">Join us for our special day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#98c5b0] p-4 rounded-lg">
              <h3 className="cursive text-lg mb-2 text-[#1e3d8f]">When</h3>
              <p className="text-[#3d7a7a]">August 8, 2025</p>
            </div>
            
            <div className="border border-[#98c5b0] p-4 rounded-lg">
              <h3 className="cursive text-lg mb-2 text-[#1e3d8f]">Where</h3>
              <p className="text-[#3d7a7a]">Capistrano Beach, CA</p>
            </div>
          </div>
        </div>
        
        <a 
          href="https://forms.gle/xRdURdrQ2wgBbJoF9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-[#1e3d8f] hover:bg-[#3d7a7a] text-white rounded-full shadow-md transition-colors inline-block text-lg"
        >
          RSVP Here!
        </a>
        
        <footer className="flex gap-[24px] flex-wrap items-center justify-center text-[#3d7a7a] text-sm mt-8">
          <p>With love, Lars & Ashlynn</p>
        </footer>
      </main>
    </div>
  );
}

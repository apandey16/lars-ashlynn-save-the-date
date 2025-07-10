"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ImageObj = { src: string; alt: string };

function shuffleArray(array: ImageObj[]): ImageObj[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1);
  const [shuffledImages, setShuffledImages] = useState<ImageObj[]>([]);
  const images: ImageObj[] = [
    { src: "/images/engagement1.jpg", alt: "Lars and Ashlynn engagement photo 1" },
    { src: "/images/engagement2.jpg", alt: "Lars and Ashlynn engagement photo 2" },
    { src: "/images/engagement3.jpg", alt: "Lars and Ashlynn engagement photo 3" },
    { src: "/images/engagement4.jpg", alt: "Lars and Ashlynn engagement photo 4" },
    { src: "/images/engagement5.jpg", alt: "Lars and Ashlynn engagement photo 5" },
  ];

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  useEffect(() => {
    if (shuffledImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === shuffledImages.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [shuffledImages]);

  return (
    <div className="min-h-screen pt-16 pb-10 px-8 bg-gradient-to-b from-[#4A8769] via-[#76A49D] to-[#006081]">
      <main className="flex flex-col gap-[32px] items-center text-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="cursive text-4xl md:text-5xl mb-4 text-white drop-shadow-lg">Lars & Ashlynn</h1>
          <p className="text-2xl md:text-3xl mb-8 text-white drop-shadow">Celebrate with us!</p>
          <div className="h-px w-48 bg-white mb-8 opacity-70"></div>
          <p className="cursive text-3xl md:text-4xl text-white drop-shadow-lg mb-8">August 8, 2025</p>
        </div>
        
        <div className="relative w-full aspect-[4/3] mb-8 mx-auto overflow-hidden rounded-lg shadow-xl border-4 border-[#76A49D]">
          {shuffledImages.map((image, index) => (
            <Image 
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              className={`
                object-cover
                transition-opacity duration-1000
                ${currentImage === index + 1 ? 'opacity-100' : 'opacity-0'}
                ${image.src.includes('engagement1') ? 'object-[center_35%] scale-125' : ''}
                ${image.src.includes('engagement2') ? 'object-[center_55%]' : ''}
                ${image.src.includes('engagement4') ? 'object-[center_25%]' : ''}
              `}
              priority
            />
          ))}
        </div>
        
        <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm w-full border border-[#1C7693]">
          <div className="mb-8">
            <h2 className="cursive text-2xl mb-2 text-[#006081]">The Wedding of</h2>
            <p className="text-xl mb-1 text-[#1C7693]">Lars-Allan Holien</p>
            <p className="text-xl mb-4 text-[#1C7693]">& Ashlynn Matthews</p>
            <p className="text-lg text-[#1C7693]">Join us for our special day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#76A49D] p-4 rounded-lg">
              <h3 className="cursive text-lg mb-2 text-[#006081]">When</h3>
              <p className="text-[#1C7693]">August 8, 2025</p>
            </div>
            <div className="border border-[#76A49D] p-4 rounded-lg">
              <h3 className="cursive text-lg mb-2 text-[#006081]">Where</h3>
              <p className="text-[#1C7693]">Capistrano Beach, CA</p>
            </div>
          </div>
        </div>
        <a 
          href="https://forms.gle/xRdURdrQ2wgBbJoF9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-[#006081] hover:bg-[#1C7693] text-white rounded-full shadow-md transition-colors inline-block text-lg"
        >
          RSVP Here!
        </a>
        <div className="flex justify-center mt-8">
          <img 
            src="/images/wedding_invite.jpg" 
            alt="Wedding Invitation" 
            className="max-w-full md:max-w-lg rounded-lg border-4 border-[#76A49D] shadow-xl"
          />
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center text-white text-sm mt-8">
          <p>With love, Lars & Ashlynn</p>
        </footer>
    </div>
  );
}

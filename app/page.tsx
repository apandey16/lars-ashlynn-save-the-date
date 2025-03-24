import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-900 dark:to-stone-900">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center max-w-2xl">
        <div className="flex flex-col items-center">
          <h1 className="cursive text-4xl md:text-5xl font-bold mb-4 text-amber-800 dark:text-amber-300">Lars & Ashlynn</h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-stone-700 dark:text-stone-200">Save the Date</p>
          <div className="h-px w-48 bg-amber-300 dark:bg-amber-700 mb-8"></div>
          <p className="cursive text-3xl md:text-4xl text-amber-700 dark:text-amber-400 mb-8">August 8, 2025</p>
        </div>
        
        <div className="relative w-full aspect-[4/3] mb-8 mx-auto">
          <Image 
            src="/couple.JPEG" 
            alt="Lars and Ashlynn" 
            fill
            className="object-cover rounded-lg shadow-xl border-4 border-amber-100 dark:border-amber-900"
            priority
          />
        </div>
        
        <div className="bg-white/70 dark:bg-stone-800/70 p-8 rounded-lg shadow-xl backdrop-blur-sm w-full border border-amber-200 dark:border-amber-900">
          <div className="mb-8">
            <h2 className="cursive text-2xl font-semibold mb-2 text-stone-800 dark:text-stone-100">The Wedding of</h2>
            <p className="text-xl mb-1 text-stone-700 dark:text-stone-200">Lars-Allan Holien</p>
            <p className="text-xl mb-4 text-stone-700 dark:text-stone-200">& Ashlynn Matthews</p>
            <p className="text-lg italic text-stone-600 dark:text-stone-300">Join us for our special day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
              <h3 className="cursive text-lg font-medium mb-2 text-amber-700 dark:text-amber-400">When</h3>
              <p className="text-stone-600 dark:text-stone-300">August 8, 2025</p>
            </div>
            
            <div className="border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
              <h3 className="cursive text-lg font-medium mb-2 text-amber-700 dark:text-amber-400">Where</h3>
              <p className="text-stone-600 dark:text-stone-300">San Clemente, CA</p>
            </div>
          </div>
        </div>
        
        <button className="mt-4 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-full shadow-md transition-colors">
          RSVP Coming Soon!
        </button>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-stone-600 dark:text-stone-400 text-sm">
        <p>With love, Lars & Ashlynn</p>
      </footer>
    </div>
  );
}

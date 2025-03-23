import { useState } from 'react'

function App() {
  const [showRsvp, setShowRsvp] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-900 dark:to-stone-900 flex items-center justify-center text-stone-800 dark:text-white py-10 px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="cursive text-4xl md:text-6xl font-bold mb-4 text-amber-800 dark:text-amber-300">Lars & Ashlynn</h1>
          <p className="text-2xl md:text-3xl font-light mb-6 text-stone-700 dark:text-stone-200">Save the Date</p>
          <div className="h-px w-48 mx-auto bg-amber-300 dark:bg-amber-700 mb-8"></div>
          <p className="cursive text-3xl md:text-4xl text-amber-700 dark:text-amber-400">August 8, 2025</p>
        </div>
        
        <div className="relative w-full aspect-[4/3] mb-12 mx-auto max-w-2xl">
          <img 
            src="/couple.JPEG" 
            alt="Lars and Ashlynn" 
            className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-amber-100 dark:border-amber-900"
          />
        </div>

        <div className="bg-white/70 dark:bg-stone-800/70 p-8 md:p-12 rounded-lg shadow-xl backdrop-blur-sm border border-amber-200 dark:border-amber-900">
          <div className="mb-10 text-center">
            <h2 className="cursive text-2xl md:text-3xl font-semibold mb-4 text-stone-800 dark:text-stone-100">The Wedding of</h2>
            <p className="text-xl md:text-2xl mb-2 text-stone-700 dark:text-stone-200">Lars-Allen Holien</p>
            <p className="text-xl md:text-2xl mb-6 text-stone-700 dark:text-stone-200">& Ashlynn Matthews</p>
            <p className="text-lg italic text-stone-600 dark:text-stone-300">Join us as we celebrate our love</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="border border-amber-200 dark:border-amber-800 p-6 rounded-lg text-center">
              <h3 className="cursive text-xl font-medium mb-3 text-amber-700 dark:text-amber-400">When</h3>
              <p className="text-stone-600 dark:text-stone-300">August 8, 2025</p>
            </div>
            
            <div className="border border-amber-200 dark:border-amber-800 p-6 rounded-lg text-center">
              <h3 className="cursive text-xl font-medium mb-3 text-amber-700 dark:text-amber-400">Where</h3>
              <p className="text-stone-600 dark:text-stone-300">Venue to be announced</p>
            </div>
          </div>

          {showRsvp ? (
            <div className="text-center p-6 border border-amber-200 dark:border-amber-800 rounded-lg">
              <h3 className="cursive text-xl font-medium mb-4 text-amber-700 dark:text-amber-400">RSVP</h3>
              <p className="mb-4 text-stone-600 dark:text-stone-300">Please check back later. We are finalizing details for our August 8, 2025 wedding.</p>
              <button 
                className="px-4 py-2 bg-stone-200 dark:bg-stone-700 rounded hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
                onClick={() => setShowRsvp(false)}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-full shadow-md transition-colors"
                onClick={() => setShowRsvp(true)}
              >
                RSVP Coming Soon
              </button>
            </div>
          )}
        </div>
        
        <footer className="mt-12 text-center text-stone-600 dark:text-stone-400 text-sm">
          <p>With love, Lars & Ashlynn</p>
        </footer>
      </div>
    </div>
  )
}

export default App 
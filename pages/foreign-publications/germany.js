
import { useState, useEffect } from 'react'

// SVG icons
const ChevronLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
)

const ChevronRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
)

const Star = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)

const Heart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
)

const Calendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
)

const Book = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
)

const Award = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
)

const Video = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
)

const Plus = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
)

const Minus = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/></svg>
)

const ShoppingCart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
)

const X = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
)

const books = [
  {
    title: "Der Prozess",
    author: "Franz Kafka",
    year: 1925,
    genre: "Existenzieller Roman",
    awards: ["Einer der einflussreichsten Romane des 20. Jahrhunderts"],
    synopsis: "Josef K. wird eines Morgens verhaftet und in einen surrealen Gerichtsprozess verwickelt, ohne zu wissen, was ihm vorgeworfen wird.",
    cover: "/placeholder.svg?height=400&width=300&text=Der+Prozess",
    rating: 4.6,
    pages: 304,
    price: 14.99,
    images: [
      "/placeholder.svg?height=200&width=300&text=Prag",
      "/placeholder.svg?height=200&width=300&text=Gerichtssaal",
    ],
    video: "/placeholder.mp4"
  },
  {
    title: "Faust",
    author: "Johann Wolfgang von Goethe",
    year: 1808,
    genre: "Tragödie",
    awards: ["Meisterwerk der deutschen Literatur"],
    synopsis: "Dr. Faust, unzufrieden mit seinem Leben, schließt einen Pakt mit dem Teufel und begibt sich auf eine Reise voller Versuchungen und moralischer Konflikte.",
    cover: "/placeholder.svg?height=400&width=300&text=Faust",
    rating: 4.8,
    pages: 492,
    price: 16.99,
    images: [
      "/placeholder.svg?height=200&width=300&text=Mittelalterliche+Stadt",
      "/placeholder.svg?height=200&width=300&text=Mephistopheles",
    ],
    video: "/placeholder.mp4"
  },
  {
    title: "Die Verwandlung",
    author: "Franz Kafka",
    year: 1915,
    genre: "Novelle",
    awards: ["Einer der bekanntesten Texte der Weltliteratur"],
    synopsis: "Gregor Samsa wacht eines Morgens auf und stellt fest, dass er sich in ein riesiges Insekt verwandelt hat, was sein Leben und das seiner Familie auf den Kopf stellt.",
    cover: "/placeholder.svg?height=400&width=300&text=Die+Verwandlung",
    rating: 4.5,
    pages: 128,
    price: 9.99,
    images: [
      "/placeholder.svg?height=200&width=300&text=Schlafzimmer",
      "/placeholder.svg?height=200&width=300&text=Käfer",
    ],
    video: "/placeholder.mp4"
  },
  {
    title: "Im Westen nichts Neues",
    author: "Erich Maria Remarque",
    year: 1929,
    genre: "Kriegsroman",
    awards: ["Friedenspreis des Deutschen Buchhandels"],
    synopsis: "Die erschütternde Geschichte junger deutscher Soldaten im Ersten Weltkrieg, die die Schrecken und Sinnlosigkeit des Krieges erfahren.",
    cover: "/placeholder.svg?height=400&width=300&text=Im+Westen+nichts+Neues",
    rating: 4.7,
    pages: 288,
    price: 12.99,
    images: [
      "/placeholder.svg?height=200&width=300&text=Schützengraben",
      "/placeholder.svg?height=200&width=300&text=Soldaten",
    ],
    video: "/placeholder.mp4"
  }
]

export default function GermanGradientBooksPage() {
  const [currentBook, setCurrentBook] = useState(0)
  const [favorites, setFavorites] = useState([])
  const [showVideo, setShowVideo] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)

  const nextBook = () => {
    setCurrentBook((prev) => (prev + 1) % books.length)
    setQuantity(1)
    setShowVideo(false)
  }

  const prevBook = () => {
    setCurrentBook((prev) => (prev - 1 + books.length) % books.length)
    setQuantity(1)
    setShowVideo(false)
  }

  const toggleFavorite = () => {
    setFavorites(prev => 
      prev.includes(currentBook) 
        ? prev.filter(i => i !== currentBook)
        : [...prev, currentBook]
    )
  }

  const addToCart = () => {
    setShowToast(true)
    setQuantity(1)
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-sky-200 to-indigo-300 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={books[currentBook].cover} 
                alt={`Buchcover von ${books[currentBook].title}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-3xl font-bold mb-1 text-white" style={{fontFamily: 'Playfair Display, serif'}}>
                  {books[currentBook].title}
                </h2>
                <p className="text-xl text-emerald-200" style={{fontFamily: 'Merriweather, serif'}}>
                  {books[currentBook].author}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button onClick={prevBook} className="text-emerald-600 hover:text-emerald-800 transition-colors" aria-label="Vorheriges Buch">
                <ChevronLeft size={28} />
              </button>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="text-emerald-800 font-semibold" style={{fontFamily: 'Roboto, sans-serif'}}>
                    {books[currentBook].rating.toFixed(1)}
                  </span>
                </div>
                <button 
                  onClick={toggleFavorite} 
                  className={`text-emerald-600 hover:text-emerald-800 transition-colors ${favorites.includes(currentBook) ? 'text-red-500 hover:text-red-600' : ''}`}
                  aria-label={favorites.includes(currentBook) ? "Von Favoriten entfernen" : "Zu Favoriten hinzufügen"}
                >
                  <Heart size={24} fill={favorites.includes(currentBook) ? "currentColor" : "none"} />
                </button>
              </div>
              <button onClick={nextBook} className="text-emerald-600 hover:text-emerald-800 transition-colors" aria-label="Nächstes Buch">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Calendar className="w-5 h-5  text-emerald-500 mr-2" />
                  <span className="text-emerald-700" style={{fontFamily: 'Lora, serif'}}>{books[currentBook].year}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Book className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-emerald-700" style={{fontFamily: 'Montserrat, sans-serif'}}>{books[currentBook].genre}</span>
                </div>
                <div className="flex items-center">
                  <Book className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-emerald-700" style={{fontFamily: 'Open Sans, sans-serif'}}>{books[currentBook].pages} Seiten</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800" style={{fontFamily: 'Libre Baskerville, serif'}}>
                  Zusammenfassung
                </h3>
                <p className="text-emerald-700 leading-relaxed" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>
                  {books[currentBook].synopsis}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800" style={{fontFamily: 'Libre Baskerville, serif'}}>
                  Auszeichnungen
                </h3>
                <ul className="list-disc list-inside text-emerald-700" style={{fontFamily: 'Nunito, sans-serif'}}>
                  {books[currentBook].awards.map((award, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <Award className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800" style={{fontFamily: 'Libre Baskerville, serif'}}>
                  Galerie
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {books[currentBook].images.map((image, index) => (
                    <div key={index} className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-md">
                      <img src={image} alt={`Bild ${index + 1} zu ${books[currentBook].title}`} className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800" style={{fontFamily: 'Libre Baskerville, serif'}}>
                  Buchvorschau
                </h3>
                {showVideo ? (
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <video controls className="w-full h-full object-cover">
                      <source src={books[currentBook].video} type="video/mp4" />
                      Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowVideo(true)} 
                    className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                    style={{fontFamily: 'Poppins, sans-serif'}}
                  >
                    <Video className="mr-2" size={24} />
                    Vorschau ansehen
                  </button>
                )}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-2xl font-bold text-emerald-800" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {books[currentBook].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </span>
                <div className="flex items-center border border-emerald-300 rounded-full">
                  <button 
                    onClick={decrementQuantity}
                    className="p-2 text-emerald-600 hover:text-emerald-800 transition-colors"
                    aria-label="Menge verringern"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-4 py-2 text-emerald-800 font-semibold" style={{fontFamily: 'Roboto, sans-serif'}}>
                    {quantity}
                  </span>
                  <button 
                    onClick={incrementQuantity}
                    className="p-2 text-emerald-600 hover:text-emerald-800 transition-colors"
                    aria-label="Menge erhöhen"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              <button 
                onClick={addToCart}
                className="flex-grow sm:flex-grow-0 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                style={{fontFamily: 'Raleway, sans-serif'}}
              >
                <span>In den Warenkorb</span>
                <ShoppingCart className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
          <span className="mr-2" style={{fontFamily: 'Roboto, sans-serif'}}>Zum Warenkorb hinzugefügt!</span>
          <button onClick={() => setShowToast(false)} className="text-white" aria-label="Benachrichtigung schließen">
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  )
}

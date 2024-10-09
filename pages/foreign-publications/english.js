
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

const Bookmark = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
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

const Heart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
)

const books = [
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure Fiction",
    awards: ["One of the Great American Novels"],
    synopsis: "The saga of Captain Ahab and his monomaniacal pursuit of the white whale Moby Dick, told through the eyes of sailor Ishmael.",
    cover: "/images/md-01.png?height=400&width=300&text=Moby-Dick",
    rating: 4.4,
    pages: 720,
    price: 12.99,
    images: [
      "/images/md-02.jpg?height=200&width=300&text=Whaling+Ship",
      "/images/md-03.jpeg?height=200&width=300&text=White+Whale",
    ],
    video: "/video/md-01.mp4"
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Gothic Romance",
    awards: ["Penguin Classics' Top 100 Books"],
    synopsis: "The story of orphan Jane Eyre and her journey from a difficult childhood to finding love with the enigmatic Mr. Rochester.",
    cover: "/images/e-b01.png/?height=400&width=300&text=Jane+Eyre",
    rating: 4.7,
    pages: 532,
    price: 10.99,
    images: [
      "/images/e-b02.png?height=200&width=300&text=Thornfield+Hall",
      "/images/e-b03.png?height=200&width=300&text=Victorian+Era",
    ],
    video: "/video/e-b01.mp4"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Coming-of-age Fiction",
    awards: ["Modern Library's 100 Best Novels"],
    synopsis: "Holden Caulfield's experiences in New York City after being expelled from his prep school, exploring themes of teenage angst and alienation.",
    cover: "/images/e-c01.png?height=400&width=300&text=The+Catcher+in+the+Rye",
    rating: 4.3,
    pages: 234,
    price: 9.99,
    images: [
      "/images/e-c02.png?height=200&width=300&text=New+York+City",
      "/images/e-c03.png?height=200&width=300&text=Central+Park",
    ],
    video: "/video/e-c01.mp4"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    genre: "Dystopian Fiction",
    awards: ["BBC's 100 most influential novels"],
    synopsis: "Set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy.",
    cover: "/images/e-d01.jpg?height=400&width=300&text=Brave+New+World",
    rating: 4.5,
    pages: 311,
    price: 11.99,
    images: [
      "/images/e-d02a.png?height=200&width=300&text=Futuristic+City",
      "/images/e-d03.jpg?height=200&width=300&text=Laboratory",
    ],
    video: "/video/e-d01.mp4"
  }
]

export default function EnhancedBlueGradientEnglishBooksPage() {
  const [currentBook, setCurrentBook] = useState(0)
  const [favorites, setFavorites] = useState([])
  const [showVideo, setShowVideo] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)

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
    const newItem = {
      ...books[currentBook],
      quantity: quantity,
      total: books[currentBook].price * quantity
    }
    setCart(prevCart => [...prevCart, newItem])
    setShowToast(true)
    setQuantity(1)
  }

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.total, 0).toFixed(2)
  }

  const checkout = () => {
    alert(`Checkout completed! Total: $${getTotalPrice()}`)
    setCart([])
    setShowCart(false)
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={books[currentBook].cover} 
                alt={`Cover of ${books[currentBook].title}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-2xl font-bold mb-1 text-white" style={{fontFamily: 'Playfair Display, serif'}}>
                  {books[currentBook].title}
                </h2>
                <p className="text-lg text-blue-200" style={{fontFamily: 'Merriweather, serif'}}>
                  {books[currentBook].author}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button onClick={prevBook} className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Previous book">
                <ChevronLeft size={28} />
              </button>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                  <span  className="text-blue-800 font-semibold" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {books[currentBook].rating.toFixed(1)}
                  </span>
                </div>
                <button 
                  onClick={toggleFavorite} 
                  className={`text-blue-600 hover:text-blue-800 transition-colors ${favorites.includes(currentBook) ? 'text-red-500 hover:text-red-600' : ''}`}
                  aria-label={favorites.includes(currentBook) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Bookmark size={24} fill={favorites.includes(currentBook) ? "currentColor" : "none"} />
                </button>
              </div>
              <button onClick={nextBook} className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Next book">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-blue-700" style={{fontFamily: 'Lora, serif'}}>{books[currentBook].year}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Bookmark className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-blue-700" style={{fontFamily: 'Montserrat, sans-serif'}}>{books[currentBook].genre}</span>
                </div>
                <div className="flex items-center">
                  <Book className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-blue-700" style={{fontFamily: 'Ubuntu, sans-serif'}}>{books[currentBook].pages} pages</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800" style={{fontFamily: 'Roboto Slab, serif'}}>
                  Synopsis
                </h3>
                <p className="text-blue-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  {books[currentBook].synopsis}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800" style={{fontFamily: 'Roboto Slab, serif'}}>
                  Recognition
                </h3>
                <ul className="list-disc list-inside text-blue-700" style={{fontFamily: 'Libre Baskerville, serif'}}>
                  {books[currentBook].awards.map((award, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <Award className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800" style={{fontFamily: 'Roboto Slab, serif'}}>
                  Gallery
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {books[currentBook].images.map((image, index) => (
                    <div key={index} className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-md">
                      <img src={image} alt={`Image ${index + 1} related to ${books[currentBook].title}`} className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800" style={{fontFamily: 'Roboto Slab, serif'}}>
                  Book Preview
                </h3>
                {showVideo ? (
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <video controls className="w-full h-full object-cover">
                      <source src={books[currentBook].video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowVideo(true)} 
                    className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Video className="mr-2" size={24} />
                    Watch Book Preview
                  </button>
                )}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-2xl font-bold text-blue-800" style={{fontFamily: 'Poppins, sans-serif'}}>
                  ${books[currentBook].price.toFixed(2)}
                </span>
                <div className="flex items-center border border-blue-300 rounded-full">
                  <button 
                    onClick={decrementQuantity}
                    className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-4 py-2 text-blue-800 font-semibold" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {quantity}
                  </span>
                  <button 
                    onClick={incrementQuantity}
                    className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              <button 
                onClick={addToCart}
                className="flex-grow sm:flex-grow-0 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <span style={{fontFamily: 'Ubuntu, sans-serif'}}>Add to Cart</span>
                <ShoppingCart className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Add a cart icon to open the cart modal */}
        <button 
          onClick={() => setShowCart(true)}
          className="fixed top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>

        {/* Add a favorites icon to open the favorites modal */}
        <button 
          onClick={() => setShowFavorites(true)}
          className="fixed top-16 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg"
        >
          <Heart size={24} />
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </button>

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-4 border-b pb-2">
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.total.toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-red-500">
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                  <div className="mt-4">
                    <p className="font-bold">Total: ${getTotalPrice()}</p>
                    <button 
                      onClick={checkout}
                      className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
              <button 
                onClick={() => setShowCart(false)}
                className="mt-4 w-full bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Favorites Modal */}
        {showFavorites && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
              {favorites.length === 0 ? (
                <p>You haven't added any favorites yet.</p>
              ) : (
                <div className="grid gap-4">
                  {favorites.map((bookIndex) => (
                    <div key={bookIndex} className="flex items-center space-x-4 border-b pb-4">
                      <img 
                        src={books[bookIndex].cover} 
                        alt={`Cover of ${books[bookIndex].title}`}
                        className="w-16 h-24 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{books[bookIndex].title}</h3>
                        <p className="text-sm text-gray-600">{books[bookIndex].author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button 
                onClick={() => setShowFavorites(false)}
                className="mt-4 w-full bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
            <span className="mr-2">Added to cart!</span>
            <button onClick={() => setShowToast(false)} className="text-white" aria-label="Close notification">
              <X size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}


import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star, Heart, Calendar, Book, Award, Video, Plus, Minus, ShoppingCart, X, Trash2, Home } from 'lucide-react'

const books = [
  {
    title: "雪国",
    author: "川端康成",
    year: 1935,
    genre: "文学小説",
    awards: ["ノーベル文学賞"],
    synopsis: "豪雪地帯を舞台に、都会から来た男と温泉町の芸者との儚い恋を描いた名作。",
    cover: "/images/sgb-02.png?height=400&width=300&text=雪国",
    rating: 4.5,
    pages: 175,
    price: 1200,
    images: [
      "/images/sg-01.png?height=200&width=300&text=雪景色",
      "/images/sg-02.png?height=200&width=300&text=温泉旅館",
    ],
    video: "/video/sg-04.mp4"
  },
  {
    title: "こころ",
    author: "夏目漱石",
    year: 1914,
    genre: "心理小説",
    awards: ["文化勲章"],
    synopsis: "明治から大正への変わり目を背景に、「私」「先生」「Ｋ」の三者の心の動きを鋭く描写した傑作。",
    cover: "/images/j-01.jpg?height=400&width=300&text=こころ",
    rating: 4.7,
    pages: 248,
    price: 880,
    images: [
      "/images/j-02.png?height=200&width=300&text=東京の街並み",
      "/images/j-03.png?height=200&width=300&text=書斎",
    ],
    video: "/video/j-01.mp4"
  },
  {
    title: "人間失格",
    author: "太宰治",
    year: 1948,
    genre: "自伝的小説",
    awards: ["芥川賞"],
    synopsis: "「人間失格」を自称する主人公の、幼年期から青年期にかけての苦悩と破滅の過程を描いた作品。",
    cover: "/placeholder.svg?height=400&width=300&text=人間失格",
    rating: 4.6,
    pages: 212,
    price: 760,
    images: [
      "/placeholder.svg?height=200&width=300&text=青森の風景",
      "/placeholder.svg?height=200&width=300&text=昭和初期の東京",
    ],
    video: "/placeholder.mp4"
  },
  {
    title: "風の歌を聴け",
    author: "村上春樹",
    year: 1979,
    genre: "現代小説",
    awards: ["群像新人文学賞"],
    synopsis: "1970年代の日本を舞台に、大学生の「僕」の夏休みの出来事を通して、喪失感や孤独を描いた村上春樹のデビュー作。",
    cover: "/placeholder.svg?height=400&width=300&text=風の歌を聴け",
    rating: 4.3,
    pages: 168,
    price: 649,
    images: [
      "/placeholder.svg?height=200&width=300&text=1970年代の日本",
      "/placeholder.svg?height=200&width=300&text=レコード店",
    ],
    video: "/placeholder.mp4"
  }
]

export default function JapaneseGradientBooksPage() {
  const [currentBook, setCurrentBook] = useState(0)
  const [favorites, setFavorites] = useState([])
  const [showVideo, setShowVideo] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)
  const [cart, setCart] = useState([])
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
    const bookToAdd = {
      ...books[currentBook],
      quantity: quantity
    }
    setCart(prev => [...prev, bookToAdd])
    setShowToast(true)
    setQuantity(1)
  }

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index))
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

  const toggleFavorites = () => setShowFavorites(prev => !prev)

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.price || 0
      return total + itemPrice * item.quantity
    }, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-indigo-300 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={books[currentBook].cover} 
                alt={`Cover of ${books[currentBook].title}`} 
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-3xl font-bold mb-1 text-white" style={{fontFamily: '"Noto Serif JP", serif'}}>
                  {books[currentBook].title}
                </h2>
                <p className="text-xl text-pink-200" style={{fontFamily: '"M PLUS Rounded 1c", sans-serif'}}>
                  {books[currentBook].author}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button onClick={prevBook} className="text-indigo-600 hover:text-indigo-800 transition-colors" aria-label="Previous book">
                <ChevronLeft size={28} />
              </button>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="text-indigo-800 font-semibold" style={{fontFamily: '"Kosugi Maru", sans-serif'}}>
                    {books[currentBook].rating.toFixed(1)}
                  </span>
                </div>
                <button 
                  onClick={toggleFavorite} 
                  className={`text-indigo-600 hover:text-indigo-800 transition-colors ${favorites.includes(currentBook) ? 'text-red-500 hover:text-red-600' : ''}`}
                  aria-label={favorites.includes(currentBook) ? "お気に入りから削除" : "お気に入りに追加"}
                >
                  <Heart size={24} fill={favorites.includes(currentBook) ? "currentColor" : "none"} />
                </button>
              </div>
              <button onClick={nextBook} className="text-indigo-600 hover:text-indigo-800 transition-colors" aria-label="Next book">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Calendar className="w-5 h-5 text-indigo-500 mr-2" />
                  <span className="text-indigo-700" style={{fontFamily: '"Sawarabi Mincho", serif'}}>{books[currentBook].year}年</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Book className="w-5 h-5 text-indigo-500 mr-2" />
                  <span className="text-indigo-700" style={{fontFamily: '"Sawarabi Gothic", sans-serif'}}>{books[currentBook].genre}</span>
                </div>
                <div className="flex items-center">
                  <Book className="w-5 h-5 text-indigo-500 mr-2" />
                  <span className="text-indigo-700" style={{fontFamily: '"Kosugi", sans-serif'}}>{books[currentBook].pages}ページ</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-800" style={{fontFamily: '"Shippori Mincho", serif'}}>
                  あらすじ
                </h3>
                <p className="text-indigo-700 leading-relaxed" style={{fontFamily: '"Noto Sans JP", sans-serif'}}>
                  {books[currentBook].synopsis}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-800" style={{fontFamily: '"Shippori Mincho", serif'}}>
                  受賞歴
                </h3>
                <ul className="list-disc list-inside text-indigo-700" style={{fontFamily: '"Zen Kaku Gothic New", sans-serif'}}>
                  {books[currentBook].awards.map((award, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <Award className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-800" style={{fontFamily: '"Shippori Mincho", serif'}}>
                  ギャラリー
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {books[currentBook].images.map((image, index) => (
                    <div key={index} className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-md">
                      <Image src={image} alt={`Image ${index + 1} related to ${books[currentBook].title}`} layout="fill" objectFit="cover" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-800" style={{fontFamily: '"Shippori Mincho", serif'}}>
                  ブック・プレビュー
                </h3>
                {showVideo ? (
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <video controls className="w-full h-full object-cover">
                      <source src={books[currentBook].video} type="video/mp4" />
                      お使いのブラウザは動画タグをサポートしていません。
                    </video>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowVideo(true)} 
                    className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                    style={{fontFamily: '"M PLUS 1p", sans-serif'}}
                  >
                    <Video className="mr-2" size={24} />
                    プレビューを見る
                  </button>
                )}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-2xl font-bold text-indigo-800" style={{fontFamily: '"Zen Maru Gothic", sans-serif'}}>
                  ¥{books[currentBook].price.toLocaleString()}
                </span>
                <div className="flex items-center border border-indigo-300 rounded-full">
                  <button 
                    onClick={decrementQuantity}
                    className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                    aria-label="数量を減らす"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-4 py-2 text-indigo-800 font-semibold" style={{fontFamily: '"Zen Kaku Gothic New", sans-serif'}}>
                    {quantity}
                  </span>
                  <button 
                    onClick={incrementQuantity}
                    className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                    aria-label="数量を増やす"
                  >
                    <Plus size={20}   />
                  </button>
                </div>
              </div>
              <button 
                onClick={addToCart}
                className="flex-grow sm:flex-grow-0 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                style={{fontFamily: '"M PLUS 1p", sans-serif'}}
              >
                <span>カートに追加</span>
                <ShoppingCart className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Cart and Favorites buttons */}
        <div className="flex justify-between p-4 bg-indigo-100">
          <button 
            onClick={() => setShowFavorites(false)}
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors"
          >
            カートを表示 ({cart.length})
          </button>
          <button 
            onClick={toggleFavorites}
            className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
          >
            {showFavorites ? 'お気に入りを隠す' : 'お気に入りを表示'} ({favorites.length})
          </button>
        </div>
        
        {/* Cart or Favorites display */}
        {(cart.length > 0 || favorites.length > 0) && (
          <div className="p-4 bg-white">
            <h2 className="text-2xl font-bold mb-4" style={{fontFamily: '"Noto Serif JP", serif'}}>
              {showFavorites ? 'お気に入り' : 'カート'}
            </h2>
            {showFavorites ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {favorites.map((bookIndex) => (
                  <div key={bookIndex} className="border p-4 rounded-lg">
                    <Image src={books[bookIndex].cover} alt={books[bookIndex].title} width={150} height={200} className="object-cover mb-2 rounded" />
                    <h3 className="font-semibold">{books[bookIndex].title}</h3>
                    <p>{books[bookIndex].author}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b py-2">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p>数量: {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-4">¥{((item.price || 0) * item.quantity).toLocaleString()}</p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label={`${item.title}をカートから削除`}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-4 text-right">
                  <p className="text-xl font-bold">合計: ¥{getTotalPrice().toLocaleString()}</p>
                  <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                    注文する
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Updated Home button */}
        <div className="p-4 bg-indigo-100 flex justify-center">
          <Link 
            href="/"
            className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors flex items-center justify-center"
          >
            <Home className="mr-2" size={20} />
            <span style={{fontFamily: '"Noto Sans JP", sans-serif'}}>ホームに戻る</span>
          </Link>
        </div>
      </div>
      
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
          <span className="mr-2" style={{fontFamily: '"Noto Sans JP", sans-serif'}}>カートに追加しました！</span>
          <button onClick={() => setShowToast(false)} className="text-white" aria-label="通知を閉じる">
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  )
}


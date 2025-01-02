import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import { useState } from 'react'

// Mock data for images
const images = [
  {
    id: 1,
    src: "/gallery/image1.jpg",
    alt: "Nature Photography",
    category: "Nature"
  },
  // Add more images as needed
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <Head>
        <title>Gallery | My Personal Blog</title>
        <meta name="description" content="View my photography collection" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-gray-400">A collection of my photography work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </>
  )
}

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import { Play, Clock } from 'lucide-react'
import Link from 'next/link'

// Mock video data
const videos = [
  {
    id: 1,
    title: "Building a Modern Blog with Next.js",
    description: "Learn how to create a beautiful blog using Next.js and Framer Motion",
    thumbnail: "/videos/blog-thumbnail.jpg",
    duration: "15:30",
    date: "2024-01-20",
    category: "Tutorial"
  },
  {
    id: 2,
    title: "Advanced Animation Techniques",
    description: "Master Framer Motion animations in your React applications",
    thumbnail: "/videos/animation-thumbnail.jpg",
    duration: "12:45",
    date: "2024-01-15",
    category: "Tutorial"
  },
  // Add more videos as needed
]

export default function Videos() {
  return (
    <>
      <Head>
        <title>Videos | HFB's Blog</title>
        <meta name="description" content="Watch my latest video tutorials and content" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
            <p className="text-xl text-white/60">Watch my latest tutorials and content</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Link key={video.id} href={`/videos/${video.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-zinc-900/50 rounded-lg overflow-hidden border border-white/5"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
                          group-hover:bg-white/20 transition-colors duration-300"
                      >
                        <Play className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm
                      text-sm text-white/80 flex items-center space-x-1"
                    >
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="text-sm text-white/60 mb-2">{video.category}</div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white/90 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {video.description}
                    </p>
                    <div className="mt-4 text-sm text-white/40">
                      {video.date}
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

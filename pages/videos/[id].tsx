import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

// Mock video data
const videos = {
  '1': {
    title: "Building a Modern Blog with Next.js",
    description: "Learn how to create a beautiful blog using Next.js and Framer Motion",
    content: `
# Building a Modern Blog with Next.js

In this video tutorial, we'll walk through the process of creating a modern blog using Next.js...
    `,
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    thumbnail: "/videos/blog-thumbnail.jpg",
    duration: "15:30",
    date: "2024-01-20",
    category: "Tutorial",
    author: "HFB"
  },
  '2': {
    title: "Advanced Animation Techniques",
    description: "Master Framer Motion animations in your React applications",
    content: `
# Advanced Animation Techniques

Learn how to create stunning animations using Framer Motion...
    `,
    videoUrl: "https://www.youtube.com/embed/your-video-id-2",
    thumbnail: "/videos/animation-thumbnail.jpg",
    duration: "12:45",
    date: "2024-01-15",
    category: "Tutorial",
    author: "HFB"
  }
}

export default function VideoPage() {
  const router = useRouter()
  const { id } = router.query
  const video = videos[id as keyof typeof videos]

  if (!video) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-black text-white pt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold">Video not found</h1>
            <Link href="/videos" className="text-white/60 hover:text-white mt-4 inline-block">
              ← Back to Videos
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{video.title} | HFB's Blog</title>
        <meta name="description" content={video.description} />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/videos"
            className="inline-flex items-center text-white/60 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Videos
          </Link>

          {/* Video Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{video.title}</h1>
            <p className="text-xl text-white/60 mb-8">{video.description}</p>

            {/* Video Metadata */}
            <div className="flex flex-wrap gap-4 text-white/60 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {video.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {video.duration}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {video.category}
              </div>
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-12"
          >
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allowFullScreen
            />
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: video.content }}
          />

          {/* Video Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/60">Created by {video.author}</p>
          </motion.div>
        </article>
      </main>
    </>
  )
}

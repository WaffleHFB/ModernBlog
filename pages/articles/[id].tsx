import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

// Mock article data
const articles = {
  '1': {
    title: "Building a Modern Blog with Next.js",
    description: "Learn how to create a beautiful, performant blog using Next.js, Tailwind CSS, and Framer Motion. We'll cover everything from setup to deployment.",
    content: `
# Building a Modern Blog with Next.js

In this comprehensive guide, we'll walk through the process of creating a modern blog using Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

First, let's set up our Next.js project with TypeScript and Tailwind CSS...
    `,
    date: "2024-01-20",
    readTime: "5 min read",
    category: "Web Development",
    author: "HFB"
  },
  '2': {
    title: "Advanced Animation Techniques",
    description: "Dive deep into creating smooth, engaging animations using Framer Motion. Learn about gestures, transitions, and advanced animation patterns.",
    content: `
# Advanced Animation Techniques

Learn how to create stunning animations using Framer Motion in your React applications.

## Understanding Animation Fundamentals

Let's start by understanding the core concepts of animation...
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Animation",
    author: "HFB"
  },
  '3': {
    title: "Test",
    description: "Dive deep into creating smooth, engaging animations using Framer Motion. Learn about gestures, transitions, and advanced animation patterns.",
    content: `
# Advanced Animation Techniques

Learn how to create stunning animations using Framer Motion in your React applications.

## Understanding Animation Fundamentals

Let's start by understanding the core concepts of animation...
    `,
    date: "2024-12-27",
    readTime: "3 min read",
    category: "Study",
    author: "HFB"
  }
}

export default function ArticlePage() {
  const router = useRouter()
  const { id } = router.query
  const article = articles[id as keyof typeof articles]

  if (!article) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-black text-white pt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold">Article not found</h1>
            <Link href="/articles" className="text-white/60 hover:text-white mt-4 inline-block">
              ← Back to Articles
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{article.title} | HFB's Blog</title>
        <meta name="description" content={article.description} />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/articles"
            className="inline-flex items-center text-white/60 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <p className="text-xl text-white/60 mb-8">{article.description}</p>

            {/* Article Metadata */}
            <div className="flex flex-wrap gap-4 text-white/60 mb-12">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {article.category}
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/60">Written by {article.author}</p>
          </motion.div>
        </article>
      </main>
    </>
  )
}

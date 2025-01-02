import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import ContentCard from '@/components/ContentCard'
import { Search } from 'lucide-react'
import { useState } from 'react'

// Mock data for articles
const articles = [
  {
    id: 1,
    title: "Building a Modern Blog with Next.js",
    description: "Learn how to create a beautiful, performant blog using Next.js, Tailwind CSS, and Framer Motion. We'll cover everything from setup to deployment.",
    date: "2024-01-20",
    readTime: "5 min read",
    category: "Web Development",
    link: "1"
  },
  {
    id: 2,
    title: "Advanced Animation Techniques",
    description: "Dive deep into creating smooth, engaging animations using Framer Motion. Learn about gestures, transitions, and advanced animation patterns.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Animation",
    link: "2"
  },
  {
    id: 3,
    title: "Test",
    description: "Dive deep into creating smooth, engaging animations using Framer Motion. Learn about gestures, transitions, and advanced animation patterns.",
    date: "2024-12-27",
    readTime: "3 min read",
    category: "Study",
    link: "3"
  },
  // Add more articles as needed
]

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Web Development', 'Animation', 'Design', 'Tutorial', 'Study']

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Layout title="Articles | HFB's Blog" description="Read my latest articles and thoughts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Latest Articles
          </h1>
          <p className="text-lg md:text-xl text-white/60">
            Explore my thoughts and tutorials on web development, design, and technology
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/10 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-white/10 text-white'
                    : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredArticles.map((article, index) => (
            <ContentCard
              key={article.id}
              type="article"
              title={article.title}
              description={article.description}
              date={article.date}
              readTime={article.readTime}
              category={article.category}
              link={article.link}
              index={index}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

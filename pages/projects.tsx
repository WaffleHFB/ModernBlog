import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import ContentCard from '@/components/ContentCard'
import { Search } from 'lucide-react'
import { useState } from 'react'

// Mock data for projects
const projects = [
  {
    id: 1,
    title: "Personal Blog",
    description: "A modern blog built with Next.js, featuring dark mode, animations, and a clean design.",
    category: "Web Development",
    image: "/projects/blog.jpg",
    link: "1",
    github: "https://github.com/yourusername/blog",
    demo: "https://your-blog-demo.com",
    downloadLink: "https://github.com/yourusername/blog/archive/main.zip"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A showcase of my work and skills, built with React and Three.js for 3D effects.",
    category: "Web Development",
    image: "/projects/portfolio.jpg",
    link: "2",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-demo.com",
    downloadLink: "https://github.com/yourusername/portfolio/archive/main.zip"
  },
  // Add more projects as needed
]

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Web Development', 'Mobile', 'Design', 'Open Source']

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Layout title="Projects | HFB's Blog" description="Explore my latest projects and experiments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-white/60">
            Check out my latest projects and experiments in web development and design
          </p>
        </motion.div>

        {/* 搜索和过滤部分 */}
        <div className="mb-8 space-y-4">
          {/* 搜索框 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/10 transition-colors"
            />
          </div>

          {/* 分类过滤 */}
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

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredProjects.map((project, index) => (
            <ContentCard
              key={project.id}
              type="project"
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
              downloadLink={project.downloadLink}
              index={index}
            />
          ))}
        </div>

        {/* 无结果提示 */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

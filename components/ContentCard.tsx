import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download } from 'lucide-react'

interface ContentCardProps {
  type: 'article' | 'project'
  title: string
  description: string
  date?: string
  readTime?: string
  category: string
  image?: string
  link: string
  downloadLink?: string
  index: number
}

const ContentCard = ({
  type,
  title,
  description,
  date,
  readTime,
  category,
  image,
  link,
  downloadLink,
  index
}: ContentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className="group relative"
    >
      <Link
        href={type === 'article' ? `/articles/${link}` : `/projects/${link}`}
        className="block"
      >
        <article className="relative bg-zinc-900/50 rounded-lg overflow-hidden border border-white/5 transition-all duration-300 hover:border-white/10 hover:-translate-y-1">
          {/* Hover Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Image (for projects) */}
          {image && (
            <div className="aspect-video relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white/60">{category}</span>
              {date && <span className="text-sm text-white/60">{date}</span>}
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-white/90 transition-colors">
              {title}
            </h3>

            <p className="text-white/60 mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex items-center justify-between">
              <div className="inline-flex items-center text-white/80 group-hover:text-white transition-colors">
                {type === 'article' ? 'Read More' : 'View Project'}
                <motion.span
                  className="inline-block ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </div>

              {type === 'project' && downloadLink && (
                <a
                  href={downloadLink}
                  className="inline-flex items-center text-white/60 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default ContentCard

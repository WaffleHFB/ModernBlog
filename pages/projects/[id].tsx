import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArrowLeft, Calendar, Github, Globe, Download, Tag } from 'lucide-react'
import Link from 'next/link'

// Mock project data
const projects = {
  '1': {
    title: "Personal Blog",
    description: "A modern blog built with Next.js, featuring dark mode, animations, and a clean design.",
    content: `
# Personal Blog

A modern, minimalist blog platform built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Dark mode
- Smooth animations
- Responsive design
- SEO optimized
- Clean, modern UI
    `,
    date: "2024-01-20",
    category: "Web Development",
    image: "/projects/blog.jpg",
    github: "https://github.com/yourusername/blog",
    demo: "https://your-blog-demo.com",
    downloadLink: "https://github.com/yourusername/blog/archive/main.zip",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  '2': {
    title: "Portfolio Website",
    description: "A showcase of my work and skills, built with React and Three.js for 3D effects.",
    content: `
# Portfolio Website

A modern portfolio website showcasing my work and skills.

## Features

- 3D animations
- Interactive UI
- Project showcase
- Contact form
    `,
    date: "2024-01-15",
    category: "Web Development",
    image: "/projects/portfolio.jpg",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-demo.com",
    downloadLink: "https://github.com/yourusername/portfolio/archive/main.zip",
    techStack: ["React", "Three.js", "GSAP", "Styled Components"]
  }
}

export default function ProjectPage() {
  const router = useRouter()
  const { id } = router.query
  const project = projects[id as keyof typeof projects]

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-black text-white pt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold">Project not found</h1>
            <Link href="/projects" className="text-white/60 hover:text-white mt-4 inline-block">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} | HFB's Blog</title>
        <meta name="description" content={project.description} />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center text-white/60 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-white/60 mb-8">{project.description}</p>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-900 text-white/80 hover:text-white
                    hover:bg-zinc-800 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-900 text-white/80 hover:text-white
                    hover:bg-zinc-800 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
              {project.downloadLink && (
                <a
                  href={project.downloadLink}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-900 text-white/80 hover:text-white
                    hover:bg-zinc-800 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              )}
            </div>

            {/* Project Metadata */}
            <div className="flex flex-wrap gap-4 text-white/60 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {project.date}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {project.category}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          )}

          {/* Project Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </article>
      </main>
    </>
  )
}

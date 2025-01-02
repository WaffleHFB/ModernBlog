import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import SkillCard from '@/components/SkillCard'
import { Code2, Cpu, Globe, Palette, Terminal, Coffee, Github, Twitter, Mail, Linkedin } from 'lucide-react'

export default function About() {
  const skills = [
    {
      icon: <Code2 />,
      title: "Web Development",
      level: 90,
      description: "Proficient in React, Next.js, and modern web technologies"
    },
    {
      icon: <Terminal />,
      title: "Backend Development",
      level: 85,
      description: "Experienced with Node.js, Python, and database systems"
    },
    {
      icon: <Palette />,
      title: "UI/UX Design",
      level: 80,
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: <Globe />,
      title: "DevOps",
      level: 75,
      description: "Familiar with CI/CD, Docker, and cloud platforms"
    },
    {
      icon: <Cpu />,
      title: "Machine Learning",
      level: 70,
      description: "Working with TensorFlow and PyTorch"
    },
    {
      icon: <Coffee />,
      title: "Problem Solving",
      level: 95,
      description: "Strong analytical and debugging skills"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <Head>
        <title>About Me | HFB's Blog</title>
        <meta name="description" content="Learn more about me and my journey" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* 背景装饰 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* 主要内容 */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I'm HFB
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  A passionate developer who loves creating beautiful and functional web experiences.
                </motion.p>

                {/* 社交媒体链接 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center space-x-6"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                      <span className="sr-only">{link.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* 技能部分 */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
              >
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </motion.div>

              {/* 时间线部分 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                  {[
                    {
                      year: "2024",
                      title: "Current Focus",
                      description: "Working on exciting web projects and exploring new technologies"
                    },
                    {
                      year: "2023",
                      title: "Started Blog",
                      description: "Created this blog to share my knowledge and experiences"
                    },
                    // Add more timeline items as needed
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className={`relative flex items-center mb-12 ${
                        index % 2 === 0 ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`w-1/2 ${
                          index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                        }`}
                      >
                        <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
                          <span className="text-white/80 font-bold">{item.year}</span>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/20 rounded-full border-2 border-white/10" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/videos', label: 'Videos' },
  { href: '/about', label: 'About' }
]

const navVariants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      mass: 1,
      duration: 0.3
    }
  }
}

const linkVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

export default function Navigation() {
  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto bg-zinc-900/80 backdrop-blur-md rounded-lg px-6 border border-white/5"
      >
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="text-white font-bold text-xl">
              HFB's Blog
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {links.map(({ href, label }, index) => {
              const isActive = router.pathname === href
              return (
                <motion.div
                  key={href}
                  variants={linkVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    href={href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-px -bottom-1 bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import AnimatedTitle from '@/components/AnimatedTitle'
import { useEffect, useState } from 'react'

const backgroundVariants = {
  initial: {
    backgroundPosition: '0% 50%'
  },
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }
  }
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      <Head>
        <title>Waffle's Blog</title>
        <meta name="description" content="Welcome to my personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      
      <main className="min-h-screen bg-black text-white">
        <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* 动态背景 */}
          <motion.div
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.03),transparent,rgba(255,255,255,0.03),transparent)] bg-[length:400%_400%]"
          />

          {/* 主要内容 */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedTitle />
          </div>

          {/* 装饰元素 */}
          <div className="absolute inset-0 pointer-events-none">
            {/* 左侧装饰 */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full"
              style={{
                background: 'linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0))',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: 360
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* 右侧装饰 */}
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full"
              style={{
                background: 'linear-gradient(-45deg, rgba(255,255,255,0.03), rgba(255,255,255,0))',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: -360
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* 移动端特定效果 */}
          {isMobile && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
              animate={{
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          )}
        </div>
      </main>
    </>
  )
}

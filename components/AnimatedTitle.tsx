import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedTitle = () => {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  const glowVariants = {
    initial: {
      filter: 'blur(0px) brightness(1)',
      textShadow: '0 0 0px rgba(255,255,255,0)'
    },
    animate: {
      filter: [
        'blur(0px) brightness(1)',
        'blur(4px) brightness(1.2)',
        'blur(0px) brightness(1)'
      ],
      textShadow: [
        '0 0 0px rgba(255,255,255,0)',
        '0 0 20px rgba(255,255,255,0.8)',
        '0 0 0px rgba(255,255,255,0)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    hover: {
      scale: 1.1,
      filter: 'blur(2px) brightness(1.3)',
      textShadow: '0 0 30px rgba(255,255,255,0.8)',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const containerVariants = {
    initial: { 
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    },
    animate: {
      rotateX: [0, 10, 0, -10, 0],
      rotateY: [0, -10, 0, 10, 0],
      rotateZ: [0, 5, 0, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  }

  const letterVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.1
      }
    })
  }

  const text = "WELCOME TO HFB'S BLOG"
  const letters = Array.from(text)

  useEffect(() => {
    controls.start("animate")
  }, [controls])

  return (
    <div className="relative perspective-[1000px]">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative"
      >
        <div className="flex justify-center space-x-2 mb-4">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className={`text-6xl md:text-8xl font-bold inline-block
                ${letter === " " ? "w-8" : ""}`}
              style={{
                textShadow: '0 0 10px rgba(255,255,255,0.3)',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="text-center text-2xl md:text-4xl font-light tracking-wider mt-8
            bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-white"
        >
          Thx To My Readers.
        </motion.div>

        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-purple-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </div>
  )
}

export default AnimatedTitle

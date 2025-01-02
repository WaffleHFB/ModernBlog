import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SkillCardProps {
  icon: ReactNode
  title: string
  level: number
  description: string
}

const SkillCard = ({ icon, title, level, description }: SkillCardProps) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-500/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg border border-white/10">
        <div className="flex items-start space-x-4">
          <div className="text-emerald-400 text-2xl">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="w-full h-2 bg-zinc-800 rounded-full mb-3">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCard

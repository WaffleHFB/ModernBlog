export interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
}

export interface Project {
  id: number
  title: string
  description: string
  content: string
  technologies: string[]
  image: string
  github?: string
  demo?: string
  download?: string
}

export interface Image {
  id: number
  src: string
  alt: string
  category: string
}

export interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  duration: string
  category: string
}

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany()
    return res.json(posts)
  }

  if (req.method === 'POST') {
    const { title, content } = req.body
    const post = await prisma.post.create({
      data: { title, content }
    })
    return res.status(201).json(post)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
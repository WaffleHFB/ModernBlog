import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    const post = await prisma.post.findUnique({ where: { id: String(id) } })
    return res.json(post)
  }

  if (req.method === 'PUT') {
    const { title, content } = req.body
    const post = await prisma.post.update({
      where: { id: String(id) },
      data: { title, content }
    })
    return res.json(post)
  }

  if (req.method === 'DELETE') {
    await prisma.post.delete({ where: { id: String(id) } })
    return res.status(204).end()
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
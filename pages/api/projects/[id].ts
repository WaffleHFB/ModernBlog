import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    const project = await prisma.project.findUnique({ where: { id: String(id) } })
    return res.json(project)
  }

  if (req.method === 'PUT') {
    const { title, description, imageUrl, link } = req.body
    const project = await prisma.project.update({
      where: { id: String(id) },
      data: { title, description, imageUrl, link }
    })
    return res.json(project)
  }

  if (req.method === 'DELETE') {
    await prisma.project.delete({ where: { id: String(id) } })
    return res.status(204).end()
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
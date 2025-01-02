import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const projects = await prisma.project.findMany()
    return res.json(projects)
  }

  if (req.method === 'POST') {
    const { title, description, imageUrl, link } = req.body
    const project = await prisma.project.create({
      data: { title, description, imageUrl, link }
    })
    return res.status(201).json(project)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
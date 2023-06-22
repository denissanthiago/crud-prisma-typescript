import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function main (): Promise<void> {
  const newUser = await prisma.user.create({
    data: {
      email: 'denis@gmail.com',
      name: 'denis'
    }
  })
  console.log('created new user :', newUser)
}

main()
  .catch((e) => { console.error(e) })
  .finally(() => {
    void (async () => {
      await prisma.$disconnect()
    })
  })

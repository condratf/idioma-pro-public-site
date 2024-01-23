import { FC } from 'react'
// local
import { BannerSection } from '@/components/shared'
import { NivelTest } from '@/components/NivelTest'
import { SuggestTest } from '@/components/home'
import { db } from '@/modules/db'

const Home: FC = async () => {
  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } })
 
  console.log({posts})

  return (
    <div>
      <BannerSection />

      <span className="h-1 w-full bg-red-600 lg:w-1/3" />
      <SuggestTest />
      <span className="h-1 w-full bg-red-600 lg:w-1/3" />

      <NivelTest />
    </div>
  )
}

export default Home
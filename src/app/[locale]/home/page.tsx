import { FC } from 'react'
// local
import { BannerSection } from '@/components/shared'
import { NivelTest } from '@/components/NivelTest'
import { SuggestTest } from '@/components/home'


const Home: FC = async () => {

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
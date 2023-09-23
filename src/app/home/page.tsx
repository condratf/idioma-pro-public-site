import { FC } from 'react'
// local
import { BannerSection } from '@/components/shared'
import { NivelTest } from '@/components/NivelTest'

const Home: FC = () => {
  return (
    <div>
      <BannerSection />

      <NivelTest />
    </div>
  )
}

export default Home
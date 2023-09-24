import { FC } from 'react'
// local
import { AboutSection } from '@/components/about'
// styles
import styles from './styles.module.scss'

const About: FC = () => {
  return (
    <div className={styles.container}>
      <AboutSection />
    </div>
  )
}

export default About
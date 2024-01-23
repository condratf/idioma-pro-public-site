import { FC } from 'react'
import Image from 'next/image'
// local
import { getAboutData } from './helpers'
// styles
import styles from './styles.module.scss'

export const AboutSection: FC = () => {
  const { title, text } = getAboutData()
  return (
    <div className={styles.container}>
      {/* <Image src={image} alt='profe' /> */}

      <h1>
        {title}
      </h1>

      <section>
        {text}
      </section>
    </div>
  )
}

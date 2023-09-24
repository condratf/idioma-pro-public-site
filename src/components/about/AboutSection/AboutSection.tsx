import { FC } from 'react'
import Image from 'next/image'
// styles
import styles from './styles.module.scss'
// assets
import profeImg from './assets/profe.png'

export const AboutSection: FC = () => {
  return (
    <div className={styles.container}>
      <Image src={profeImg} alt='profe' />

      <h1>Alejandra Lopez</h1>

      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Deleniti dolor,
        vitae excepturi inventore quibusdam eos quas cupiditate,
        tenetur assumenda iste ad exercitationem dolores repellat asperiores ipsam quod nam porro doloribus?
      </section>
    </div>
  )
}

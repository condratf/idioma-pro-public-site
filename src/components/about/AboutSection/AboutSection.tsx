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

      <h1>Alejandra López Fontaiña</h1>

      <section>
        ¡Bienvenidos y bienvenidas!
        Mi nombre es Alejandra y realizo asesoramiento lingüístico, correcciones de textos y también soy profesora de español como lengua extranjera.
        No dudes en contactarme.
      </section>
    </div>
  )
}

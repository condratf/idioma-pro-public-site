import { FC } from 'react'
import Image from 'next/image'
// styles
import styles from './styles.module.scss'
// assets
import mailImg from './assets/mail-icon.svg'
import mainImg from './assets/main.svg'
import cloud1img from './assets/cloud_1.svg'
import cloud2img from './assets/cloud_2.svg'
import cloud3img from './assets/cloud_3.svg'

export const BannerSection: FC = () => {
  return (
    <section className={styles.banner}>

      <h1>Lorem ipsum dolor sit amet</h1>
      
      <div className={styles.clouds}>
        <Image src={cloud1img} alt='cloud-1' className="z-10"/>
        <Image src={cloud2img} alt='cloud-2' className="z-10"/>
        <Image src={cloud3img} alt='cloud-3' className="z-10"/>
      </div>

      <Image src={mailImg} alt='mail' className="z-10"/>

      <Image src={mainImg} alt='main' className='absolute z-0' />

    </section>
  )
}

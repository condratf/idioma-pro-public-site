import { FC } from 'react'
// local
import { ContactForm } from '@/components/shared'
// styles
import styles from './styles.module.scss'

const Contacts: FC = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  )
}

export default Contacts
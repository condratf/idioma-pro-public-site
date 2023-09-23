import { FC } from 'react'
import {useTranslations} from 'next-intl';
// styles
import styles from './styles.module.scss'

export const SuggestTest: FC = () => {
  const t = useTranslations('Home')

  return (
    <div className={styles.suggest}>

      <h1>{t('takeTest')}</h1>

    </div>
  )
}

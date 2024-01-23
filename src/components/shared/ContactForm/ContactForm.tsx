import { FC } from 'react'
// local
import { getPageValues, submitAction } from './actions'
// types
import { ArrayElement } from '@/utils'
import { RenderInputParams } from './types'
import { pageValueInputTypes } from './constants'
//styles
import styles from './styles.module.scss'

export const ContactForm: FC = () => {
  const pageValues = getPageValues()

  const renderInput = (
    { name, type, placeholder, required }: RenderInputParams<ArrayElement<typeof pageValues.inputs>['type']>
  ) => {
    if (type === pageValueInputTypes.name || type === pageValueInputTypes.email) {
      return (
        <label htmlFor={name}>
          <span>{placeholder}</span>
          <input
            id={name}
            required={required}
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </label>
      )
    }
    if (type === pageValueInputTypes.text) {
      return (
        <label htmlFor={name}>
          <span>{placeholder}</span>
          <textarea
            id={name}
            required={required}
            name={name}
            placeholder={placeholder}
          />
        </label>
      )
    }
    if (type === pageValueInputTypes.send) {
      return (
        <button type={type}>{placeholder}</button>
      )
    }
  }

  return (
    <div className={styles.container}>

      <form className={styles.contactForm} action={submitAction}>
        <h2>{pageValues.heading}</h2>

        {
          pageValues
            .inputs
            .map(renderInput)
        }

      </form>

    </div>
  )
}

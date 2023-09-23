import { revalidatePath } from 'next/cache'
import { FC } from 'react'
// local
import { routes } from '@/routes'
//styles
import styles from './styles.module.scss'
import { ArrayElement } from '@/utils'

export const ContactForm: FC = () => {
  async function create(formData: FormData) {
    'use server'
    const nameInput = formData.get('name')
    const textInput = formData.get('text')

    console.log({ nameInput, textInput })

    // mutate data
    // revalidate cache
    revalidatePath(routes.Contacts)
  }

  const pageValues = {
    heading: 'Contact us',
    inputs: [
      { name: 'email', type: 'email', placeholder: 'email', required: true },
      { name: 'name', type: 'text', placeholder: 'name', required: true },
      { name: 'text', type: 'textarea', placeholder: 'name', required: true },
      { name: 'send', type: 'submit', placeholder: 'Send' }
    ]
  } as const;

  type RenderInputParams = {
    name: string,
    type: ArrayElement<typeof pageValues.inputs>['type'],
    placeholder: string,
    required?: boolean
  }

  const renderInput = ({ name, type, placeholder, required }: RenderInputParams) => (
    (type === 'text' || type === 'email') && (
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
    ) || (type === 'textarea') && (
      <label htmlFor={name}>
        <span>{placeholder}</span>
        <textarea
          id={name}
          required={required}
          name={name}
          placeholder={placeholder}
        />
      </label>
    ) || (type === 'submit') && (
      <button type={type}>{placeholder}</button>
    )
  )


  return (
    <div className={styles.container}>

      <form className={styles.contactForm} action={create}>
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

import { revalidatePath } from 'next/cache'
// local
import { routes } from '@/routes'
import { pageValueInputTypes } from './constants'

export async function submitAction(
  formData: FormData
) {
  'use server'
  const nameInput = formData.get('name')
  const textInput = formData.get('text')

  console.log({ nameInput, textInput })
  // TODO:

  revalidatePath(routes.Contacts)
}

export function getPageValues() {
  return {
    heading: 'Contact us',
    inputs: [
      { name: 'email', type: pageValueInputTypes.email, placeholder: 'email', required: true },
      { name: 'name', type: pageValueInputTypes.name, placeholder: 'name', required: true },
      { name: 'text', type: pageValueInputTypes.text, placeholder: 'name', required: true },
      { name: 'send', type: pageValueInputTypes.send, placeholder: 'Send' }
    ]
  } as const;
}
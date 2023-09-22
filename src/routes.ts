import * as pages from './app'

type PagesMapping = keyof typeof pages

export const routes: Record<PagesMapping, string> = {
  Home: '/home',
  Contacts: '/contacts',
}
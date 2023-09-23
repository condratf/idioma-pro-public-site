import * as pages from './app'

type PagesMapping = keyof typeof pages

export const routes: Record<PagesMapping, string> = {
  Home: '/home',
  Contacts: '/contacts',
  Services: '/services',
}

export const routeLinks = Object.values(routes)
import * as pages from './app/[locale]'

type PagesMapping = keyof typeof pages

export const routes: Record<PagesMapping, string> = {
  Home: '/home',
  Contacts: '/contacts',
  Services: '/services',
  About: '/about',
}

export const routeLinks = Object.values(routes)
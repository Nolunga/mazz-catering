import { Loadable } from '../components'

const LandingPage = Loadable(async () => import('../pages/Landing'))

const PUBLIC_ROUTES = [
  {
    exact: true,
    title: 'Landing',
    path: '/',
    Element: LandingPage
  }
]

export { PUBLIC_ROUTES }

import { Suspense, lazy } from 'react'
import './App.css'
import Page404 from './pages/404.jsx'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const ProjectsPage = lazy(() => import('./pages/Projects.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/projects' Component={ProjectsPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App

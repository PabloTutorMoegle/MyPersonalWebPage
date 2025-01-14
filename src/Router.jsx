import { useEffect, useState, Children } from 'react'
import { EVENTS } from './assets/constants.js'
import PropTypes from 'prop-types';
import { match } from 'path-to-regexp'

export function Router ({children, routes = [], defaultComponent: DefaultComponent}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({props, type}) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if(path === currentPath) return true
    
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if(!matched) return false

    routeParams = matched.params // { query: 'duckyduck' ==> /search/duckyduck }
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams}/> : <DefaultComponent routeParams={routeParams}/>
}

Router.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array,
  defaultComponent: PropTypes.func
};
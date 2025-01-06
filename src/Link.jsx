import EVENTS from './assets/constants.js'
import PropTypes from 'prop-types';

function navigate (href) {
    window.history.pushState({}, '', href)
    const navEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navEvent)
}

export function Link({ target, to, ...props }) {

  const handleClick = (event) => {

    const isMainEvent = event.buton === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManegableEvent = target === '_self' || target === undefined

    if (isMainEvent && !isModifiedEvent && isManegableEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}

export default Link;

Link.propTypes = {
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
};

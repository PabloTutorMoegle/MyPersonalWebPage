
import PropTypes from 'prop-types';

export function Route({ path, Component }) {
    return null
}

Route.propTypes = {
    path: PropTypes.string.isRequired,
    Component: PropTypes.node.isRequired
};

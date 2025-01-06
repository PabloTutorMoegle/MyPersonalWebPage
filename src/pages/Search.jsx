import PropTypes from 'prop-types';

export default function SearchPage({routeParams}) {
    
    return (
        <>
        <h1>You search for: </h1>
        <h2> {routeParams.query} </h2>
        </>
    )
}

SearchPage.propTypes = {
    routeParams: PropTypes.object.isRequired
};
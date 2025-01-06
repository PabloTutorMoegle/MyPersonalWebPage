import {Link} from '../Link.jsx'

function HomePage() {
    return (
    <>
      <img src="https://unavatar.io/pablotutormoegle" className="userIMG" alt="PabloIMG" />
      <h1>Pablo's Page</h1>
      <div className='linkcontainer'>
        <Link to={'/about'} className='linkbutton' > About </Link>
        <br/>
        <Link to={'/projects'} className='linkbutton' > Projects </Link>
      </div>
    </>
    )
}

export default HomePage
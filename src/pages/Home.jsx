import {Link} from '../Link.jsx'

function HomePage() {
    return (
    <div>  
      <img src="https://unavatar.io/pablotutormoegle" className="userIMG" alt="PabloIMG" />
      <h1>Pablo's Page</h1>
      <div className='linkcontainer'>
        <Link to={'/about'} className='linkbutton' > About </Link>
        <Link to={'/projects'} className='linkbutton' > Projects </Link>
        <Link to={'/hobbies'} className='linkbutton' > Hobbies/Personal Me </Link>
        <Link to={'/3dprinting'} className='linkbutton' > 3D Printing </Link>
      </div>
    </div>
    )
}

export default HomePage
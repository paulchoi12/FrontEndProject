import { Link } from "react-router-dom"

const Nav = () =>{
    return (
        <nav className="Nav">
             <Link to='/' className='Nav__link'>
                Home
            </Link>
            <Link to="/api" className="Nav__link">
                Article List
            </Link>
        </nav>
    )
}

export default Nav
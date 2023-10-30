import { Link } from "react-router-dom"

const Nav = () =>{
    return (
        <nav className="Nav">
             <Link to='/api' className='Nav__link'>
            Home |
            </Link>

            <Link to="/api/articles" className="Nav__link">
            Article List | 
            </Link>
           
           <Link to="/api/articles/category" className="Nav_link">
            Article Category
           </Link>
        </nav>
    )
}

export default Nav
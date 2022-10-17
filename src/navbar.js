import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><h1>Pokeuisine</h1></Link>
            <div className="links">
                <Link className="linkHome" to="/"> Home </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
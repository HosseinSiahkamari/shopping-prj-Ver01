import './Navbar.css'
import NavItems from './NavItems/NavItems';

const Navbar = () => {
    return ( 
        <header className="navbar">
            <nav>
            <NavItems/>
            </nav>
        </header>
     );
}
 
export default Navbar;
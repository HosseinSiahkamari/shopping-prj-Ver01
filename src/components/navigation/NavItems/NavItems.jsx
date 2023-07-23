
import './NavItems.css'
import NavItem from './NavItem';

const NavItems = () => {
    return ( 
        <ul className="nav-items">
            <NavItem link='/'>shopping</NavItem>
            <NavItem link='/'>check out</NavItem>

        </ul>
     );
}
 
export default NavItems;
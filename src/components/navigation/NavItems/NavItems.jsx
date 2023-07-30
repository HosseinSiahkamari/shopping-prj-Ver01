
import './NavItems.css'
import NavItem from './NavItem';

const NavItems = () => {
    return (
        <ul className="nav-items">
            <NavItem to='/'>shopping</NavItem>
            <NavItem to='/account'>Account</NavItem>
        </ul>
    );
}

export default NavItems;
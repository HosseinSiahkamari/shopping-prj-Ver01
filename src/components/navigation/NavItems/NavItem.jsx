
import './NavItem.css'
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className='nav-item'>
            <Link to={props.to}>{props.children} </Link>
        </li>
    );
}

export default NavItem;
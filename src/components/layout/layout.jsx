
import Wrapper from "../../hoc/wrapper";
import Navbar from "../navigation/Navbar";
import './layout.css'

const Layout = (props) => {
    return ( 
        <Wrapper>
            <Navbar/>
            <main className="content">{props.children}</main>

        </Wrapper>
     );
}
 
export default Layout;
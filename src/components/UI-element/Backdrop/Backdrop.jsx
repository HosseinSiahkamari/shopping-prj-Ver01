
import Wrapper from "../../../hoc/wrapper";
import './Backdrop.css'

const Backdrop = (props) => {
    return ( 
        props.show ? <div className="Backdrop" onClick={props.click}></div> : null
     );
}
 
export default Backdrop;
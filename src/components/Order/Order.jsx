import '../../hoc/wrapper'
import Wrapper from '../../hoc/wrapper';
import Button from '../UI-element/Button/Button';

const Order = (props) => {
    const summery = Object.keys(props.products).map((item)=>{
        return (
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )
    })
    return ( 
        <Wrapper>
            <h3>Order</h3>
            <ul>{summery}</ul>
            <h3>total Price:{props.t}</h3>
            <p>Continue ?</p>
            <Button btnType="success" click={props.continue}>yes</Button>
            <Button btnType="danger" click={props.cancel}>No</Button>

        </Wrapper>
     );
}
 
export default Order;
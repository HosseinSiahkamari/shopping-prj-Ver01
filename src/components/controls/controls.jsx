import './controls.css'

import Builder from './builder/builder';

const products = [
    {title: 'product 01', type:'product1'},
    {title: 'product 02', type:'product2'},
    {title: 'product 03', type:'product3'},
    {title: 'product 04', type:'product4'},
] 

const Controls = (props) => {
    return ( 
        <div className="controls">
            <div className='price'>
                <p>total price:{props.totalPrice} </p>
            </div>
            {products.map((item)=>{
                return <Builder 
                key={item.title} 
                title={item.title} 
                add = {()=> props.addProduct(item.type)}
                remove = {()=> props.deleteProduct(item.type)}
                />

            })}
            <div className="order-btn" onClick={props.purchase}>Order</div>
        </div>
     );
}
 
export default Controls;
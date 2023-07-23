import Controls from "../components/controls/controls";
import Wrapper from "../hoc/wrapper";
import { useState } from "react";
import Modal from "../components/UI-element/Modal/Modal";
import Order from "../components/Order/Order";

const price = {
    product1: 59,
    product2: 19,
    product3: 69,
    product4: 39,
}

const Shopping = (props) => {
    const [stateProducts, setProducts] = useState({
        products: {
            product1: 0,
            product2: 2,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0
    })
    const [purchase, setPurchased] = useState(false)

    const addProductHandler = (type) => {
        const prevCount = stateProducts.products[type]
        const updatedCount = prevCount + 1
        const updatedProduct = { ...stateProducts.products }
        updatedProduct[type] = updatedCount
        const addPrice = price[type]
        const prevPrice = stateProducts.totalPrice
        const newPrice = prevPrice + addPrice
        setProducts({ products: updatedProduct, totalPrice: newPrice })

        console.log('add');
    }

    const deleteProductHandler = (type) => {
        const prevCount = stateProducts.products[type]
        const newCount = prevCount - 1
        const updatedProduct = {...stateProducts.products}
        updatedProduct[type] = newCount
        const priceSub = price[type]
        const prevPrice = stateProducts.totalPrice
        const updatedPrice = prevPrice - priceSub
        setProducts({products:updatedProduct, totalPrice:updatedPrice})
        console.log(stateProducts);
        
    }

    const purchaseHalndler = ()=>{
        setPurchased(true)
    }

    const modalHandler = ()=>{
        setPurchased(false)
    }
    const purchaseContinueHandler = ()=>{
        console.log('purchase Continue');
        const t = Object.values(stateProducts)[1]
        console.log(t);
    }

    return (

        <Wrapper>
            <Modal purchase={purchase} click={modalHandler} show={purchase} >
                <Order 
                products={stateProducts.products} 
                cancel={modalHandler} 
                continue={purchaseContinueHandler}
                t = {stateProducts.totalPrice} /> 
            </Modal>
            <Controls
                addProduct={addProductHandler}
                deleteProduct={deleteProductHandler}
                totalPrice = {stateProducts.totalPrice}
                products= {stateProducts.products}
                purchase = {purchaseHalndler}
            /> 
        </Wrapper>
    )

}

export default Shopping;
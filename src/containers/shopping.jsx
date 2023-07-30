import Controls from "../components/controls/controls";
import Wrapper from "../hoc/wrapper";
import { useEffect, useState } from "react";
import Modal from "../components/UI-element/Modal/Modal";
import Order from "../components/Order/Order";
import axios from '../components/axios-orders';
import Loader from '../components/UI-element/Loader/Loader'
import { useNavigate } from "react-router-dom";

const price = {
    product1: 59,
    product2: 19,
    product3: 69,
    product4: 39,
}

const Shopping = (props) => {
    const [stateProducts, setProducts] = useState({
        products: null
    })
    const [statePrice, setProductPrice] = useState({
        totalPrice: 0
    })
    const [purchase, setPurchased] = useState(false)
    const [loaderState, setLoader] = useState(false)


    useEffect(() => {
        axios
            .get('https://shopping-prj-default-rtdb.firebaseio.com/products.json')
            .then((response) => {
                setProducts({ products: response.data })
            })
    }, [])

    const addProductHandler = (type) => {
        const prevCount = stateProducts.products[type]
        const updatedCount = prevCount + 1
        const updatedProduct = { ...stateProducts.products }
        updatedProduct[type] = updatedCount
        const addPrice = price[type]
        const prevPrice = statePrice.totalPrice
        const newPrice = prevPrice + addPrice
        setProducts({ products: updatedProduct })
        setProductPrice({ totalPrice: newPrice })


    }

    const deleteProductHandler = (type) => {
        const prevCount = stateProducts.products[type]
        const newCount = prevCount - 1
        const updatedProduct = { ...stateProducts.products }
        updatedProduct[type] = newCount
        const priceSub = price[type]
        const prevPrice = statePrice.totalPrice
        const updatedPrice = prevPrice - priceSub
        setProducts({ products: updatedProduct })
        setProductPrice({ totalPrice: updatedPrice })
        console.log(stateProducts);

    }

    const purchaseHalndler = () => {
        setPurchased(true)
    }

    const modalHandler = () => {
        setPurchased(false)
    }

    const navigate = useNavigate()

    const purchaseContinueHandler = () => {
        

        navigate('/checkout')

        setLoader(true)
        const order = {
            products: stateProducts.products,
            price: statePrice.totalPrice
        }
        axios
            .post('/orders.json', order)
            .then((response) => {
                console.log(response);
                setLoader(false);
                setPurchased(false);
            })
            .catch((error) => {
                console.log(error);
                setLoader(false);
                setPurchased(false);
            })
    }

    let order = null;

    if (loaderState) {
        order = <Loader />
    }

    let controls = <Loader />

    if (stateProducts.products) {
        controls = (<Controls
            addProduct={addProductHandler}
            deleteProduct={deleteProductHandler}
            totalPrice={statePrice.totalPrice}
            products={stateProducts.products}
            purchase={purchaseHalndler}
        />)

        order = (<Order
            products={stateProducts.products}
            cancel={modalHandler}
            continue={purchaseContinueHandler}
            t={statePrice.totalPrice} />)
    }

    return (

        <Wrapper>
            <Modal purchase={purchase} click={modalHandler} show={purchase} >
                {order}
            </Modal>
                {controls}
        </Wrapper>
    )

}

export default Shopping;
import React, { useEffect } from 'react'

import { Navigationbar, SigningUp, Footer } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(s => s.cartReducer.cart)
    // const vv = useSelector(s => s.cartReducer)
    // console.log(vv)
    let history = useHistory()

    useEffect(() => {
        checkCart()
    }, [])

    const checkCart = async () => {
        const token = localStorage.getItem("token")
        const res = await axios.get(`${process.env.REACT_APP_URL}cart`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        console.log("SHIT", res.data.data.items)
        dispatch({ type: "CART_UPDATE_FROM_SERVER", payload: res.data.data })
    }
    console.log(cart)

    return (
        <div>
            
            <div className="artistpage body">

                {cart
                        ? cart.map(x=> 
                        <div>
                            <h2>{x.event.title}</h2>
                            <h2>{x.count} ticket(s)</h2>
                        </div>)
                        : <h1>Nothing in your cart right now</h1>}


                <button className="btn sharp">FINISH PURCHASE</button>
            </div>
            <SigningUp />
            <Footer />
        </div>
    )
}

export default Cart

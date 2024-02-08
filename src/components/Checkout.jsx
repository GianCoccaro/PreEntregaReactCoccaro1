import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

const Checkout = () => {
    const [requestId, setRequestId] = useState("");

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const buy = (data) => {
        const request = {
            client: data,
            products: cart,
            total: totalPrice()
        }

        const requestsRef = collection(db, "requests");

        addDoc(requestsRef, request)
            .then((doc) => {
                setRequestId(doc.id);
                clearCart();
            })

    }

    if (requestId) {
        return (
            <div className="container">
                <h1 className="main-title">Thanks for your order</h1>
                <p>Your order number is: {requestId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Complete purchase</h1>
        <form className="form" onSubmit={handleSubmit(buy)}>

            <input type="text" placeholder="Enter your name" {...register("name")} />
            <input type="email" placeholder="Enter your email" {...register("email")} />
            <input type="phone" placeholder="Enter your cellphone" {...register("cellphone")} />

            <button className="send" type="submit">BUY NOW</button>

        </form>
    </div>
  )
}

export default Checkout;
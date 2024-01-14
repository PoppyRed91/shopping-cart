import CartItem from "../Components/CartItem"
import { Product } from "../Components/ProductItem"
import "./HomePage.css";

interface Props {
    cartItems: Product[],
}

export default function CartPage({cartItems}: Props) {
    return (
        <div>
            {cartItems.map((item: Product)=>{
                    return <CartItem imageSrc ={item.src} 
                                        name={item.name} 
                                        price={item.price}
                                        quantity={item.quantity}
                                        key={(Math.random()*1000).toString()}></CartItem>
                })}
        </div>
    )
}

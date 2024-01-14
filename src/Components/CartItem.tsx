import { useState } from "react";

interface Props {
    imageSrc: string,
    name: string,
    price: number,
    quantity: number,
    key: string
}

export default function CartItem({imageSrc, name, price, quantity}: Props) {
    

    return (
        <> 
            <div className="product-card">
                <div className="product-in-cart">
                    <img className="product-image" src={imageSrc}></img>
                    <h5 className="product-name">{name}</h5>
                    <p className="product-price">{price + `${" sek"}`}</p>
                    <p className="product-price">Quacktity of items: {quantity}</p>
                </div> 
            </div> 
        </>
    )
}
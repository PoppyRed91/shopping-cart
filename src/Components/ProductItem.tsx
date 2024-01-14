interface Props {
    imageSrc: string,
    name: string,
    price: number,
    onclick: (item:Product) => void,
    key: string
}

export class Product {
        name: string;
        src: string;
        price: number;
        quantity: number;

        constructor(name: string, src: string, price: number, quantity: number){
            this.name = name;
            this.src = src;
            this.price = price;
            this.quantity = quantity;
        }
    }

export default function ProductItem({imageSrc, name, price, onclick}: Props) {
    
    const src = require(`../Images/${imageSrc}`);
    
    return (
        <div className="product-card">
            <img className="product-image" src={src}></img>
            <h4 className="product-name">{name}</h4>
            <p className="product-price">{price + `${" sek"}`}</p>
            <button className="add-to-cart-button" onClick={()=>onclick(new Product(name, src, price, 1))}>Add to cart</button>
        </div>
    )
}
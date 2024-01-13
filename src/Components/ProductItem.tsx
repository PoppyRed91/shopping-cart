interface Props {
    imageSrc: string,
    name: string,
    price: number,
    onclick: (imageSrc:string, name: string, price: number) => void,
    key: string
}


export default function ProductItem({imageSrc, name, price, onclick}: Props) {
    const src = require(`../Images/${imageSrc}`);
    
    return (
        <div className="product-card">
            <img className="product-image" src={src}></img>
            <h4 className="product-name">{name}</h4>
            <p className="product-price">{price + `${" sek"}`}</p>
            <button className="add-to-cart-button" onClick={()=>onclick(src, name, price)}>Add to cart</button>
        </div>
    )
}
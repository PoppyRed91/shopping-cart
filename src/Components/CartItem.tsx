interface Props {
    imageSrc: string,
    name: string,
    price: number,
    onclick: () => void,
    key: string
}

export default function CartItem({imageSrc, name, price, onclick}: Props) {
    return (
        <>
            <img>{imageSrc}</img>
            <h5>{name}</h5>
            <p>{price + `${" sek"}`}</p>
            <button onClick={onclick}>Remove from cart</button>
        </>
    )
}
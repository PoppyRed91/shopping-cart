import ProductItem from "../Components/ProductItem";
import "./HomePage.css";

interface Props {
    products: Object[],
    onItemClick: (imageSrc: string, name: string, price: number) => void
}

export default function HomePage({products, onItemClick}: Props) {
    return (
        <>
            <div className="product-items">
                {products.map((item: any)=>{
                    return <ProductItem imageSrc={item["src"]} 
                                        name={item["name"]} 
                                        price={item["price"]} 
                                        onclick={onItemClick}
                                        key={(Math.random()*1000).toString()}></ProductItem>
                })}
            </div>
        </>
    )
}

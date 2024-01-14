import ProductItem, { Product } from "../Components/ProductItem";
import "./HomePage.css";

interface Props {
    products: Object[],
    onItemClick: (item: Product) => void
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

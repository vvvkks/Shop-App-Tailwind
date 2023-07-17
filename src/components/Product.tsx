import {IProduct} from "../models";
import {useState} from "react";


interface ProductProps {
    product: IProduct
}
export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-gray-400' : 'bg-gray-600';
    const btnClasses = ['border py-2 px-4', btnBgClassName]
    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 text-white">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Details' : 'Show details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}
import { useState } from "react";
import ProductItem from "../Components/ProductItem";

export default function Home(){
    const products = [
        {
            id : 1,
            title : "Nike Air 270",
            image : "https://img.freepik.com/photos-premium/friends-having-fun-at-the-beach_186382-8533.jpg?size=626&ext=jpg",
            price : 149,
            available : true
        },
        {
            id : 2,
            title : "MacBook Pro",
            image : "https://img.freepik.com/photos-premium/friends-having-fun-at-the-beach_186382-8533.jpg?size=626&ext=jpg",
            price : 1299,
            available : false
        },
        {
            id : 3,
            title : "Samsung S22 Ultra",
            image : "https://img.freepik.com/photos-premium/friends-having-fun-at-the-beach_186382-8533.jpg?size=626&ext=jpg",
            price : 1499,
            available : true
        },
    ]
    const [number, setNumber] = useState(0) 

    const [name, setName] = useState('')
    const [prods, setProds] = useState([])

    function handleClick(){
        setProds([
        ...prods, name
        ])
    }
    return(
        <>
            <div className="m-4 text-2xl">
            <div className="my-4">
                <h1>Add more products</h1>
                <div className="flex mb">
                    <input type="text" onChange={e => setName(e.target.value)} className="block mr-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <button onClick={handleClick} type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        Ajouter le produit
                    </button>
                </div>

                <div>
                    <ul>
                        {
                            prods.map(p => <li>{p}</li>)
                        }
                    </ul>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    products.map(product => 
                        <ProductItem 
                            product={product} 
                            key={product.id}
                            
                            />
                            )
                }
     
            </div>
            </div>
            
        </>
    );
}
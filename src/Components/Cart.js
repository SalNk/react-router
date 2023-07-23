import { useEffect } from "react"

export default function Cart({ cart, updateCart }) {

    const total = cart.reduce(
        (acc, product) => acc + product.price, 0
    )

    // useEffect(()=>{
    //     alert(total)
    // })

    return (
        <>
            <div className="bg-green-500 p-4 mr-4">
                <h1 className="font-bold text-white">Panier</h1>
                <ul>
                    {
                        cart.map(c =>
                            <li key={c.id} className="text-base">
                                {c.title} : {c.price}$
                            </li>)
                    }
                </ul>
            </div>
        </>
    )
}
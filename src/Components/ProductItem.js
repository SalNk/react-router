export default function ProductItem({ product, cart, updateCart }) {

    function addTocart(id, title, price) {
        const product = cart.find(c => c.id === id)
        if (product) {
            const cartFilteredCurrentProduct = cart.filter(c => c.id !== id)
            price = price * 2

            updateCart([...cartFilteredCurrentProduct, {
                id,
                title,
                price
            }])

        } else {
            updateCart([...cart, {
                id,
                title,
                price
            }])
        }
    }

    return (
        <>
            <div>
                <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                        <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="relative mt-4 flex justify-between items-center">
                        <h3 className="font-semibold text-sm  text-gray-900">{product.title}</h3>
                        <p className="relative text-lg font-bold text-gray-900  rounded">{product.price}$</p>

                    </div>

                    <div className="mt-4">
                        <button onClick={() => addTocart(product.id, product.title, product.price)} className="relative bg-green-500 hover:bg-green-600 flex items-center justify-center rounded-md border border-transparent p-2 text-sm font-medium text-white ">Ajouter au panier</button>
                    </div>
                </div>
            </div>

        </>
    );
}
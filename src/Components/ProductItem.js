export default function ProductItem({product}){
    return(
        <>
            <div className="shadow-lg p-4 rounded-xl  border">
                <div>
                    {/* <img src={product.image} alt={product.title} /> */}
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        {product.title}
                    </div>
                    <div className="text-green-500 font-bold text-2xl">
                        <span className="text-5xl">{product.price}</span>
                        <span>$</span>
                    </div>
                </div>
                <div className="text-gray-600">
                    En stock {product.available ? "✅" : "❌"}
                </div>
            </div>
        </>
    );
}
export default function ProductItem({product}){
    
    return(
        <>
            <div className="shadow-lg p-4 rounded-xl  border">
                <div className="mb-4">
                     <img src={product.image} alt={product.title} className="rounded-md" /> 
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        {product.title}
                    </div>
                    <div className="text-gray-600">
                        En stock {product.available ? "✅" : "❌"}
                    </div>
                    
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-green-500 font-bold text-2xl mt-3">
                        <span className="text-5xl">{product.price}</span>
                        <span>$</span>
                    </div>
                    <button onClick={() => {}} type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        Ajouter au panier
                    </button>
                </div>
                
            </div>
        </>
    );
}
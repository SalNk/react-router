export default function ProductItem({product}){
    
    return(
        <>
            <div>
                <div class="relative">
                    <div class="relative h-72 w-full overflow-hidden rounded-lg">
                        <img src={product.thumbnail} alt={product.title} class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="relative mt-4 flex justify-between items-center">
                        <h3 class="font-semibold text-sm  text-gray-900">{product.title}</h3>
                        <p class="relative text-lg font-bold text-gray-900  rounded">{product.price}$</p>

                    </div>
                   
                    <div class="mt-4">
                        <button class="relative bg-green-500 hover:bg-green-600 flex items-center justify-center rounded-md border border-transparent bg-gray-100  p-2 text-sm font-medium text-white ">Ajouter au panier</button>
                    </div>
                </div>
            </div>

        </>
    );
}
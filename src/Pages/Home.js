import ProductItem from "../Components/ProductItem";

export default function Home(){
    const products = [
        {
            id : 1,
            title : "Nike Air 270",
            image : "data:image/jpeg;base64,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",
            price : 149,
            available : true
        },
        {
            id : 2,
            title : "MacBook Pro",
            image : "data:image/jpeg;base64,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",
            price : 1299,
            available : false
        },
        {
            id : 3,
            title : "Samsung S22 Ultra",
            image : "https://images.frandroid.com/wp-content/uploads/2022/02/samsung-galaxy-s22-frandroid-2022.png",
            price : 1499,
            available : true
        },
    ]
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
                {
                    products.map(product => 
                        <ProductItem 
                            product={product} 
                            key={product.id}
                            
                            />
                            )
                }
     
            </div>
        </>
    );
}
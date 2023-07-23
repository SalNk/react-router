import Navbar from "./Navbar"

export default function Panier() {
    return (
        <>
            <Navbar />
            <div className="px-8 md:px-20 mt-8 md:mt-12">
                <h1 className="text-5xl font-bold">
                    Panier
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-between mt-6">
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg" alt="" className="h-28 rounded-md" />
                            <div className="mx-8 flex flex-col ">
                                <p>Hoodie</p>
                                <p>38$</p>
                            </div>
                        </div>
                        <div>
                            <span></span>
                            <select id="" name="" className="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm p-3 border-none">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
                        <h1 className="text-2xl font-bold">
                            Total à payer
                        </h1>
                        <div className="divide-y divide-slate-200">
                            <div className="flex justify-between py-4 md:py-6">
                                <p>Somme</p>
                                <p>120 USD</p>
                            </div>
                            <div className="flex justify-between py-4 md:py-6">
                                <p>taxe estimé</p>
                                <p>12 %</p>
                            </div>
                            <div className="flex justify-between pt-4 md:pt-6">
                                <p>Total</p>

                            </div>
                        </div>
                        <button className="mt-6 bg-blue-600 hover:bg-blue-700 py-4 text-center font-bold rounded-lg w-full text-white">Passer à la caisse</button>

                    </div>
                </div>
            </div>


        </>
    )
}
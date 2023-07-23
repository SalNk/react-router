import Navbar from "./Navbar";

export default function Caisse() {
    return (
        <>
            <Navbar/>
            <div className="px-8 md:px-20 mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2">

              <div>
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

                    </div>
                    <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-center font-bold rounded-lg w-full text-white">
                        <span className="grid place-items-center ">
                            <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" className="w-16" />
                        </span>
                    </button>
              </div>
              <div>

              </div>
            </div>
        </>
    )
}
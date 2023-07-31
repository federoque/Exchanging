import { useContext, useState } from "react";
import Navbar from "../components/navbar";
import { AppContext } from "../context/context";
import Loader from "../components/loader"
import axios from 'axios'

const Investment = () => {
    const { state } = useContext(AppContext)
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(false)
    const [investment, setInvestment] = useState(null)

function handleAmount(e){
    e.preventDefault(e)
    setAmount(e.target.value)
}

async function handleSubmit(e){
    try {
        e.preventDefault()
        setError(false)
        if(amount<=0) return setError(true)
        const request = await axios.post('http://localhost:3001/api/investment', {amount})
        setAmount(0)
        setInvestment(request.data.data)  
    } catch (error) {
        console.log(error)
    }
}



return !state.data ? 
    <div>
        <>
            <Navbar />
            <div className="h-[90vh] mt-[10vh] w-11/12 ml-10 z-0 flex flex-col items-center">
                <h2 className="text-3xl font-bold mt-4">Investment Calculator</h2>
                <div className="w-full mt-20 h-full">
                <div className="flex justify-center items-center" role="status">
                    <Loader />
                </div>
                </div>
            </div>
        </>
    </div>
    :
        <>
            <Navbar />
                <div className="bg-gray-100 min-h-[90vh] flex items-start justify-center mt-[10vh]">
                    <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full mt-10">
                        <h1 className="text-3xl font-bold mb-4">Investment Calculator</h1>
                        <h2 className="text-xl text-gray-600 mb-6">Calculate your Annual Investment</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="investment-amount" className="block text-gray-700">Enter your USD amount:</label>
                                <input value={amount} onChange={handleAmount} type="number" className="mt-2 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-400 focus:outline-none" />
                                <p style={!error ? {display:"none"} : {display:"block"}} className="text-red-500"> Enter a positive amount</p>
                            </div>
                            <button type="submit" className=" bg-[rgb(84,84,84)] hover:bg-[rgb(255,222,89)] hover:text-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none">Calculate</button>
                        </form>
                        <div className="mt-4 " style={investment ? {display:"block"} : {display: "none"}}>
                            <div className="flex justify-center">
                                <p className="mr-2">Amount:</p>
                                <p>U$D {investment ? investment.amount : 0}</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center justify-center border-gray-500 border-t-2">
                                <p className="font-bold">Bitcoin</p>
                                <p>Final Amount: U$D{investment ? investment.bitcoin : 0}</p>
                                <p>Final Amount (BTC): {investment ? (investment.bitcoin/state.btc_price).toFixed(2) : 0}</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center justify-center border-gray-500 border-t-2">
                                <p className="font-bold">Ethereum</p>
                                <p>Final Amount: U$D{investment? investment.ethereum : 0}</p>
                                <p>Final Amount (ETH): {investment ? (investment.ethereum/state.eth_price).toFixed(2) : 0}</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center justify-center border-gray-500 border-t-2">
                                <p className="font-bold">Cardano</p>
                                <p>Final Amount: U$D{investment ? investment.cardano : 0}</p>
                                <p>Final Amount (ADA): {investment ? (investment.cardano/state.ada_price).toFixed(2) : 0}</p>
                            </div>
                        </div>
                </div>
            </div>
            
        </>
}
export default Investment;
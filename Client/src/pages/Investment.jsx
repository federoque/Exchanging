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
            <div className=" mt-[10vh] w-11/12 ml-10 z-0 flex flex-col items-center">
                <h2 className="text-3xl font-bold mt-4">Investment Calculator</h2>
                <div className="mt-4 h-5/6 w-full flex justify-center">
                    <div className="w-full lg:w-[50vw] border border-black bg-gray-100 flex flex-col items-center rounded-2xl overflow py-10">
                        <h3 className="mt-2 text-xl font-bold">Calculate your Anual Investment</h3>
                        <p className="font-semibold text-lg mt-2">Enter your USD amount:</p>
                        <input style={{appearance:"none"}} value={amount} onChange={handleAmount} className="bg-gray-300 mt-2 px-4 py-2 text-center text-2xl border border-gray-600 rounded-lg inputamount" type="number" />
                        <p style={!error ? {display:"none"} : {display:"block"}} className="text-red-500"> Enter a positive amount</p>
                        <button onClick={handleSubmit} className="mt-6 py-2 px-8 border-2 border-black rounded-full font-bold bg-[rgb(255,222,89)] hover:bg-yellow-400 text-xl">Calculate</button>
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
            </div>
            
        </>
}
export default Investment;
import { useContext, useState } from "react";
import Navbar from "../components/navbar";
import { AppContext } from "../context/context";
import Graph from "../components/graph";
import Loader from "../components/loader"


const Home = () => {
    const { state, setState } = useContext(AppContext)
    const [search, setSearch] = useState("")


    function handleSearch(e){
        e.preventDefault()
        setSearch(e.target.value)
        setState(prev=>{
            return{
                ...prev,
                filterdata: state.data.data.filter(item=> item.data.name.toLowerCase().includes(e.target.value))
            }
        })
    }
    return !state.data ? 
    <div>
        <>
            <Navbar />
            <div className="h-[90vh] mt-[10vh] w-11/12 ml-10 z-0 flex flex-col items-center">
                <h2 className="text-3xl font-bold mt-4">Market Overview</h2>
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
            <div className="h-[90vh] mt-[10vh] w-11/12 ml-10 z-0 flex flex-col items-center">
                <h2 className="text-3xl font-bold mt-4">Market Overview</h2>
                <div className="w-full flex justify-center lg:justify-start items-center">
                    <label className="font-bold">Search: </label>
                    <input value={search} onChange={handleSearch} type="text" placeholder="Search" className="border border-black mt-2 self-start text-center ml-4 rounded-lg px-4 py-1"/>
                </div>
                <div className="w-full mt-2 h-full">
                    <table className="w-full hidden lg:block border-4 border-gray-900 rounded-2xl">
                        <thead className="border-b border-b-gray-200">
                        <tr className="bg-gray-900 text-gray-100">
                        <th className="w-1/12 p-2 text-center">Assets</th>
                        <th className="w-1/12 p-2 text-center">Price (USD)</th>
                        <th className="w-1/12 p-2 text-center">Change VS USD (1H)</th>
                        <th className="w-1/12 p-2 text-center">Change VS USD (24H)</th>
                        <th className="w-3/12 p-2 text-center">7 Trend Day</th>
                        <th className="w-1/12 p-2 text-center">Reported Marketcap</th>
                        <th className="w-1/12 p-2 text-center">Real Volume (24H)</th>
                        <th className="w-1/12 p-2 text-center">Change VS USD (7D)</th>
                        <th className="w-1/12 p-2 text-center">Change VS USD (30D)</th>
                        <th className="w-1/12 p-2 text-center">Change VS USD (YTD)</th>
                        </tr>
                        </thead>
                        <tbody>
                            {state.filterdata.map(item => (
                            <tr key={item.data.id} className='bg-gray-900 border-b border-b-gray-200'>
                            <td className="w-1/12 p-2 text-center font-semibold text-white">{item.data.name + " (" + item.data.symbol + ")"}</td>
                            <td className="w-1/12 p-2 text-center font-semibold text-white">{item.data.price_usd}</td>
                            <td style={item.data.percent_change_usd_last_1_hour< 0 ? {color:"red"} : {color:"green"}} className="w-1/12 p-2 text-center font-semibold">{item.data.percent_change_usd_last_1_hour}%</td>
                            <td style={item.data.percent_change_usd_last_24_hours< 0 ? {color:"red"} : {color:"green"}} className="w-1/12 p-2 text-center font-semibold">{item.data.percent_change_usd_last_24_hours}%</td>
                            <td className="w-3/12 p-2 text-center font-semibold">
                                <Graph data={item.time_series} />
                            </td>
                            <td className="w-1/12 p-2 text-center font-semibold text-white">{item.data.current_marketcap_usd}</td>
                            <td className="w-1/12 p-2 text-center font-semibold text-white">{item.data.real_volume_last_24_hours}</td>
                            <td style={item.data.percent_change_last_1_week< 0 ? {color:"red"} : {color:"green"}} className="w-1/12 p-2 text-center font-semibold">{item.data.percent_change_last_1_week}%</td>
                            <td style={item.data.percent_change_last_1_month< 0 ? {color:"red"} : {color:"green"}} className="w-1/12 p-2 text-center font-semibold">{item.data.percent_change_last_1_month}%</td>
                            <td style={item.data.percent_change_last_1_year< 0 ? {color:"red"} : {color:"green"}} className="w-1/12 p-2 text-center font-semibold">{item.data.percent_change_last_1_year}%</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>    
                    <table className="w-full lg:hidden">
                        <thead className="border-b border-b-gray-200">
                        <tr className="bg-gray-900 text-gray-100">
                            <th className="w-2/12 p-2 text-center">Assets</th>
                            <th className="w-5/12 p-2 text-center">Data</th>
                            <th className="w-5/12 p-2 text-center">7 Trend Day</th>
                        </tr>
                        </thead>
                        <tbody>
                            {state.filterdata.map(item => (
                            <tr key={item.data.id} className='bg-gray-900 border-b border-b-gray-200'>
                                <td className="w-2/12 p-2 text-center font-semibold text-white">{item.data.name + " (" + item.data.symbol + ")"}</td>
                                <td className="flex flex-col items-center justify-center text-white font-semibold border">
                                    <div className="flex w-full justify-around">
                                        <span>Price (USD)</span>
                                        <span>{item.data.price_usd}</span>
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <span>Change VS USD (1H)</span>
                                        <span style={item.data.percent_change_last_1_hour< 0 ? {color:"red"} : {color:"green"}}>{item.data.percent_change_usd_last_1_hour}%</span>
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <span>Change VS USD (24H)</span>
                                        <span style={item.data.percent_change_usd_last_24_hours< 0 ? {color:"red"} : {color:"green"}}>{item.data.percent_change_usd_last_24_hours}%</span>
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <span>Reported Marketcap</span>
                                        <span>{item.data.current_marketcap_usd}</span>
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <span>Real Volume (24H)</span>
                                        <span>{item.data.real_volume_last_24_hours}</span>
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <span>Change VS USD (7D)</span>
                                        <span style={item.data.percent_change_last_1_week< 0 ? {color:"red"} : {color:"green"}}>{item.data.percent_change_last_1_week}%</span>
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <span>Change VS USD (30D)</span>
                                        <span style={item.data.percent_change_last_1_month< 0 ? {color:"red"} : {color:"green"}}>{item.data.percent_change_last_1_month}%</span>
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <span>Change VS USD (YTD)</span>
                                        <span style={item.data.percent_change_last_1_year< 0 ? {color:"red"} : {color:"green"}}>{item.data.percent_change_last_1_year}%</span>
                                    </div>
                                </td>
                            <td className="w-5/12 p-2 text-center font-semibold border">
                                <Graph data={item.time_series} />
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
            </div>
        </>
}
export default Home;
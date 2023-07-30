import { useContext } from "react";
import Navbar from "../components/navbar";
import { AppContext } from "../context/context";
const Home = () => {
    const {state} = useContext(AppContext)
    console.log(state.data.data)
    return (
        <>
            <Navbar />
            <div className="h-[90vh] mt-[10vh] w-11/12 ml-10 z-0 flex flex-col items-center">
                <h2 className="text-3xl font-bold mt-4">Market Overview</h2>
                <div className="w-full mt-20 h-full">  
                <div className="m-auto flex flex-col lg:flex-row lg:justify-between w-full flex-wrap items-center h-[8%] bg-[rgb(84,84,84)] mb-1" >
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-3/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div></div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center border-r-2">
                                    <div></div>
                                </div>
                            </div>
                    {state.data.data.map(item=>{
                        return(
                            <div className="m-auto flex flex-col lg:flex-row lg:justify-between w-full flex-wrap items-center h-1/6 mb-1 bg-[rgb(50,50,50)] font-bold" key={item.data.id}>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center text-blue-00">
                                    <div>{item.data.name}</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>{item.data.price_usd}</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>{item.data.percent_change_usd_last_1_hour}%</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>cambio frene a dolar 24hs</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-3/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>grafico</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>{item.data.current_marketcap_usd}</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>{item.data.real_volume_last_24_hours}</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>{item.data.percent_change_last_1_week}</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center">
                                    <div>{item.data.percent_change_last_1_month}</div>
                                </div>
                                <div className="h-full w-1/2 lg:w-1/12 border-t-2 border-b-2 border-l-2 border-black flex justify-center items-center border-r-2">
                                    <div>{item.data.percent_change_last_1_year}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
export default Home;
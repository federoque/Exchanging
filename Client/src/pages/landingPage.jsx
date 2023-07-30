import Logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
 
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-1 grid-rows-2 lg:h-screen lg:w-screen bg-[rgb(84,84,84)] lg:grid-cols-7 lg:grid-rows-1" >
            <div className="m-auto lg:col-span-3 flex lg:justify-center lg:items-center h-[40vh]">
                <img className='w-full lg:w-5/6' src={Logo} alt="Logo" />
            </div>
            <div className="lg:col-span-4 gradient-container bg-white ">
                <div className='flex flex-col justify-center items-center lg:items-center  w-full h-full'>
                    <h2 className='text-3xl mb-6 font-bold text-[rgb(84,84,84)]'>Unlock Your Financial Potential</h2>
                    <button onClick={()=>navigate('/home')} className='w-3/6 md:w-3/12 lg:w-4/12 py-4 px-12 bg-[rgb(84,84,84)] hover:bg-gray-600 font-bold text-lg rounded-full'>Get started</button>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;
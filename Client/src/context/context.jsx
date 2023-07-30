import { createContext, useEffect, useState } from 'react';
import axios from 'axios'

export const AppContext = createContext()
// eslint-disable-next-line react/prop-types
const AppContextProvider = ({children}) =>{

    const [state, setState] = useState({
        loading: true,
        data: null,
        filterdata:null
    });

    const getData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/criptos');
        setState({
            loading:false,
            data: response.data,
            filterdata: response.data.data
        });
    } catch (error) {
        console.log(error)
        setState({
            loading:false,
            data: null,
            filterdata: null
        });
     }
    }

    useEffect(() => {
        getData()
        // const interval = setInterval(() => {
        //     getData();
        // }, 120000);
        // return () => clearInterval(interval)
      }, [])


    return (
        <AppContext.Provider value={{ state, setState }}>
          {children}
        </AppContext.Provider>
      );
}
export default AppContextProvider


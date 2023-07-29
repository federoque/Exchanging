import { createBrowserRouter } from "react-router-dom";

import LandingPage from '../pages/landingPage.jsx';
import Home from '../pages/home.jsx';
import Wallet from '../pages/wallet.jsx';

const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/wallet',
      element: <Wallet />
    },
    {
      path: "*",
      element:  <><p className="text-center mt-2">Oooops! Bad URL!</p></>
    },
  ])


export default appRouter

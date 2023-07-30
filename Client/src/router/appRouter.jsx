import { createBrowserRouter } from "react-router-dom";

import LandingPage from '../pages/landingPage.jsx';
import Home from '../pages/home.jsx';
import Investment from "../pages/Investment.jsx";

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
      path: '/investment',
      element: <Investment />
    },
    {
      path: "*",
      element: <LandingPage />
    },
  ])


export default appRouter

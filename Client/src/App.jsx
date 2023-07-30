import Routes from './router/appRouter.jsx';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={Routes}/>
    )
}

export default App
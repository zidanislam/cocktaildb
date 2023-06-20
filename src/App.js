import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Error from "./components/404/Error";
import About from "./components/About/About";
import Cocktails from "./components/Cocktails/Cocktails";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/items", element: <Cocktails></Cocktails> },
        { path: "/about", element: <About></About> },
      ],
    },
    {path:"*", element:<Error></Error>}
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
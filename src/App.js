import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Error from "./components/404/Error";
import About from "./components/About/About";
import CocktailDetail from "./components/CocktailDetail/CocktailDetail";
import CocktailList from "./components/Cocktails/Cocktails";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/items",
          element: <CocktailList></CocktailList>,
        },
        { path: "/about", element: <About></About> },
        {
          path: "/item/:idDrink",
          loader: async ({ params }) => {
            return fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idDrink}`
            );
          },
          element: <CocktailDetail></CocktailDetail>,
        },
      ],
    },
    { path: "*", element: <Error></Error> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

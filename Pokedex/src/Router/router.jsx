import ErrorPage from "./error-page";
import { IndividualPokemon } from "../pages/IndividualPokemon";
import { createBrowserRouter } from "react-router-dom";
import PokemonPage from "../pages/PokemonPage";
import App from "../App";
import { PokemonType } from "../pages/PokemonType";

// Create a browser router instance with the given routes
export const router = createBrowserRouter([
  {
    // Set the path to the root URL
    path: "/",
    // Use the App component as the root element of the router
    element: <App />,
    // Use the ErrorPage component to display any errors that occur
    errorElement: <ErrorPage />,
    // Define the child routes for the root URL
    children: [
      {
        // Set the path for the Pokemon page
        path: "/",
        // Use the PokemonPage component to display the page content
        element: <PokemonPage />,
      },
      {
        // Set the path for the individual Pokemon pages, using a parameter for the Pokemon ID
        path: "/pokemon/:pokemonId",
        // Use the IndividualPokemon component to display the page content
        element: <IndividualPokemon />,
      },
      {
        // Set the path for the Pokemon type pages
        path: "/PokemonType",
        // Use the PokemonType component to display the page content
        element: <PokemonType />,
      },
    ],
  },
]);

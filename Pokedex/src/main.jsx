import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider,useParams} from 'react-router-dom';
import ErrorPage from './error-page';
import { IndividualPokemon } from './pages/IndividualPokemon';
import PokemonPage from './pages/PokemonPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pokemon/:pokemonId",
        element: <IndividualPokemon pokemonId={useParams().pokemonId}/>,
      },{
        path: "/",
        element: <PokemonPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

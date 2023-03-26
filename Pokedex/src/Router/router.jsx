import ErrorPage from './error-page';
import { IndividualPokemon } from '../pages/IndividualPokemon';
import {createBrowserRouter} from 'react-router-dom';
import PokemonPage from '../pages/PokemonPage';
import App from '../App'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pokemon/:pokemonId",
        element: <IndividualPokemon/>,
      },{
        path: "/",
        element: <PokemonPage />,
      }
    ],
  },
]);

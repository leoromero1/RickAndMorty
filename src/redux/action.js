import axios from "axios";
import { GET_ALLCHARACTERS, ADD_FAV, DELETE_FAV } from "./actionTypes";

export const getAllCharacter = (page) => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    return async function (dispatch) {
      try {
        const response = await axios.get(url);
        const character = response.data.results
        dispatch({ type: GET_ALLCHARACTERS, payload: character });
      } catch (error) {
        return dispatch({
          type: GET_ALLCHARACTERS,
          payload: error.message,
        });
      }
    };
  };


  export function addFav(personaje) {
    return { type: ADD_FAV, payload: personaje };
  }
  
  export function deleteFav(id) {
    return { type: DELETE_FAV, payload: id };
  }

  
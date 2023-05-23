import { GET_ALLCHARACTERS, ADD_FAV, DELETE_FAV } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLCHARACTERS:
      return {
        ...state,
        allCharacters: payload,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
        allCharacters: state.allCharacters.map((char) =>
          char.id === payload ? { ...char, isFavorite: false } : char
        ),
      };
    default:
      return state;
  }
};

export default reducer;

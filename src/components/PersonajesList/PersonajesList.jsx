import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacter } from "../../redux/action";
import {CardList} from "../CardList/CardList";

export const PersonajesList = () => {
  
  const dispatch = useDispatch();
  const personaje = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacter());
  }, [dispatch]);

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return <CardList characters={personaje} />;
};

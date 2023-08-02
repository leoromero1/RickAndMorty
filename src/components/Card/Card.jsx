import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../../redux/action";
import Swal from 'sweetalert2'

export const Card = ({ personaje }) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const [fav, setFav] = useState(false);

  useEffect(() => {
    const isFavorite = myFavorites.some((favItem) => favItem.id === personaje.id);
    setFav(isFavorite);
  }, [myFavorites, personaje]);

  function handleFavorite() {
    if (!fav) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'character is Fav',
        showConfirmButton: false,
        timer: 1500
      })
      setFav(true);
      dispatch(addFav(personaje));
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'character deleted',
        showConfirmButton: false,
        timer: 1500
      })
      setFav(false);
      dispatch(deleteFav(personaje.id));
    }
  }

  return (
    <article className={style.containers}>
      <div className={style.containerImg}>
        <div className="absolute">
          {fav ? (
            <button className={style.fav} onClick={handleFavorite}>❤️</button>
          ) : (
            <button className={style.fav} onClick={handleFavorite}>🤍</button>
          )}
        </div>
        <img src={personaje.image} alt={personaje.name} />
      </div>
      <div className={style.detail}>
        <div className={style.status}>
          <Link to={`/personajes/${personaje.id}`}>
            <h2 className="hover:text-yellow-400 transition">
              {personaje.name}
            </h2>
          </Link>
        </div>
        <div className={style.status}>
          <h3>
            {personaje.status} - {personaje.species}
          </h3>
        </div>
        <div className={style.status}>
          <p>Última ubicación conocida:</p>
          <span>{personaje.location.name}</span>
        </div>
        <div className={style.status}>
          <p>Origen</p>
          <span>{personaje.origin?.name}</span>
        </div>
      </div>
    </article>
  );
};
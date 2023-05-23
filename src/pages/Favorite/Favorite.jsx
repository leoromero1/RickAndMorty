import { useSelector } from "react-redux";
import style from "./Favorite.module.css";
export const Favorite = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <section className='flex flex-wrap justify-center'>
      {!favorites.length ? (
        
        <div className="flex justify-center items-center">
            <h1 className="absolute z-10 font-semibold text-4xl">No hay personajes Favoritos</h1>
            <img
              src='https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2018/05/11/ricky-and-morty-e-renovado-para-mais-70-episodios-e-o-multiverso-esta-salvo.jpg'
              alt='banner'
              className='w-screen h-screen object-cover filter blur-sm'
            />
          </div>
        
      ) : (
        favorites.map((personaje) => {
          return (
            <article
              key={personaje.name}
              className={style.containers}>
              <div className={style.containerImg}>
                <img
                  src={personaje.image}
                  alt={personaje.name}
                />
              </div>
              <div className={style.detail}>
                <div className={style.status}>
                  <h2 className="capitalize">
                    {personaje.name}
                  </h2>
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
        })
      )}
    </section>
  );
};

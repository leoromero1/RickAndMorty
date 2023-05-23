import { getAllCharacter } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Loading } from "../Loading/Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carrousel = () => {
  const dispatch = useDispatch();
  const personaje = useSelector((state) => state.allCharacters);
  useEffect(() => {
    dispatch(getAllCharacter());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: true,
        },
      },
    ],
  };

  return (
    <section className='w-11/12 lg:w-9/12 md:w-9/12 h-auto bg-cyan-800 rounded-lg shadow-sm'>
      <div className='px-6 py-4'>
        <h2 className='text-2xl text-center font-bold text-white'>
          Personajes
        </h2>
      </div>
      <div className='px-6 py-4'>
        {!personaje ? (
          <Loading />
        ) : (
          <Slider {...settings}>
            {personaje.map((el) => {
              return (
                <div
                  key={el.id}
                  className='px-2'>
                  <img
                    className='mx-auto rounded-full'
                    src={el.image}
                    alt={el.name}
                  />
                  <div className='mt-2 text-center'>
                    <p className='text-sm font-medium text-white'>{el.name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

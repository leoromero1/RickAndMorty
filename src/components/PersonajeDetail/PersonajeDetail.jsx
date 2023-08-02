import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import "./Personajes.css";
export const PersonajeDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(response.data);
    } catch (error) {
    }
  };
  useEffect(() => {
    getCharacters(id);
  }, [id]);

  return !character ? (
    <Loading />
  ) : (
    <section className='w-full text-center pt-7'>
      <Link to='/personajes'>
        <button className='px-6 py-2 font-medium text-white capitalize duration-300 bg-black rounded-lg hover:bg-gray-700'>Volver</button>
      </Link>
      <div className='flex justify-center p-3'>
        <h1
          className={`text-5xl font-extrabold pl-3 pr-3 rounded  capitalize text-white ${character.status}`}>
          {character.name}
        </h1>
      </div>
      <div className='fixed -z-10 inset-0'>
        <img
          src={character.image}
          alt='banner'
          className='w-screen h-screen object-cover filter blur-lg'
        />
      </div>
      <div className='md:flex justify-evenly'>
        <div className='flex justify-center'>
          <img
            src={character.image}
            alt={character.name}
            className='rounded-ss-md lg:rounded-full'
          />
        </div>
        <div className='flex flex-col justify-evenly lg:text-2xl'>
          <div className={`rounded mt-2 ${character.status}`}>
            <p className='text-white text-center'>
              <span className='text-black font-bold'>Estado: </span>
              {character.status}
            </p>
          </div>
          <p>
            <span className='text-black font-bold'>Specie: </span>{" "}
            {character.species}
          </p>
          <div>
            <span className='text-black font-bold'>Type: </span>
            {character.type ? character.type : "Sin Datos"}
          </div>
          <div>
            <p>
              <span className='text-black font-bold'>Genero: </span>
              {character.gender}
            </p>
          </div>
          <div>
            <p>
              <span className='text-black font-bold'>Origen: </span>
              {character.origin?.name}
            </p>
          </div>
          <p>
            <span className='text-black font-bold'>Ultima vez visto: </span>
            {character.location.name}
          </p>
        </div>
      </div>
    </section>
  );
};

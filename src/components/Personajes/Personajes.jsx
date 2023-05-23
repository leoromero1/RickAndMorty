import { PersonajesList } from "../../components/PersonajesList/PersonajesList";
import { Pagination } from "../../components/Pagination/Pagination";
export const Personajes = () => {
  return (
    <main>
      <section className='flex justify-around items-center bg-cyan-800 p-2'>
        <Pagination />
      </section>
      <section>
        <PersonajesList />
      </section>
    </main>
  );
};

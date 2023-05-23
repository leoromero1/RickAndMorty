import { Carrousel } from "../../components/Carrousel/Carrousel";

export const Home = () => {
  return (
    <section>
      <div className="fixed -z-10 inset-0">
        <img
          src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2018/05/11/ricky-and-morty-e-renovado-para-mais-70-episodios-e-o-multiverso-esta-salvo.jpg"
          alt="banner"
          className="w-screen h-screen object-cover filter blur-sm"
        />
      </div>
      <div className="flex justify-center content-center py-4 m-0">
        <h1 className="absolute z-10 font-bold text-3xl md:text-5xl lg:text-8xl text-white">
          Rick and Morty App.
        </h1>
      </div>
      <div className="flex justify-center content-center py-20">
        <Carrousel/>
      </div>
    </section>
  );
};
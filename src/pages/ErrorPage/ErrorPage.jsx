import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <img
        src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2018/05/11/ricky-and-morty-e-renovado-para-mais-70-episodios-e-o-multiverso-esta-salvo.jpg"
        alt="banner"
        className="absolute inset-0 object-cover w-full h-full filter blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-500 uppercase text-6xl tracking-widest mb-10">
            404 | Not Found
          </h1>
          <Link
            to="/"
            className="inline-block rounded border border-gray-600 bg-gray-600 px-12 py-3 hover:text-gray-600 hover:bg-white hover:uppercase text-sm font-medium text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

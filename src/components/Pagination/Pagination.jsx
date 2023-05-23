import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacter } from "../../redux/action";
export const Pagination = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const prev = () => {
    page <= 1 ? page : setPage(page - 1);
  };
  const next = () => {
    page >=42 ? page : setPage(page + 1);
  };

useEffect(() => {
    dispatch(getAllCharacter(page))
}, [page]);

  return (
    <>
      <button
        onClick={prev}
        className="px-6 py-2 font-medium text-white capitalize duration-300 bg-black rounded-lg hover:bg-gray-700"
      >
        Prev
      </button>
      <span className="flex text-center font-medium">PAG {page}</span>
      <button
        onClick={next}
        className="px-6 py-2 font-medium text-white capitalize duration-300 bg-black rounded-lg hover:bg-gray-700"
      >
        Next
      </button>
    </>
  );
};

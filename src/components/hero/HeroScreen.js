import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroId} = useParams();
  
  const hero = useMemo( () => getHeroById( heroId ), [ heroId ]);

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  if ( !hero ) {
    return <Navigate to={'/'} />
  }


  const handleReturn = () => {
      navigate(-1);
 }

  const imagePath = `/assets/${ id }.jpg`;

  return (
    <div className="flex flex-row mt-5">
      <div className="w-4/12">
        <img 
          alt={ superhero }
          src={ imagePath  } 
          className="rounded-lg border-2 border-double border-gray-300 animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="mx-5 w-8/12 w-full animate__animated animate__fadeIn">
        <h3 className="text-3xl my-2">{ superhero }</h3>
        <ul className="bg-white rounded-lg border border-gray-200 text-gray-900 w-full">
          <li className="pl-5 py-2 border-b border-gray-200 w-full rounded-t-lg"><b>Alter ego:</b> { alter_ego } </li>
          <li className="pl-5 py-2 border-b border-gray-200 w-full rounded-t-lg"><b>Publisher:</b> { publisher } </li>
          <li className="pl-5 py-2 border-b border-gray-200 w-full rounded-t-lg"><b>First_appearance:</b> { first_appearance } </li>
        </ul>

        <h5 className="mt-3 text-2xl">Characters</h5>
        <p>{ characters }</p>

        <button
          className="mt-5 px-6 py-2.5 bg-white text-blue-600 hover:text-white font-medium text-xs border border-blue-600 leading-tight rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          onClick={ handleReturn }
        >
          Back
        </button>
      </div>
    </div>
  )
}

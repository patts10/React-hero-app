import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `assets/${id}.jpg`;

  return (
    <div className="rounded-lg border border-gray-300 mb-4 text-center m-3 lg:w-3/12 md:w-2/5">
      <div className="flex flex-row">
        <div className="w-4/12">
          <img src={imagePath} alt={superhero} />
        </div>

        <div className="flex items-center w-8/12">
          <div className="py-4 w-full text-left px-3">
            <h5 className="md:text-2xl sm:text-2xl">{superhero}</h5>
            <p className="md:text-base sm:text-sm mt-3">{alter_ego}</p>

            {
              (alter_ego !== characters )
                && <p className="text-gray-600 text-sm text-justify">{ characters }</p>
            }

            <p>
              <small className="text-gray-600">{ first_appearance }</small>
            </p>

            <Link to={ `/hero/${ id }` } className="hover:underline hover:text-blue-900">
              more...
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

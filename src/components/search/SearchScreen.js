import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [values, handleInputChange, reset] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const heroesFiltered = useMemo( () => getHeroesByName(q), [ q ] );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  };

  return (
    <>
      <h1 className="my-5">Searches</h1>

      <div className="flex flex-row">

        <div className="w-4/12">
          <h1>Search</h1>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search hero"
              name="searchText"
              className="block px-2 py-1 mt-5 w-full"
              onChange={handleInputChange}
              value={searchText}
              autoComplete="off"
            />

            <button
              className="mt-3 px-6 py-2.5 bg-white text-blue-600 hover:text-white font-medium text-xs border border-blue-600 leading-tight rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="w-8/12">
          <h4>Results</h4>
          <hr />

          {
            (q==='')
              ? <div className="bg-blue-100 rounded-lg m-3 py-3 px-6 mb-4 text-base text-blue-700 mb-3" role="alert">Search a hero</div>
              : (heroesFiltered.length == 0)
                && <div className="bg-red-100 rounded-lg m-3 py-3 px-6 mb-4 text-base text-red-700 mb-3" role="alert">There is no results: { q }</div>
          }

          {
            heroesFiltered.map( hero => (
              <HeroCard
                key={ hero.id }
                { ...hero }
              />
            ))
          }

        </div>
      </div>
    </>
  );
};

import { useMemo } from "react";

import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher"

export const HeroList = ({ publisher }) => {

  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

  return (
    <div className="flex justify-around flex-wrap my-3 animate__animated animate__fadeIn">
        {
          heroes.map(hero => (
            <HeroCard key={ hero.id } { ...hero }/>
          ))
        }
    </div>
  )
}

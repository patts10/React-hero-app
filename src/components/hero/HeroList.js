import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher"

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );

  return (
    <div className="flex justify-around flex-wrap my-3">
        {
          heroes.map(hero => (
            <HeroCard key={ hero.id } { ...hero }/>
          ))
        }
    </div>
  )
}

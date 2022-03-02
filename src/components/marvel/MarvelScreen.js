import { HeroList } from "../hero/HeroList";


export const MarvelScreen = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl">MarvelScreen</h1>
      <hr />

      <HeroList publisher={ 'Marvel Comics'} />
    </div>
  );
};

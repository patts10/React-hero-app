import { HeroList } from "../hero/HeroList"

export const DScreen = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl mb-5">DCScreen</h1>
      <hr />

      <HeroList publisher={ 'DC Comics' } />
    </div>
  )
}

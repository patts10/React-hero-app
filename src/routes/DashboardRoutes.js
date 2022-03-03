import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar"

import { DScreen } from "../components/dc/DScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="mx-20">
      <Routes>
        <Route path="Marvel" element={ <MarvelScreen /> } />
        <Route path="dc" element={ <DScreen /> } />

        <Route path="Search" element={ <SearchScreen /> } />
        <Route path="hero/:heroId" element={ <HeroScreen /> } />

        <Route path="/" element={ <MarvelScreen /> } />
      </Routes>
      </div>
    </>
  )
}

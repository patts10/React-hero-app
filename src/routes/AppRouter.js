
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DScreen } from "../components/dc/DScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/Searchcreen";
import { Navbar } from "../components/ui/NavBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/Marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DScreen />} />
        <Route path="/Search" element={<SearchScreen />} />
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

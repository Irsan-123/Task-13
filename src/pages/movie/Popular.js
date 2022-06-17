import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  // Membuat state movies
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {

    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Popular" movies={movies} />
    </>
  );
}

export default PopularMovie;


import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import StyledHero, { Container } from "./Hero.styled";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;


  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovie(response.data);
  }

  useEffect(getDetailMovie, []);

  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
          >
            Watch Movie
          </Button>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </StyledHero>
    </Container>
  );
}

export default Hero;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    setMovies(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation" movies={movies} />
    </>
  );
}

export default Detail;

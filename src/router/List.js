import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import styles from "./List.module.css";
import {Link} from "react-router-dom";

function List() {
  const { num } = useParams();
  const [nums, setNums] = useState([...Array(10)].map((_,i) => i + +num));
  useEffect(() => {

  }, [nums]);

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reloading, setReloading] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${num}&minimum_rating=7&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    setReloading(false);
    setLoading(true);

    getMovies();
  }, [reloading]);
  
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>      
      )}
      <div>
      {nums.map((num) => {
          console.log(num);
          return <Link to={`/page/${num}`} onClick={() => setReloading(true)}>{num}</Link>})
      }
      </div>
    </div>
  );
}
export default List;
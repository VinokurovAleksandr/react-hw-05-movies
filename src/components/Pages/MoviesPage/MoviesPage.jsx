import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {Loader} from 'components/Loader/Loader';
// import { toast, ToastContainer } from 'react-toastify';
import {searchMovie} from 'components/API/Api';

import { SearchBar } from 'components/SearchBar/SearchBar'
import {MovieList} from 'components/MovieList/MovieList';



 const MoviesPage = () => {

    
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const movie = searchParams.get('movie');


    useEffect(() => {
        if (!movie) {
            return;
        }
       
        const getMovie = async () => {
            try {
                setLoading(true);
                const { results } = await searchMovie(movie);

                setMovies(results);
                console.log(results);

            } catch (error) {
                console.log(error);
                
            } finally {
                setLoading(false);
            }
        }
        getMovie();
  }, [movie]);
    
    

    
  const handleSubmit = movie => {
    setSearchParams(movie !== '' ? { movie: movie.toLowerCase() } : {});
  };

    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            {loading && <Loader loading={ loading} />}
            {movies.length > 0 && <MovieList movies={movies} /> }
        </>
    );
};

export default MoviesPage;
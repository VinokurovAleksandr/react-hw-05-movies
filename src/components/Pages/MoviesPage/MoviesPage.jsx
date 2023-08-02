import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {Loader} from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';
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
                  if (results.length === 0) { 
                    toast.error(`Sorry, we couldn't find the movie for you requested , try again`);
                }
                setMovies(results);
            

            } catch (error) {
                toast.error('Sorry, movie not found!')
                
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
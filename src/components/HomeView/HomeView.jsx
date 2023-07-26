import { useState, useEffect } from 'react';


import { MoviesTitle } from './HomeView.styled';
import { fetchTrendingMovies } from 'components/API/Api';
import { MovieList } from 'components/MovieList/MovieList';

import { Loader } from 'components/Loader/Loader';


 const HomeView = () => {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {

        const getMovies = async () => {
            try {
                setLoading(true)
                const { results } = await fetchTrendingMovies();
                setMovies(results)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
 
        };
        
        getMovies();
  }, []);
    
    return (
        <>
            {loading && <Loader loading={ loading} />}
            <MoviesTitle>Tending today</MoviesTitle>  
            <MovieList movies={movies } />  
        </>       
    )
};

export default HomeView;
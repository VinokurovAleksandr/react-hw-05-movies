import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';

import { MoviesTitle } from './HomeView.styled';
import { fetchTrendingMovies } from 'components/API/Api';

import { Loader } from 'components/Loader/Loader';


export function HomeView() {
    

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
   <MoviesTitle>Tending today</MoviesTitle>  
    {loading && <Loader loading={ loading} />}
            {movies && movies.map((movie) => <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>)}        
            
        
        </>       
    )
};
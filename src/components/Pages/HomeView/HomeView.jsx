import { useState, useEffect } from 'react';

import { MoviesTitle } from './HomeView.styled';
import { fetchTrendingMovies } from 'components/API/Api';
import {Loader} from 'components/Loader/Loader';

export function HomeView () {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
 
//     useEffect(() => {
//         const { results } = fetchTrendingMovies();
//         setMovies(results)
//         // fetchTrendingMovies().then(setMovies)

//    },[])
    
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
    <Loader loading={ loading} />
    {movies && movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}        
            
        
        </>       
    )
};
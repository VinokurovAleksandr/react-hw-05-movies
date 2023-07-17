import { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';

import { MoviesTitle } from './HomeView.styled';
import { fetchTrendingMovies } from 'components/API/Api';

import { Loader } from 'components/Loader/Loader';


export function HomeView() {
    

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = useLocation();
    console.log(url);
    
    
    
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
    
            
            <ul>
                {movies.map(movie =>
               
                      <li key={movie.id}>

                        <Link to={`/movies/${movie.id}`}>
                            <img
                                width='200 px'
                                src={movie.poster_path
                                ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                                : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                                                alt={movie.title} />
                            <p>
                                 {movie.title} ({new Date(movie.release_date).getFullYear()})
                            </p></Link>
                
                  
                </li>
              )}      
            </ul>
              
            
        
        </>       
    )
};
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import {fetchMovieDetails} from 'components/API/Api'
import {MovieDetailsInfo} from 'components/MovieDetailsInfo/MovieDetailsInfo'
export default function MovieDetails() {
    
    const { movieId } = useParams();
    
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const result = await fetchMovieDetails(movieId)
                console.log(result);
                
                setMovie(result)
            } catch (error) {
                console.log(error);
                
            }
        }
       getMovieDetails()
    }, [movieId]);
    

    return (
        <>
            <MovieDetailsInfo text={`${movieId}`} />

        {movie && <>
                <img src={movie.poster_path}
                    alt={movie.title} />
                    <h2> {movie.original_title}</h2>
                   
                </>
               
        } 
        </>
       
    )
};


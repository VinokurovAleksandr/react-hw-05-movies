import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import {Cast} from 'components/Cast/Cast';
import { MovieDetailsInfo } from 'components/MovieDetailsInfo/MovieDetailsInfo'
import { fetchMovieDetails } from 'components/API/Api'
import { Loader } from 'components/Loader/Loader';

export default function MovieDetails() {

    const { movieId } = useParams();
    
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
 
 
    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                setLoading(true)
                const result = await fetchMovieDetails(movieId)
              
                
                setMovie(result)
            } catch (error) {
                console.log(error);
                
            } finally { 
                setLoading(false)
            }
        }
       getMovieDetails()
    }, [movieId]);
    

    return (
   
        <>
            {loading && <Loader loading={loading} />}
            <MovieDetailsInfo movie={movie} />
            {/* <Cast /> */}
            
        </>
    )
};


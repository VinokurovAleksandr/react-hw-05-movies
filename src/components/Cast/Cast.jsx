import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';

import {fetchMovieCast} from 'components/API/Api';
import { Loader } from 'components/Loader/Loader';


function Cast () {

 const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    
 useEffect(() => {
    const getCast = async () => {
        try {
             setLoading(true)
            const {cast} = await fetchMovieCast(movieId)  
             setCast(cast)
           
        } catch (error) {
            console.log(error);
                
        } finally {
                setLoading(false);
            }
    }
     getCast();
 }, [movieId]);

   

    return (
        
        <>
            {loading && <Loader loading={loading} />}
            <ul>
                {cast.map(actor => {
                    return (
                        <li key={actor.credit_id}>
                            
                <img src={actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                                alt={actor.name} />
                            <p>{actor.original_name} </p>
            
                        </li>
                    )
                })}
         </ul>
         </>
     ) };

      export default Cast;

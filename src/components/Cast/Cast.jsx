import { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';

import {fetchMovieCast} from '../API/Api';

export const Cast = () => {

    const { movieId } = useParams();
    const location = useLocation();
    console.log(location.state);
    
    const [casts, setCasts] = useState([]);
    
    useEffect(() => {
        const getCast = async () => {
            try {
                const resultCast = await fetchMovieCast(movieId)
                console.log(resultCast);
                setCasts(resultCast)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        getCast();
    }, [movieId]);

   

    return (
        <>
            {casts && casts.map(cast => <ul>
                <li key={cast.id}>
                <div>
                     <img src={cast.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + cast.poster_path
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                    alt={cast.name} />
                </div>
                <div>
                    <p>{cast.character}</p>
                </div>

            </li>
            </ul>)}
            <p>Hello</p>
       </>

    )
};
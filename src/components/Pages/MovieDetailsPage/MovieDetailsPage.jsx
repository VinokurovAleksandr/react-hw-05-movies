import { useState, useEffect } from 'react';
import { useParams, useLocation,NavLink, Outlet} from 'react-router-dom';

import { fetchMovieDetails } from 'components/API/Api'
import { Loader } from 'components/Loader/Loader';



export const MovieDetails = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation(); 
    const backPageLink = location.state?.from ?? '/';
   
    

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

        const {
        original_title,
        release_date,
        poster_path,
        title,
        vote_average,
        vote_count,
        popularity,
        overview,
        genres = [],
        
    } = movie;
    

    return (
        <>      
            {loading && <Loader loading={loading} />}
            {movie && (
                <div>
                    <div>
                        <h2>
                        
                            {original_title} ({new Date(release_date).getFullYear()})
                        </h2>
                    </div>
                    <div>
                        <img src={poster_path
                            ? 'https://image.tmdb.org/t/p/w500' + poster_path
                            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                            alt={title} />
                    </div>
                    <div>
                    <h3>Vote/Votes {Number(vote_average).toFixed(2)} / {vote_count}</h3>
                 </div>
                    
               <div>
                    <h3>Popularity {Number(popularity).toFixed(1)} </h3>
               </div>
                            <div>
                   <h3>About </h3>
                     <p>{overview}</p>
                    </div>
                    
                <div>
                      <h2>Genres</h2>
                <p>
                     {genres.map(gerne => gerne.name).join(", ")}
                 </p>
                </div>

                <div>
                        <h3>Additional information</h3>
                        <ul>
                            <li>
                                <NavLink to="cast" state={{ from: backPageLink }}>Cast</NavLink>
                              
                            </li>
                            <li>
                                <NavLink to="reviews" state={{ from: backPageLink }}>Reviews</NavLink>
                              
                            </li>
                        </ul>  
                        <hr />
                  

                </div>

                </div>
            )}
               
            <Outlet />
        </>
    )
}
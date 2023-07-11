import { NavLink } from 'react-router-dom';

export const MovieDetailsInfo = ({ movie }) => {


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
            {movie && <>
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
                    <h2>Additional information</h2>

                </div>

                <div>
                    <NavLink to='/movies/:movieId/cast'>Cast</NavLink>

                    <NavLink to='reviews'>Reviews</NavLink>
                </div>
               
                </>
            }
           </>
    )
};
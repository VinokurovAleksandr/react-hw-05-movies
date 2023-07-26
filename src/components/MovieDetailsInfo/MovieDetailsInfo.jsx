import { NavLink, useLocation } from 'react-router-dom';
import {BackLink} from 'components/BackLink/BackLink';

export const MovieDetailsInfo = ({ movie }) => {

    const location = useLocation();
    const backPageLink = location.state?.from ?? '/';
    const backLinkHref = location.state?.from ?? "/movies";
    
    const {
        title,
        release_date,
        poster_path,
        vote_average,
        vote_count,
        popularity,
        overview,
        genres = [],
        
    } = movie;

    return (
        <>
            {movie && (
                <main>
                    <BackLink to={backLinkHref} />
                    <div>
                        <h2>
                            {title} {release_date && (new Date(release_date).getFullYear() || 'Unknown') }
                        </h2>
                    </div>
                    <div>
                        <img src={poster_path
                            ? 'https://image.tmdb.org/t/p/w500' + poster_path
                            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                            alt={title} />
                    </div>
                    <div>
                        <h3>Vote/Votes {vote_average && Number(vote_average).toFixed(2)} / {vote_count}</h3>
                    </div>
                    
                    <div>
                        <h3>Popularity {popularity && Number(popularity).toFixed(1)} </h3>
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
                </main>
            )}
        </>
       
    )

};
import { Link, useLocation } from 'react-router-dom';
import {
    List,
    MovieItem,
    MovieImage,
    MovieTitle
    } from './MovieList.styled';

export const MovieList = ({ movies }) => {

    const location = useLocation();

    return (
        
        <>
            <List>
                {movies.map(({id,poster_path,title,release_date}) =>

                    <MovieItem key={id}>

                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            <MovieImage
                                width='200 px'
                                src={poster_path
                                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                                    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                                alt={title} />
                            <MovieTitle>
                                {title} ({new Date(release_date).getFullYear()})
                            </MovieTitle></Link>
                
                  
                    </MovieItem>
                )}
            </List>
           
        </>
    )
};
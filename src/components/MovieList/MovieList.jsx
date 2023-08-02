import { useLocation } from 'react-router-dom';
import noPhoto from 'components/images/no-image-available.jpg';
import {
    List,
    MovieItem,
    MovieImage,
    MovieTitle,
    MovieLink,
    MovieContainer
    } from './MovieList.styled';

export const MovieList = ({ movies }) => {

    const location = useLocation();

    return (
        
        <>
            <MovieContainer>
            <List>
                {movies.map(({id,poster_path,title,release_date}) =>

                    <MovieItem key={id}>

                        <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                            <MovieImage
                                width='200 px'
                                src={poster_path
                                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                                    : noPhoto}
                                alt={title} />
                            <MovieTitle>
                                {title} ({new Date(release_date).getFullYear()})
                            </MovieTitle></MovieLink>
                
                  
                    </MovieItem>
                )}
            </List>
            </MovieContainer>
            
           
        </>
    )
};
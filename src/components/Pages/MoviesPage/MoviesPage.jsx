import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Wrapper, Input, Icon, SearchBtn } from './MoviesPage.styled';
import {Loader} from 'components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import {searchMovie} from 'components/API/Api';

import { SearchBar } from 'components/SearchBar/SearchBar'
import { MovieDetailsPage } from 'components/Pages/MovieDetailsPage/MovieDetailsPage';

// export const MoviesPage = () => {

    
// };

export const MoviesPage = () => {

    
    const [searchParams, setSearchParams] = useSearchParams();

// //     // const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(false);
//     // const [value, setValue] = useState('');
    
    const movie = searchParams.get('movie');
 
    

    useEffect(() => {
        if (!movie) {
            return;
        }
       

        const getMovie = async () => {
            try {
                setLoading(true);
                const { results } = await searchMovie(movie);

                setMovies(results);
                console.log(results);

            } catch (error) {
                console.log(error);
                
            } finally {
                setLoading(false);
            }
        }
        getMovie();
  }, [movie]);
    
    

    
  const handleSubmit = movie => {
    setSearchParams(movie !== '' ? { movie: movie.toLowerCase() } : {});
  };

    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            {movies.length > 0 &&
                <div>
                    {movies.map(movie => (
                         <div>
                        <img src={movie.poster_path
                            ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                                alt={movie.title} />
                            <p>{movie.original_title}</p>
                    </div>
                        
                     
                 ))}   
            </div>
           }
        </>
        // <Wrapper>
        //     <form onSubmit={handleSubmit}>
        //         <Input
        //             type="text"
        //             // value={value}
        //             placeholder="Enter movie name..."
        //             onChange={handleQueryChange}
        //         />
        //         <SearchBtn type='submit'>{<Icon />} </SearchBtn>
        //     </form>

        //     {/* <ToastContainer
        //         autoClose={3000}
        //         theme={'dark'}
        //     /> */}
      
        // </Wrapper>
        

    );
};
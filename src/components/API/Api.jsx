import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = 'a0016221aacd325f84b4d3a1d7c5bcde';


const params = {
    params: {
        api_key: API_KEY,
    }

};

export const fetchTrendingMovies = async () => {
    const { data } = await axios.get(`trending/movie/day`, params);
       
    return data;

    
};

export const fetchMovieDetails = async movieId => {
    const { data } = await axios.get(`movie/${movieId}`, params);
       
    return data;
};

export const fetchMovieCast = async movieId => {
    const { data } = await axios.get(`movie/${movieId}/credits`, params);
       
    return data;
};

export const fetchMovieReviews = async movieId => {
    const { data } = await axios.get(`movie/${movieId}/reviews`, params);
       
    return data;
};
export const searchMovie = async (query, page)  => {
    const { data } = await axios.get('search/movie', {
         params: {
            api_key: API_KEY,
            query,
             page,
    }
    });
       
    return data;
};

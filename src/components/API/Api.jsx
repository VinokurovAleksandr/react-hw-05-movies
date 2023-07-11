import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = 'a0016221aacd325f84b4d3a1d7c5bcde';

// const BASE_URL = 'https://api.themoviedb.org/3/';

//  export const fetchTrendingMovies = () => {
//      return fetch(
//          `${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
//      .then(r => r.json())
        
        
// };

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




// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/movie/day',
//   params: {language: 'en-US'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDAxNjIyMWFhY2QzMjVmODRiNGQzYTFkN2M1YmNkZSIsInN1YiI6IjY0OWVlZWQxNWFiYTMyMDBhYzE5NmE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNuvrTIJ2RnfVdW2pPbzxpynq0AOAfIwYHuuYxZF6i8'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// 'https://api.themoviedb.org/3/movie/11?api_key=a0016221aacd325f84b4d3a1d7c5bcde'
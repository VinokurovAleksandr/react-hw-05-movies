import React from 'react';
// import { lazy } from 'react';
// // import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
// // import { HomePage } from './/Pages/HomePage/HomePage';
import {Header} from './Header/Header'
import { MoviesPage } from './Pages/MoviesPage/MoviesPage';
import { NotFoundView } from './NotFoundView/NotFoundView';
import { HomeView } from './HomeView/HomeView';
import Reviews from './Reviews/Reviews';
// import MovieDetails from './Pages/MovieDetailsPage/MovieDetailsPage';
import Cast from './Cast/Cast';

// import { Container } from './Container/Container';
// // import { NavConatiner, NavList } from './HomePage/HomePage.styled';
import {MovieDetails} from './Pages/MovieDetailsPage/MovieDetailsPage';
// // import s from './Navigation/Navigation.module.css';


export function App() {
  
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomeView />} />
        
        <Route path='/movies' element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="movie/cast" element={<Cast />} /> */}
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
       
        </Route>
        <Route path='*' element={<NotFoundView/>} />
      </Routes>
    </>
      

    
    
  )
};
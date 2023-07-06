import React from 'react';
// import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './/Pages/HomePage/HomePage';
import { MoviesPage } from './Pages/MoviesPage/MoviesPage';
import { NotFoundView } from './NotFoundView/NotFoundView';
import { HomeView } from './HomeView/HomeView';
import MovieDetails from './Pages/MovieDetailsPage/MovieDetailsPage'

import { Container } from './Container/Container';
// import { NavConatiner, NavList } from './HomePage/HomePage.styled';
// import {MovieDetailsPage} from './MovieDetailsPage/MovieDetailsPage';
// import s from './Navigation/Navigation.module.css';


export function App () {

  return (



    <Container>
    <HomePage />
      <Routes>  
        <Route path='/' element={<HomeView />} />  
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={ <MovieDetails/> } />
        
        

        <Route path='*' element={<NotFoundView/>} />
      </Routes>
     
     
        
    </Container>

   
  )

  
};
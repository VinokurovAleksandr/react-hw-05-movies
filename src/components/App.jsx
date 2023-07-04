import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './Pages/MoviesPage/MoviesPage';
import {NotFoundView} from './Pages/NotFoundView/NotFoundView'

import {HomeView} from './Pages/HomeView/HomeView';

import { Container } from './Container/Container';
// import { NavConatiner, NavList } from './HomePage/HomePage.styled';
// import {MovieDetailsPage} from './MovieDetailsPage/MovieDetailsPage';
// import s from './Navigation/Navigation.module.css';


export function App () {

  return (



    <Container>
    <HomePage />
      <Routes>  
          <Route path='/' element={<HomeView/>}/>     
          <Route path='movies' element={<MoviesPage/>}/>

        <Route path='*' element={<NotFoundView/>} />
      </Routes>
     
      
    </Container>
  

   

    
    


  
   
  )

  
};
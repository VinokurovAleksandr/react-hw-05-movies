import React from 'react';
// import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';


const Header = lazy(() =>
  import('./Header/Header' /*webpackChunkName: 'header' */));
const NotFoundView = lazy(() =>
  import('./NotFoundView/NotFoundView' /*webpackChunkName: 'Not-found-view' */));
const HomeView = lazy(() =>
  import('./HomeView/HomeView' /*webpackChunkName: 'home-view' */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /*webpackChunkName: 'reviews' */));
const Cast = lazy(() =>
  import('./Cast/Cast' /*webpackChunkName: 'cast' */));
const MovieDetails = lazy(() =>
  import('./Pages/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: 'movie-details' */));
const MoviesPage = lazy(() =>
  import('./Pages/MoviesPage/MoviesPage' /*webpackChunkName: 'movies-page' */));
  

export function App() {
  
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomeView />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundView/>} />
      </Routes>  
    </Suspense>
    </>
  )
};
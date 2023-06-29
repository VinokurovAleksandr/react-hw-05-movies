// import Navigation  from './Navigation/Navigation'; 
// import Container from './Container/Container';
import { NavLink } from 'react-router-dom';
import s from './Navigation/Navigation.module.css';


export function App () {

  return (


    <>
        <nav>
         <NavLink exact to='/' className={s.NavLink} activeClassName={s.active}>General</NavLink>
        <NavLink to='/atuthor' className={s.NavLink} activeClassName={s.active}>Atuthor</NavLink>
        <NavLink to='/books' className={s.NavLink} activeClassName={s.active}>Books</NavLink>
          </nav>
   
    </>

  )
};
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';


  const Navigation = () => {
    
    <Route path = '/'>
 <nav>
        <NavLink to='/' className={s.NavLink} activeClassName={s.active}>General</NavLink>
        <NavLink to='/atuthor' className={s.NavLink} activeClassName={s.active}>Atuthor</NavLink>
        <NavLink to='/books' className={s.NavLink} activeClassName={s.active}>Books</NavLink>

    </nav>  
    </Route>
         
        
   
    
};

export default Navigation;

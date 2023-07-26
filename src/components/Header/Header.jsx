import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from 'components/Container/Container';
import { NavConatiner, NavList, Nav,Link } from './Header.styled';



 const Header = () => {

    return (
        <Container>
            <NavConatiner>
        
            <NavList>
                <Nav>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </Nav>
                </NavList>
                    <Outlet />
            </NavConatiner>
        </Container>
       

    
    )
};

export default Header;
// import { Outlet } from "react-router-dom";
// import { Container, HeaderSection, Link } from "./Header.styled";

// export const Header = () => {
//   return (
//     <Container>
//       <HeaderSection>
//         <nav>
//           <Link to="/" end>
//             Home
//           </Link>
//           <Link to="/about">Movie</Link>
          
//         </nav>
//       </HeaderSection>
//       <Outlet />
//     </Container>
//   );
// };
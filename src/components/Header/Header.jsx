import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from 'components/Container/Container';
import { NavConatiner, Nav,Link } from './Header.styled';



 const Header = () => {

    return (
       <Container>
            <NavConatiner>
                <Nav>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </Nav>   
            </NavConatiner>
            <Outlet /> 
       </Container>
    //   <NavConatiner>
    //             <Nav>
    //                 <Link to='/'>Home</Link>
    //                 <Link to='/movies'>Movies</Link>
    //             </Nav>             
    //         <Outlet />
    //     </NavConatiner>
    )
};

export default Header;

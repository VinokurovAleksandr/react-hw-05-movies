import React from 'react';
import { Container } from '../../Container/Container';
import { NavConatiner, NavList, Nav,Link } from './HomePage.styled';



export const HomePage = () => {

    return (

        <NavConatiner>
        <Container>
            <NavList>
                <Nav>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movie</Link>
                </Nav>
                </NavList> 
    </Container>
    </NavConatiner>

    
    )
};



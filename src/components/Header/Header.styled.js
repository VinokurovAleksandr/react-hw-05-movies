import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavConatiner = styled.header`
  display: flex;
  align-items: center;
  z-index: 9999;
 
  padding: 20px;
  height: 60px;
   position: sticky;
  top: 0px;

   background-color: rgb(81, 124, 232);
  
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`;


export const Nav = styled.nav`

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;

  }

  :hover,
  :focus {
    background: white;
  }
`;

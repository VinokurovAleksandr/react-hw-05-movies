import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavConatiner = styled.header`
 padding: 20px;
  
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`;

export const NavList = styled.ul`
display: flex;
  gap: 30px;
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
    background-color: blue;
  }
`;



// import styled from "styled-components";
// import { NavLink } from "react-router-dom";

// export const Container = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
//   padding: 0 16px;
// `;

// export const HeaderSection = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
//   padding: 8px 0;
//   margin-bottom: 16px;
//   border-bottom: 1px solid black;

//   > nav {
//     display: flex;
//   }
// `;

// export const Logo = styled.p`
//   font-weight: 700;
//   margin: 0;
// `;

// export const Link = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;

//   &.active {
//     color: white;
//     background-color: blue;
//   }
// `;
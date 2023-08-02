
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
    max-width: 1200px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    list-style: none;
  

`;

export const MovieItem = styled.li`
   
    flex-basis: calc((100% - 20px) / 6);
    padding: 10px;
    border-radius: 4px;
    
         &:hover {
        transform: scale(1.03);
         cursor: pointer;
         
         transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        
    } 
    
       
`;

export const MovieImage = styled.img`
    width: 200px;
    height: 300px;
    margin-bottom: 10px;
    
    border-radius: 5px;

`;

export const MovieTitle = styled.p`
    
    text-align: center;
    color: black;
   


`;

export const MovieLink = styled(NavLink)`
    ${'' /* gap: 10px; */}
    text-align: center;
    color: black;
    text-decoration: none;
    padding: 12px;
    

 

`;



// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
     display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;

  

`;

export const MovieItem = styled.li`

    width: 200px;
    border-radius: 5px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
    
        :hover {
        transform: scale(1.03);
         cursor: pointer;
         color:blue;
        
    }


  
`;

export const MovieImage = styled.img`

    object-fit: fill;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

   
    

`;

export const MovieTitle = styled.p`
    
    text-align: center;

    color: black;

`;

// export const MovieLink = styled(Link)`

// `;


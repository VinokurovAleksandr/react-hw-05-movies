import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
    width: 1200px;
   
`;
export const Container = styled.div`
  display: flex;


  
`;


export const Title = styled.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.5;
    text-transform: uppercase;
    margin-bottom: 28px;

`;
export const MovieImg = styled.img`
    width: 320px;
    margin-right: 20px;


`;
export const MovieSubTitle = styled.p`
    display: flex;
    color: gray;
    margin-right: 20px;

    font-size: 24px;
    line-height: 16px;
    color: #8c8c8c;

    width: 160px;
    margin-right: 40px;
`;

export const VoteWrapper = styled.div`
    display: flex;
    align-items:baseline;
    margin: 30px 0px 30px 0px;
`;

export const AboutTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.6;
  text-transform: uppercase;
  margin-bottom: 12px;
`;
export const AddTitle = styled.h2`

  text-align: center;
    font-weight: 500;
    font-size: 32px;
    line-height: 1.5;
    text-transform: uppercase;
    margin: 30px 0 28px 0;
`;



export const Text = styled.p`
   
    margin: 8px 0 20px;
    font-size: 25px;
    line-height: 1;
    font-weight: 400;
`;

export const FlexContainer = styled.div`
 margin-left: 50px;

`;
export const CastListSyled = styled.div`
 
  list-style: none;
  display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;

`;
export const ItemStyledLink = styled(NavLink)`
    
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.17;
  text-transform: uppercase;
  color: #212121;

  border: none;
  border-radius: 5px;
  width: 160px;
  height: 44px;
  background-color: rgb(112, 128, 144);
  box-shadow: 0px 9px 8px 0px rgba(34, 60, 80, 0.2);
  transition-property: background-color, color, border;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;



  &.active {
    background-color: rgb(81, 124, 232);
    color: #ffffff;
    border: transparent;

  }

  &:hover,
  :focus:not(.active) {
    background-color: rgb(81, 124, 232);
    color: #ffffff;
    border: transparent;
    
  }
  
`;
export const ReviewsItemStyled = styled.li`

`;
export const VoteAverage = styled.span`
    font-size: 24px;
  line-height: 16px;
    


`;





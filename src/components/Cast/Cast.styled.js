import styled from 'styled-components';


export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 0;
    list-style: none;

`;
export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% - 20px) / 5);
   gap: 10px;
    padding: 10px;
    
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

`;
export const CastImage = styled.img`
    width: 190px;
    height: 300px;  
    border-radius: 5px;

`;
export const CastActorName = styled.p`
    text-align: center;
  align-items: center;

`;
export const CastContainer = styled.div`
  max-width: 1200px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;



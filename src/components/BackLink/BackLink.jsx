import { MdArrowBackIosNew } from 'react-icons/md';
import { StyledLink } from './BackLink.styled';





export const BackLink = ({to}) => {

    return (
        <StyledLink  to={to}>
            <MdArrowBackIosNew />
           Go back
        </StyledLink>
    )
};
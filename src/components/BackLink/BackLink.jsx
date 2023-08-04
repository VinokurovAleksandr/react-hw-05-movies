import { MdArrowBackIosNew } from 'react-icons/md';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';




export const BackLink = ({to}) => {
console.log(to);

    return (
        <StyledLink  to={to}>
            <MdArrowBackIosNew />
           Go back
        </StyledLink>
    )
};

// BackLink.propTypes = {
//     to: PropTypes.array.isRequired,
// };
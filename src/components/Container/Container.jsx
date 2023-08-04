import React from 'react';
import PropTypes from 'prop-types';


import { Wrapper } from './Container.styled';


// const sectionStyle = { 
    
   
//     backgroundImage: `url( ${BackgroundImage}`,
//      backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
// }

export const Container = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;

};
   
Container.propTypes = {
    children: PropTypes.node.isRequired,
};

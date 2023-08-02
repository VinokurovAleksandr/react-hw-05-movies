import {
    NotFound,
    NotFoundWrapper,
    Image,
    ErrorText,
    InfotextContainer,
} from './NotFoundView.styled';

import ErrorImage from 'components/images/error-404.jpg';

const NotFoundView = () => {

    return (
        <NotFoundWrapper>
            <Image src={ErrorImage} alt='404 not found' />
            <InfotextContainer>
                <NotFound>Error 404 </NotFound>
                <ErrorText>
                    The address is entered incorrectly or such a page no longer exists on the site.</ErrorText>
            </InfotextContainer>
            
        </NotFoundWrapper>
        
    )
};

export default NotFoundView;

import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import noPhoto from 'components/images/no-image-available.jpg';

import {
    Main,
    Container,
    Title,
    MovieImg,
    MovieSubTitle,
    Text,
    CastListSyled,
    ItemStyledLink,
    VoteWrapper,
    FlexContainer,
    VoteAverage,
    AboutTitle,
    AddTitle,
} from './MovieDetailsInfo.styled'

export const MovieDetailsInfo = ({ movie }) => {

    const location = useLocation();
    const backPageLink = location.state?.from ?? '/';
    const backLinkHref = location.state?.from ?? "/movies";
    
    const {
        title,
        release_date,
        poster_path,
        vote_average,
        vote_count,
        popularity,
        overview,
        genres = [],
        
    } = movie;

    return (
        <>
            {movie && (
                <Main>
                    <BackLink to={backLinkHref} />
                    
                    <Container>
                    
                            <MovieImg src={poster_path
                            ? 'https://image.tmdb.org/t/p/w500' + poster_path
                            : noPhoto}
                            alt={title} />
                       
                       
                        <FlexContainer>
                            
                       
                         <Title>
                            {title} {release_date && (new Date(release_date).getFullYear() || 'Unknown') }
                        </Title>
                        
                        
                            <VoteWrapper>
                                <MovieSubTitle>Vote/Votes</MovieSubTitle>
                                
                                <VoteAverage>
                                {vote_average && Number(vote_average).toFixed(2)} / {vote_count}
                                    </VoteAverage>
                                
                            </VoteWrapper>
                            

                            <VoteWrapper>
                                      <MovieSubTitle>Popularity</MovieSubTitle>
                                <VoteAverage>
                                    {popularity && Number(popularity).toFixed(1)}
                                 </VoteAverage>
                            </VoteWrapper>
                      
                        
                            <VoteWrapper>
                                   <MovieSubTitle>Genres</MovieSubTitle>
                        <VoteAverage>
                            {genres.map(gerne => gerne.name).join(", ")}
                        </VoteAverage>
                        </VoteWrapper>
                      
                        <AboutTitle>About </AboutTitle>
                        <Text>{overview}</Text>
                    </FlexContainer>
                        </Container>
                        
                    <AddTitle>Additional information</AddTitle>
                    <FlexContainer>
                        
                        <CastListSyled>                           
                                <ItemStyledLink to="cast" state={{ from: backPageLink }}>Cast</ItemStyledLink>
                                <ItemStyledLink to="reviews" state={{ from: backPageLink }}>Reviews</ItemStyledLink>
                        </CastListSyled>

                        <hr />
                    </FlexContainer>
                </Main>
            )}
        </>
       
    )

};
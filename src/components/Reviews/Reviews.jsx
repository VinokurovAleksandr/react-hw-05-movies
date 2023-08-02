import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'components/API/Api';
import {
    ReviewsContainer,
    NoFound,
    Reviewslist,
    ReviewsItem,
    ReviewsComents,
    ReviewsAthor,
} from './Reviews.styled'

 const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getReviews = async () => {
            try {
                setLoading(true)
                const  {results}  = await fetchMovieReviews(movieId)
                setReviews(results);
                console.log(results);
                
            } catch (error) {
                console.log(error);
                
            } finally {
                setLoading(false);
            }
        }
        getReviews();

    }, [movieId]);


    return (
        <>
            {loading && <Loader loading={loading} />}
            {reviews.length === 0 && !loading ?
                ( 
                    <NoFound>Reviews is not found!  Be the first   </NoFound>) :
                (
                     <ReviewsContainer>
                     <Reviewslist>
                        {reviews.map(({ id, author, content }) => (
                    
                            <ReviewsItem key={id}>
                                <ReviewsAthor>{author}</ReviewsAthor>
                                <ReviewsComents>{content}</ReviewsComents>
                            </ReviewsItem>
                    
                        ))}
                    </Reviewslist>
                </ReviewsContainer>
                )}
        </> 
    );
};

export default Reviews;
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import {fetchMovieReviews} from 'components/API/Api';

function Reviews () {
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
                (<h3>Reviews is not found! <span> Be the first </span>  </h3>) :
                (
                    <ul>
                        {reviews.map(({ id, author, content }) => (
                    
                            <li key={id}>
                                <p>{author}</p>
                                <p>{content}</p>
                            </li>
                    
                        ))}
                    </ul>
                )}
            {/* <Loader loading={loading} /> */}
        </>
        
    );
};

export default Reviews;
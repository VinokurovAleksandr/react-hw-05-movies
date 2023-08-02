import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import {fetchMovieCast} from 'components/API/Api';
import { Loader } from 'components/Loader/Loader';
import {
    CastList,
    CastItem,
    CastImage,
    CastActorName,
    CastContainer,
} from './Cast.styled';

 const Cast  = () => {

 const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    
 useEffect(() => {
    const getCast = async () => {
        try {
             setLoading(true)
            const {cast} = await fetchMovieCast(movieId)  
            setCast(cast)
            console.log(cast);
            
           
        } catch (error) {
            toast.error('Sorry, we could not find info about this movie');
                
        } finally {
                setLoading(false);
            }
    }
     getCast();
 }, [movieId]);


    return (
        
        <>
            {loading && <Loader loading={loading} />}

            <CastContainer>
                 <CastList>
                {cast.map(({credit_id,profile_path,name,original_name,character}) => {
                    return (
                        <CastItem key={credit_id}>
                            
                <CastImage src={profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
                                alt={name} />
                            <CastActorName>{original_name} </CastActorName>
                            <CastActorName>{character} </CastActorName>
            
                        </CastItem>
                    )
                })}
         </CastList>
            </CastContainer>
           
         </>
     ) };

export default Cast;
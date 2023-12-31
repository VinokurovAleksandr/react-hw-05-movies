import { ThreeDots } from 'react-loader-spinner';


import {LoaderStyle} from './Loader.styled'


export function Loader () {
    return (
       
       <LoaderStyle>
               <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="tomato" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />  
       </LoaderStyle>
         
    )
};



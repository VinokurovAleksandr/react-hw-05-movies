import {Wrapper,SearchForm, Button, ButtonLabel, Input} from './SearchBar.styled'
import { useState,} from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';


 export const SearchBar = ({onSubmit}) => {
  const [SearchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase())
  
  };


  
  const handleSubmit = e => {
    e.preventDefault();
   
    if (SearchQuery.trim() === '') {
      return toast.error('Query is not correct', {
      });
      
    }

      onSubmit(SearchQuery);
      setSearchQuery('');
    
  };

  
  return (
    <Wrapper>
    
    <SearchForm onSubmit={handleSubmit}>
      <Button type="submit">
        <ImSearch />
        <ButtonLabel>Search</ButtonLabel>
    </Button>

    <Input 
    
      type="text"
      autoComplete="off"
      autoFocus
        placeholder="Search movie"
        onChange={handleQueryChange}
        value={SearchQuery}
    />

    </SearchForm>
  </Wrapper> 
  )
};


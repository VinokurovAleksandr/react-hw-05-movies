import { Wrapper, Input, Icon } from './MoviesPage.styled';


// export const MoviesPage = () => {

    
// };

export const MoviesPage = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
  background-color: #ffff;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  
  right: 6px;
`;

export const SearchBtn = styled.button`
border-radius: 4px;
width: 40px;
height: 40px;
position: absolute;
cursor: pointer;
background-color: #ffff;
`;
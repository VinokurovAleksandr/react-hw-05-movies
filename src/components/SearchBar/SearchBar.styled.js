import styled from "styled-components";
// import { HiSearch } from "react-icons/hi";

// html {
//     box-sizing: border-box;
//     width: 100vw;
//     overflow-x: hidden;
// }

// *,
// *::before,
// *::after {
//     box-sizing: inherit;
// }

// body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//         Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
//     color: #212121;
//     background-color: #fff;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
// }

// img {
//     display: block;
//     max-width: 100%;
//     height: auto;
// }

 
export const Wrapper = styled.header`
 top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
   

/*
 * Стили компонента SearchForm
 */
export const SearchForm = styled.form`
 display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;`



export const Button = styled.button`
display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    /* background-image: url('https: //icon-library.com/icon/search-icon-svg-28.html.html>SearchIconSvg#26318'); */
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    
    :hover {
    opacity: 1;
}
    `



export const ButtonLabel = styled.span`
  position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;`

export const Input = styled.input `  
     display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    
    ::placeholder {
    font: inherit;
    font-size: 18px;
}
    `

// .SearchForm-input::placeholder {
//     font: inherit;
//     font-size: 18px;
// }


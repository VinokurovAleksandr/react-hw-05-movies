import 'modern-normalize';

import { createGlobalStyle } from 'styled-components';
// import BackgroundImage from 'components/images/backgroundImage.jpg'

export const GlobalStyle = createGlobalStyle`
  body {
   

        

    font-family: 'PT Serif', serif;
    font-weight: 400;
    background-color: rgb(242, 230, 177);
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
  display: block;
 
  height: auto;
  margin: 0;
}
`;
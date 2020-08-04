import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
@import url('./assets/Helvetica.ttf');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

html { 

}

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;

export default Global;
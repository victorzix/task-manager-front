import { createGlobalStyle } from 'styled-components';

export const COLORS = {
	textWhite: '#FCFDFF',
	bgOrange: '#CC3917',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${COLORS.bgOrange};
    height: 100vh;
    width: 100vh;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

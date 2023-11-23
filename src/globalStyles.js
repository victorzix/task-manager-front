import { createGlobalStyle } from 'styled-components';

export const COLORS = {
	textWhite: '#FCFDFF',
	bgOrange: '#CC3917',
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
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

import { createGlobalStyle } from 'styled-components';

export const COLORS = {
  cream: "#f9fadc",
  darkBrown: '#2b2823',
  darkCream: '#d4ceaa',
  ligthBlue: '#8fa691',
  orange: '#cc3917'
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${COLORS.cream};
    height: 100vh;
    width: 100vh;
    padding: 0;
    margin: 0;
  }
`;


export default GlobalStyle;

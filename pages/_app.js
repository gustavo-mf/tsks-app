import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #181820;
    color: #fff;
  }
`;

const theme = {
  purple: '#AC6DDE',
  gray750: '#414052',
  gray850: '#272733',
  gray900: '#21212B',
  font: '#fff',
  fontBtn: '#F5F5F6',
  black: '#181820'
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp

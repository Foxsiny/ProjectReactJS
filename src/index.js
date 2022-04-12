import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, purple} from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    mode: 'light'
  },
  status: {
    danger: orange[500],
  },
});
// const theme = createTheme({
//   palette: {
//     mode: 'dark'
//   },
//   status: {
//     danger: orange[500],
//     },
// });



// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App  showRed showSizeLetters/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


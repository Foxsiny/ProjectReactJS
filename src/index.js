import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, purple} from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import persistor, {store} from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@mui/material';


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
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App  showRed showSizeLetters/>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


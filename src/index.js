import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App } from 'components/App';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { theme } from 'styles/theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/test-tweets">
        <Provider store={store}>
          <>
            <App /> <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

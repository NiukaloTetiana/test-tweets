import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App /> <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

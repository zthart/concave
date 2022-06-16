import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConvexProvider, ConvexReactClient } from 'convex-dev/react';
import convexConfig from '../convex.json';

import CSSBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme/_base';

const convex = new ConvexReactClient(convexConfig.origin);

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <CSSBaseline />
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

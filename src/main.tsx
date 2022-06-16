import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConvexProvider, ConvexReactClient } from 'convex-dev/react';
import convexConfig from '../convex.json';

import CSSBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme/_base';

const convex = new ConvexReactClient(convexConfig.origin);

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      <ConvexProvider client={convex}>
        <Box m={8}>
          <Paper elevation={3}>
            <Box p={2}>
              <App />
            </Box>
          </Paper>
        </Box>
      </ConvexProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

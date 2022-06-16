import { useState, FormEvent } from 'react';
import { useMutation, useQuery } from '../convex/_generated';
import { Message } from './common';

import UserLogin from './components/UserLogin';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <UserLogin />
    </Box>
  );
}

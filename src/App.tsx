import { useEffect, useMemo } from 'react';
import { useState, FormEvent } from 'react';
import { useMutation, useQuery } from '../convex/_generated';

import UserLogin from './components/UserLogin';
import MainAppLayout from './components/MainAppLayout';
import Box from '@mui/material/Box';

const getSignature = (privateKey: string) => {
  return 'haha :^  )';
};
export default function App() {
  const [privateKey, _setPrivateKey] = useState(
    localStorage.getItem('concave-private-key')
  );

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      {!privateKey && <UserLogin onCreate={(pk) => _setPrivateKey(pk)} />}
      {privateKey && <MainAppLayout />}
    </Box>
  );
}

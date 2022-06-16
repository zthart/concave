import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { User } from '../common';

import { useMutation } from '../../convex/_generated';

const getKeyPair = () => {
  return { public_key: 'hahaha', private_key: ':^ )' };
};

const getSignature = (privateKey: string) => {
  return 'haha :^  )';
};

const UserLogin = (props: { onCreate: (pk: string) => void }) => {
  const { onCreate } = props;
  const [username, _setUsername] = useState('');
  const addUser = useMutation('addUser');

  const onChangeUsername = useCallback(
    ({ target }) => _setUsername(target.value),
    []
  );

  const createUser = useCallback(async () => {
    const { private_key, public_key } = getKeyPair();

    try {
      await addUser(username, getSignature(private_key), public_key);
      localStorage.setItem('concave-private-key', private_key);
      onCreate(private_key);
    } catch (e) {
      console.log(e);
    }
  }, [username]);

  return (
    <Card>
      <Box p={2} display="flex" alignItems="center" justifyContent="center">
        <TextField
          label="Username"
          placeholder="Type username…"
          value={username}
          onChange={onChangeUsername}
        />
        <Button onClick={createUser}>Go!</Button>
      </Box>
    </Card>
  );
};

export default UserLogin;

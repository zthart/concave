import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserLogin = ({}) => {
  const [username, _setUsername] = useState();
  const onChangeUsername = useCallback(
    ({ target }) => _setUsername(target.value),
    []
  );

  return (
    <Card>
      <Box p={2} display="flex" alignItems="center" justifyContent="center">
        <TextField
          label="Username"
          placeholder="Type username…"
          value={username}
          onChange={onChangeUsername}
        />
        <Button>Go!</Button>
      </Box>
    </Card>
  );
};

export default UserLogin;

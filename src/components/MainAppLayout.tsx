import { useCallback } from 'react';

import { useQuery } from '../../convex/_generated';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  browseUserContainer: {
    border: '1px solid #ccc',
    borderRadius: 8,
  },
}));

const MainAppLayout = () => {
  const users = useQuery('listUsers');
  const styles = useStyles();

  const clearLocalStorage = useCallback(() => localStorage.clear(), []);

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          py={1}
          px={2}
          className={styles.browseUserContainer}
        >
          <Box>
            <Typography variant="h5">Browse users</Typography>
          </Box>
          {!users && <LinearProgress />}
          {users && (
            <List>
              {users.map((user) => (
                <ListItem key={user.signature}>
                  <ListItemButton>
                    <ListItemText primary={user.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Button variant="contained" onClick={clearLocalStorage}>
          dev escape hatch
        </Button>
      </Box>
    </>
  );
};

export default MainAppLayout;

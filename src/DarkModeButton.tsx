import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { darkModeContext } from './darkModeContext';

function DarkModeButton(): React.ReactElement {
  const [, setDarkMode] = useContext(darkModeContext);
  return (
    <Button
      onClick={() => {
        setDarkMode((darkMode) => !darkMode);
      }}
    >
      Toggle Dark Mode
    </Button>
  );
}

export default DarkModeButton;

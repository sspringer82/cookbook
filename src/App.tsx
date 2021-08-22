import { useState } from 'react';
import './App.css';
import DarkModeButton from './DarkModeButton';
import { darkModeContext } from './darkModeContext';
import RecipeList from './RecipeList';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <darkModeContext.Provider value={[darkMode, setDarkMode]}>
      <DarkModeButton />
      <RecipeList />
    </darkModeContext.Provider>
  );
}

export default App;

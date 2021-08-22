import { useState } from 'react';
import './App.css';
import { darkModeContext } from './darkModeContext';
import RecipeList from './RecipeList';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <darkModeContext.Provider value={[darkMode, setDarkMode]}>
      <RecipeList />
    </darkModeContext.Provider>
  );
}

export default App;

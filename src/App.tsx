import { useState } from 'react';
import './App.css';
import DarkModeButton from './DarkModeButton';
import { darkModeContext } from './darkModeContext';
import RecipeList from './RecipeList.class';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <darkModeContext.Provider value={[darkMode, setDarkMode]}>
      <h1>Mein Kochbuch</h1>
      <DarkModeButton />
      <Router>
        <Switch>
          <Route path="/" exact component={RecipeList} />
          <Route path="/detail/:id" component={RecipeDetails} />
          <Route path="/new" component={RecipeList} />

          <Route
            path="/"
            render={() => {
              return (
                <div>
                  Ungültiger Pfad. <Link to="/">Starte hier</Link>
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </darkModeContext.Provider>
  );
}

export default App;

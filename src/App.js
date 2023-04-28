import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiExample from "./Components/apiExample";
import LoginForm from "./Components/loginForm";
import TabManager from "./Components/tabManager"

function App(props) {
  let themes = ["blue", "darkBlue", "red", "pink", "white", "green"];
  let themesDispName = ["Blue", "Dark Blue", "Red", "Pink", "White", "Green"];
  //These must correspond PERFECTLY, or else the site will display the incorrect theme name.


  let [themeIndex, setThemeIndex] = React.useState(0);
  let loginRequired = false;
  let [currTheme, setCurrTheme] = React.useState('blue');

  const [loggedIn, setLogin] = React.useState(!loginRequired);

  function onClickInc(){
    if(themeIndex == themes.length-1){
      setThemeIndex(0);
    }
    else{
      setThemeIndex(themeIndex + 1);
    }
    setCurrTheme(themes[themeIndex]);
  }
  
  function onClickDec(){
    if(themeIndex == 0){
      setThemeIndex(themes.length - 1);
    }
    else{
      setThemeIndex(themeIndex - 1);
    } 
    setCurrTheme(themes[themeIndex]);
  }

  function loginSuccesful(){
    setLogin(true);
  }

  return (
    <div className={themes[themeIndex]} >
      <header className="App-header">
        {loggedIn ? <TabManager  currTheme = {themesDispName[themeIndex]} onClickInc = {onClickInc} onClickDec = {onClickDec} /> : <LoginForm checkLogin={loginSuccesful} />}

      </header>
    </div>
  );
}

export default App;

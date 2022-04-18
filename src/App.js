import './App.scss';
import Router from './pages/Router';
import React, {useState} from 'react';


export const MyThemeContext = React.createContext('light');
 
// function withLogger(fn){
//   return function(...args){
//     console.log({args});
//     return fn(...args);
//   }
// }

// const foo = (a, b) => a + b;
// const bar = withLogger(foo);
// console.log('bar', bar(1,2));


function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div className="App">
      <header className="App-header">
        <MyThemeContext.Provider value = {{theme: theme, setTheme: setTheme}}>
          <Router />
        </MyThemeContext.Provider>
       </header>
     </div>
   );
 }

export default App;

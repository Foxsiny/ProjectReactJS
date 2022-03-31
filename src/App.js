import './App.scss';
//import Example from './Example';
//import AFew from './AFew';
import Message from './Message';


function App(props) {

  const isRed = `App-header ${props.showRed ? 'header-red' : 'header-blue'}`
  const isSize =`App-text ${props.showSizeLetters ? 'text-capital' : 'text-small'}`

  return (
    <div
     className={"App"} 
     >
      <header
       className={isRed}>
         <p className={isSize}>
        <Message/>
        {props.text}
        </p>
      </header>
    </div>
  );
}

export default App;

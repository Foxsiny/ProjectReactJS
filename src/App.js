import './App.scss';
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
        <Message text={'Привет мир'}/>
        {props.text}
        </p>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Display from './display';
import Keypad from './keypad';
import {useState} from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('')
  function handleClick(event){
    const {value} = event.target
    setQuery(prevState =>{
      return `${prevState+value}`
    })
  }

  function handleClear(){
    setQuery("")
    setResult('')
  }

  function handleEquals(){
    // eslint-disable-next-line 
    const myResult = eval(query)
    setResult(myResult)
    console.log(result)
  }

  return (
    <div className="App">
      <div className='calculator'>
        <Display 
          query = {query}
          result = {result}
        />
        <Keypad
          click = {handleClick}
          clear ={handleClear}
          equals= {handleEquals}
        />
      </div>
    </div>
  );
}

export default App;

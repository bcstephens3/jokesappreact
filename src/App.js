import logo from './logo.svg';
import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div>
      <Joke
      setup="why did chicken"
      punchl="chicken boy"
      isPun={true}
      laughs={113}/>
      
      <Joke
      setup="why did cow"
      punchl="cow boy"
      isPun={true}
      laughs={131}/>
      <Joke
      setup="why did cat"
      punchl="chicken cat"
      isPun={true}
      laughs={13}/>
      <Joke
      setup="why did duck"
      punchl="chicken duck"
      isPun={true}
      laughs={23}/>
      <Joke
      setup="why did dog"
      punchl="chicken dog"
      isPun={true}
      laughs={33}/>
    </div>
  );
}

export default App;

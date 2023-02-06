import './App.css';
import Joke from './Joke';
import jokesData from './jokesData';

function App() {
  const jokeElements = jokesData.map(joke => 
        <Joke  setup={joke.setup}
        punchl={joke.punchline}/>
    )

  return (
    <div>
      {jokeElements}
    </div>
  );
}

export default App;




// below is what was there before using jokesData

{/* <Joke
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
      laughs={33}/> */}
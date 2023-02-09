import React from "react"

export default function Joke(props) {

  const [isShown, setIsShown] = React.useState(false)


  function toggle(){
    setIsShown(prevShown => !prevShown) 
  }

 

  return (
    <div>
        <h1>
            Joke: {props.setup}
        </h1>
        <p>
            A: {isShown ? props.punchl : ""}
        </p>
        <h1>{isShown ? "Shown" : "Not shown"}</h1>
        <button className="toggle-btn" onClick={toggle}>{isShown ? "Hide":"Show"} PL</button>
    </div>
  );
}


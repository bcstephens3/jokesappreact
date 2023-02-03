export default function Joke(props) {
  return (
    <div>
        <h1>
            Joke: {props.setup}
        </h1>
        <p>
            A: {props.punchl}
        </p>
    </div>
  );
}


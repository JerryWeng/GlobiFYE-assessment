import "./App.css";
import Counter from "./components/counter";

function App() {

  return (
    <>
      <div className="codeBlock">
        <pre>
          <code>
            1. Coding Challenge: Simple Counter Component <br />
            ● Task: Create a React component with a counter that can be incremented or decremented using buttons. <br />
            **Requirements:** <br />
            - Use React hooks (`useState`). <br />
            - Ensure the component displays the current count and provides functional
            buttons for changing the count.
          </code>
        </pre>
      </div>
      <Counter />
    </>
  );
}

export default App;

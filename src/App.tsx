import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonLists from "./components/PersonLists";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "mental",
    last: "ryne",
  };
  const personList = [
    { first: "nonesense", last: "with sense" },
    { first: "react", last: "native" },
    { first: "javascript", last: "typescript" },
  ];
  return (
    <div className="App">
      {/* usestate */}
      <LoggedIn />
      <Greet user="Anmol" message={10} isLoggedIn={true} />
      {/* object props */}
      <Person name={personName} />
      {/* array props */}
      <PersonLists names={personList} />
      {/* string literals and strict props */}
      <Status status="ok" />
      {/* children props */}
      <Heading>placeholder text</Heading>
      {/* event props */}
      <Button
        handleClick={(event, id) => {
          window.location.reload();
          alert("id = " + id);
          console.log(event);
        }}
      />
      {/* with useReducer */}
      <Counter />
    </div>
  );
}

export default App;

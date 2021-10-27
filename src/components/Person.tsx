import { personsProps } from "../types/person.types";
const Person = (props: personsProps) => {
  return (
    <h2>
      {props.name.first} {props.name.last}
    </h2>
  );
};

export default Person;

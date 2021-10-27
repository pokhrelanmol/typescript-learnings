import { Name } from "../types/person.types";

type personListsProps = {
  names: Name[];
};
const PersonLists = (props: personListsProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <li>
          {name.first} {name.last}
        </li>
      ))}
    </div>
  );
};

export default PersonLists;

interface buttonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: Number) => void;
}
const Button: React.FC<buttonProps> = ({ handleClick }) => {
  return <button onClick={(event) => handleClick(event, 1)}>click</button>;
};

export default Button;

type headingProps = { children: string };
const Heading = (props: headingProps) => {
  return <h1>{props.children}</h1>;
};

export default Heading;

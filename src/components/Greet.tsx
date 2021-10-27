type greetingProps = {
  user: String;
  message: Number;
  isLoggedIn: Boolean;
};
const Greet = (props: greetingProps) => {
  return (
    <>
      {props.isLoggedIn ? (
        <h1 style={{ textAlign: "center" }}>
          welcome {props.user}! you have {props.message} unread messages
        </h1>
      ) : (
        <h1 style={{ textAlign: "center" }}> Login</h1>
      )}
    </>
  );
};

export default Greet;

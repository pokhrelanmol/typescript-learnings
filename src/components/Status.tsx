type statusProps = {
  status: "loading" | "error" | "ok";
};
const Status: React.FC<statusProps> = ({ status }) => {
  let message;
  if (status === "loading") {
    message = "Fetching Data ...";
  } else if (status === "error") {
    message = "Error Fetching Data";
  } else if (status === "ok") {
    message = "Data Fetched SuccessFull";
  }
  return (
    <div>
      <h2>{"status -" + message}</h2>
    </div>
  );
};

export default Status;

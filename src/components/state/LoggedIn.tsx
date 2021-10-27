import { useState } from "react";
type user = {
  name: string;
  email: string;
};
const LoggedIn = () => {
  const [user, setUser] = useState<user | null>(null);
  const handleLogin = () => {
    setUser({ name: "anmol", email: "anmol@gmail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <p> user name : {user?.name}</p>
      <p> user email: {user?.email} </p>
      <button onClick={handleLogin}> login</button>
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};
export default LoggedIn;

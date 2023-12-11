
import "./Admin.css";
import { useContext } from "react";
import { Mycontext } from "../../App";

 const Users = () => {
  const { user, setUser } = useContext(Mycontext);

  return (
    <div className="contend">
      
    <table>
      <thead>
        <tr>
        <h1>USERS</h1>
        </tr>
      </thead>
      <thead>
        <tr id="table">
          <th id="table">NO</th>
          <th id="table">Name</th>
          <th id="table">Email</th>
          <th id="table">Password</th>
        </tr>
      </thead>
      <tbody>
        {user.map((userId, index) => {
          const { id, username, password, email } = userId;
          return (
            <tr key={id} id="table"> {/* Add a unique key */}
              <td id="table">{id}</td>
              <td id="table">{username}</td>
              <td id="table">{email}</td>
              <td  id="table">{password}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};
export default Users
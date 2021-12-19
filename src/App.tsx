import React from "react";
import ToDoList from "./components/ToDoList";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <ToDoList />
    </div>
  );
};

export default App;

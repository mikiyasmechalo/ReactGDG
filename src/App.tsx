import GroupList from "./components/GroupList";
import React from "react";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";

function App() {
  // let items = ['teppi', 'ethiopia', 'Addis'];
  return (<>
    <Counter></Counter>
    <UserCard name={"Mike"} email={'helloyou@gamil.com'} age={22} bg={'lightBlue'}></UserCard>
    </>);
  // return (<Counter></Counter>)
}

export default App;

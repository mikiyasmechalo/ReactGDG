import GroupList from "./components/GroupList";
import React from "react";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import MyNotes from "./components/MyNotes";
import Tasks from "./components/Tasks";
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import UserProfile from './Pages/UserProfile';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // let items = ['teppi', 'ethiopia', 'Addis'];
  return (
    <>
      Group list Day 2 task
      <GroupList />
      <br />
      <hr />
      Counter day 3 Task 2 <br /> <br />
      <Counter />
      <hr />
      UserCard day 3 Task 1 <br />
      <UserCard
        name={"Mike"}
        email={"helloyou@gamil.com"}
        age={22}
        bg={"lightBlue"}
      ></UserCard>
      <hr />
      Simple Notes APP day 4 <br /> <br />
      <MyNotes />
      <hr />
      Tasks APP day 4 <br /> <br />
      <Tasks />
      <hr />
      Routing day 5 <br /> <br />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/user/:id" element={<UserProfile />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      
    </>
  );
  // return (<Counter></Counter>)
}

export default App;

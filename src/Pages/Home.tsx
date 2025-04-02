import {Link} from "react-router-dom";

const Home = ()=> {
  const id = 1

  return (
      <div>
        <Link to="/user/2"> Profile</Link>
        <br/>
        <Link to="/about-us">About Us </Link>
        <br/>
        <Link to="/login"> Login </Link>
        <br/>
        Home Page
      </div>
  );
};

export default Home;
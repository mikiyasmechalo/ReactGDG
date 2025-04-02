import {Link} from "react-router-dom";

const AboutUs = ()=> {
    return (
        <>
            <div>
              <Link to="/"> Home </Link>
              <Link to={"/contact"}>Contact</Link>
              <br/>
              <br/>
              <br/>
              About Us
            </div>
        </>
    );
};

export default AboutUs;
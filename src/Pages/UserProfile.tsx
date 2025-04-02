import {Link, useParams} from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return (
      <>
        <Link to={"/"}>Home</Link>
        <br/>
        <br/>
        User Profile Page
        <br/>
        Your user Id is {id}
      </>
  )
}

export default UserProfile;
import {useNavigate} from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  return (
      <>
        {/*<div>Login</div>*/}
        <button onClick={ () => navigate("/")} style={{padding:'10px 20px'}}>
          sign-in
        </button>
      </>
  )
}

export default Login;
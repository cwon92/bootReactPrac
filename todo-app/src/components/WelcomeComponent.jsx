import { Link, useParams } from "react-router-dom";

function WelcomeComponent(){
  const {username} = useParams();
  console.log(username);
  
  return (
    <div className="welcome">
      <h1>Welcome {username}</h1>

      <div>
        <Link to="/todos">your todos</Link>
      </div>
    </div>
  )
}

export default WelcomeComponent;
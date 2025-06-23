import { Link, useNavigate, useRouteError } from "react-router-dom";

// library
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate()
  console.error("Error:", error);
  return (
    <div className="error">
      <h1>Uh oh! We've got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button onClick={() => navigate(-1)} className="btn btn--dark">
          <ArrowUturnLeftIcon className="icon" width={20} />
          <span>Go back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <span>Go Home</span>
          <HomeIcon className="icon" width={20} />
        </Link>
      </div>
    </div>
  )
}

export default Error
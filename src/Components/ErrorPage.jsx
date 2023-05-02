import { Link, useRouteError } from "react-router-dom";
import errorpic from "/R.png";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="text-center text-4xl my-52">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn btn-success text-white">
        <Link to="/">Going to Home Page</Link>
      </button>
      <div className=" flex justify-center">
        <div className="w-1/2 md:w-1/5 mt-10 md:mt-28">
          <img src={errorpic} alt="" />
        </div>
      </div>
    </div>
  );
}

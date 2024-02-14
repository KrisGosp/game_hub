import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div>
        {isRouteErrorResponse(error) ? "Unexisting route" : "Unexpected error"}
      </div>
    </>
  );
};

export default ErrorPage;

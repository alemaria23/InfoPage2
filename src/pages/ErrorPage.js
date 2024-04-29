import { useRouteError } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponents";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <NavbarComponent props={"e"} />
        <div id="error-page" className="body">
        <h1>Oops!</h1>
        <p>Ne pare rau. O eroare neasteptata s-a produs.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    </>
  );
}
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg">
        Error: I'm sorry, the Pokemon was not found. Please try again
        <Link
          className="inline-block ml-2 py-2 px-4 bg-fire text-white rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out"
          to={`/`}
        >
          lets go home
        </Link>
      </p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found 😿</h1>
      <p className="mb-4">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to={`/React-Rest-Countries-Theme-Switcher/`}
        className="text-blue-500 hover:underline"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default ErrorPage;

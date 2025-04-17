import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-cyan-700 text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="btn btn-secondary text-white px-6 py-2 rounded-md hover:bg-secondary-focus transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-600 via-purple-600 to-indigo-700 px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 text-center shadow-2xl max-w-lg w-full">
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        <p className="text-white text-xl font-semibold mt-3">
          Oops! Page Not Found 😵
        </p>

        <p className="text-white/80 mt-2">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-black/30 text-white font-semibold rounded-xl hover:bg-black/50 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-primary via-gray-800 to-black px-4">
      {/* 404 text */}
      <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-accent">
        404
      </h1>
      
      {/* Subtitle */}
      <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Fun description */}
      <p className="text-gray-500 text-center max-w-md mb-8">
        It might have been moved, deleted, or maybe it never existed. Let’s get you back on track!
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-accent to-red-500 text-white rounded-full shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300 ease-in-out font-medium"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;

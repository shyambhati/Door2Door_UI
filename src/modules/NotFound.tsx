import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <AlertTriangle className="w-20 h-20 text-[#613cea] mb-4" />
      <h1 className="text-4xl font-bold mb-2 text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-[#613cea] text-white rounded hover:bg-[#4f32c3] transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

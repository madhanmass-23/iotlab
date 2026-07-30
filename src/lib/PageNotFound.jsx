import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <Link to="/" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
        Return to Dashboard
      </Link>
    </div>
  );
}
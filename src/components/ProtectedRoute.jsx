import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
}) {
  const userString = localStorage.getItem("user");

  // no user
  if (!userString) {
    return <Navigate to="/login" replace />;
  }

  let user;

  try {
    user = JSON.parse(userString);
  } catch {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  // no role
  if (!user.role) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  // wrong role
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
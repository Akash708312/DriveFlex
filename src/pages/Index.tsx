
import { Navigate } from "react-router-dom";

const Index = () => {
  // Automatically redirect to Home page
  return <Navigate to="/" replace />;
};

export default Index;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Wizard from "./pages/Wizard";
import Compliance from "./pages/Compliance";
import AwsChecker from "./pages/AwsChecker";
import { AuthProvider, useAuth } from "./context/Auth";

const Protected = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/wizard" element={<Protected><Wizard /></Protected>} />
          <Route path="/compliance" element={<Protected><Compliance /></Protected>} />
          <Route path="/aws-check" element={<Protected><AwsChecker /></Protected>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
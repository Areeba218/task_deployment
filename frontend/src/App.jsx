import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Index from "./Index";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import VerfifyOtp from "./VerfifyOtp";
import ChangePassword from "./ChangePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Project open hote hi Signup */}
        <Route
          path="/"
          element={<Navigate to="/signup" replace />}
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Index />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route path="/verifyotp" element={<VerfifyOtp />} />
        <Route
          path="/changepassword"
          element={<ChangePassword />}
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<Navigate to="/signup" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
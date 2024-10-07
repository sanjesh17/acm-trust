import "./App.css";
import HomePage from "../src/pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BookingPage from "./pages/BookingPage/BookingPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PrivateRoute from "./components/protectedroute/ProtectedRoute";
import UserRoute from "./components/userroute/UserRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminSurvey from "./pages/AdminSurvey/AdminSurvey";
import EventPage from "./pages/EventPage/EventPage";
import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdminStatus = useCallback(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  useEffect(() => {
    checkAdminStatus();

    window.addEventListener("userLoginStatusChanged", checkAdminStatus);

    return () => {
      window.removeEventListener("userLoginStatusChanged", checkAdminStatus);
    };
  }, [checkAdminStatus]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <BookingPage />
              </PrivateRoute>
            }
          />
          <Route path="/details" element={<DetailPage />} />
          <Route
            path="/survey"
            element={isAdmin ? <AdminSurvey /> : <SurveyPage />}
          />
          <Route
            path="/auth"
            element={
              <UserRoute>
                <AuthPage />
              </UserRoute>
            }
          />
          <Route
            path="/auth/register"
            element={
              <UserRoute>
                <RegisterPage />
              </UserRoute>
            }
          />
          <Route
            path="/auth/admin"
            element={
              <UserRoute>
                <AdminPage />
              </UserRoute>
            }
          />
          <Route
            path="/add-event"
            element={
              <PrivateRoute>
                <EventPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

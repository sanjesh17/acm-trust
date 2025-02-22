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
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import React, { useState, useEffect, useCallback } from "react";
import DonatePage from "./pages/DonatePage/DonatePage";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  fontSize: "2rem",
                  flexDirection: "column",
                }}
              >
                <h1 style={{ margin: "0px", fontWeight: "medium" }}>
                  OOPS, Page not found
                </h1>
                <h1 style={{ margin: "0px", fontWeight: "normal" }}>
                  Error: 404
                </h1>
              </div>
            }
          />
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
          <Route path="/payment" element={<PaymentPage />} />
          <Route
            path="/payment/anonymous"
            element={<PaymentPage paymentType="hidden" />}
          />
          <Route
            path="/add-event"
            element={
              <PrivateRoute>
                <EventPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

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

function App() {
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
            element={
              <PrivateRoute>
                <SurveyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <UserRoute>
                <AuthPage />
              </UserRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

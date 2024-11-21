import React from "react";
import "./login.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://acmback.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", "user");
        window.dispatchEvent(new Event("userLoginStatusChanged"));
        navigate("/home");
      } else {
        setError(data.error || "Failed to login");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-page-container">
      <div className="login-field-container">
        <div className="login-header-container">
          <h2>Sign in to your account</h2>
        </div>
        <div className="login-card-container">
          <div className="login-email-container">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="login-password-container">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <div
            className="login-button-container"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <div className="login-loader">
                <div className="spinner"></div>
              </div>
            ) : (
              <p>Sign in</p>
            )}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="login-footer-container">
          <p>
            Not an existing user?{" "}
            <Link
              to="/auth/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(Login);

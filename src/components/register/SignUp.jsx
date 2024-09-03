import React from "react";
import "./signup.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
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
      const response = await fetch(
        "https://acmback.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        alert("User Registered Successfully!");
      } else {
        setError(data.error || "Failed to signup");
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
          <h2>Create your account</h2>
        </div>
        <div className="login-card-container">
          <div className="login-name-container">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
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
              <p>Sign up</p>
            )}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="login-footer-container">
          <p>
            Are you an existing user?{" "}
            <Link
              to="/auth"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(SignUp);

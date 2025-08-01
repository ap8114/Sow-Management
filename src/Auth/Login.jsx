import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/staffmanagement");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div className="card shadow w-100" style={{ maxWidth: "950px", borderRadius: "1.5rem" }}>
        <div className="row g-0">
          {/* Image Column */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt="login"
              className="img-fluid rounded-start"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Form Column */}
          <div className="col-md-6 d-flex align-items-center p-5">
            <div className="w-100">
              <h2 className="fw-bold mb-3 text-center">Welcome Back!</h2>
              <p className="text-muted text-center mb-4">Please login to your account</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" required />
                </div>

                {/* Updated Password Field */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control pe-5"
                      required
                    />
                    <span
                      className="position-absolute top-50 translate-middle-y"
                      style={{ right: "15px", cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                          <i className="bi bi-eye-fill"></i>
                       
                      ) : (
                        <i className="bi bi-eye-slash-fill"></i>
                      )}
                    </span>
                  </div>
                </div>

                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                  </div>
                  <a href="#" className="text-decoration-none small">Forgot Password?</a>
                </div>

                {/* Submit Button */}
             <Link to="/okrs/companyokrs" className="text-decoration-none">
               <button type="submit" className="btn btn-warning w-100 py-2">
                  Login
                </button>
             </Link>

              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

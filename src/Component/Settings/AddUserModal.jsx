import React, { useState } from 'react';

const AddUserModal = ({ isOpen, onClose, formData, setFormData, onSubmit }) => {
  if (!isOpen) return null;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New User</h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group mb-3">
                <label>Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="form-control"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>

              <div className="form-group mb-3 position-relative">
                <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="form-control pe-4"
                />
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-2`}
                  style={{ cursor: 'pointer', marginTop:"11px" }}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>

              <div className="form-group mb-3 position-relative">
                <label>Confirm Password</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="form-control pe-4"
                />
                <i
                  className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-2`}
                  style={{ cursor: 'pointer', marginTop:"11px" }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
import React from 'react';

const CompanyModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Company</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" placeholder="Enter company name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Industry</label>
                <input type="text" className="form-control" placeholder="Enter industry" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter company email" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter phone number" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Number of Employees</label>
                <input type="text" className="form-control" placeholder="e.g., 50-100" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Annual Revenue</label>
                <input type="text" className="form-control" placeholder="e.g., $1M - $5M" />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter company address" />
              </div>
              <div className="col-12">
                <label className="form-label">Tags</label>
                <input type="text" className="form-control" placeholder="Enter tags (comma separated)" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-success">Add Company</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;
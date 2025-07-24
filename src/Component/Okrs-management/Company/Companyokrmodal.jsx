import React from 'react';

const Companyokrmodal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header border-bottom">
            <h5 className="modal-title font-weight-bold">Create New OKR</h5>
           
          </div>
          
          <div className="modal-body">
            <form className="mb-4">
              <div className="mb-4">
                <label className="form-label font-weight-medium">
                  Objective Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your objective"
                />
              </div>
              
              <div className="mb-4">
                <label className="form-label font-weight-medium">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Describe your objective"
                  maxLength="500"
                ></textarea>
              </div>
              
              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="form-label font-weight-medium">
                    Time Period
                  </label>
                  <select className="form-select">
                    <option>Q3 2025</option>
                    <option>Q4 2025</option>
                    <option>Q1 2026</option>
                  </select>
                </div>
                
                <div className="col-md-6">
                  <label className="form-label font-weight-medium">
                    Owner
                  </label>
                  <select className="form-select">
                    <option>John Smith</option>
                    <option>Sarah Johnson</option>
                    <option>Michael Brown</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label font-weight-medium">
                  Key Results
                </label>
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter a key result"
                    />
                    <button 
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          <div className="modal-footer border-top">
            <button 
              type="button" 
              className="btn btn-outline-secondary" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
            >
              Create OKR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companyokrmodal;
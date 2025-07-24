import React from 'react';

const OKRModal = ({ show, onHide }) => {
  if (!show) return null;

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header border-bottom">
            <h2 className="modal-title h5">Create New OKR</h2>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <form className="gap-3">
              <div className="mb-3">
                <label className="form-label">Objective Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your objective"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Describe your objective"
                  maxLength={500}
                ></textarea>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Time Period</label>
                  <select className="form-select">
                    <option>Q3 2025</option>
                    <option>Q4 2025</option>
                    <option>Q1 2026</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Owner</label>
                  <select className="form-select">
                    <option>John Smith</option>
                    <option>Sarah Johnson</option>
                    <option>Michael Brown</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Key Results</label>
                <div className="d-flex gap-2 mb-2">
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
            </form>
          </div>
          <div className="modal-footer border-top">
            <button
              onClick={onHide}
              className="btn btn-outline-secondary"
            >
              Cancel
            </button>
            <button className="btn btn-primary">
              Create OKR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OKRModal;
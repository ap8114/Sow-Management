import React from 'react';



const NewMetricModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New Metric</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Metric Name</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Enter metric name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select">
                <option>Marketing</option>
                <option>Cash Flow</option>
                <option>Productivity</option>
                <option>Profitability</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Formula</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Enter calculation formula"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Calculation Frequency</label>
              <select className="form-select">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button className="btn btn-primary">
              Create Metric
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMetricModal;
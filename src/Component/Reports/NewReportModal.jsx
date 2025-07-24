import React, { useState } from 'react';

const NewReportModal = ({ show, onClose }) => {
  const [newReport, setNewReport] = useState({
    name: '',
    type: 'Weekly',
    format: 'PDF',
    tags: ''
  });

  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Report</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="mb-3 col-12">
                  <label className="form-label">Report Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newReport.name}
                    onChange={(e) => setNewReport({ ...newReport, name: e.target.value })}
                    placeholder="Enter report name"
                  />
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <label className="form-label">Report Type</label>
                  <select
                    className="form-select"
                    value={newReport.type}
                    onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <label className="form-label">Format</label>
                  <select
                    className="form-select"
                    value={newReport.format}
                    onChange={(e) => setNewReport({ ...newReport, format: e.target.value })}
                  >
                    <option value="PDF">PDF</option>
                    <option value="CSV">CSV</option>
                    <option value="XLS">XLS</option>
                  </select>
                </div>
                <div className="mb-3 col-12">
                  <label className="form-label">Tags (comma separated)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newReport.tags}
                    onChange={(e) => setNewReport({ ...newReport, tags: e.target.value })}
                    placeholder="e.g. Sales, Weekly, Important"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between flex-wrap gap-2">
              <button onClick={onClose} className="btn btn-outline-secondary">
                Cancel
              </button>
              <button
                onClick={() => {
                  onClose();
                  // Handle creation logic here
                }}
                className="btn btn-primary"
              >
                Create Report
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
};

export default NewReportModal;

import React from 'react';

const OKRProgressModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-weight-bold">OKR Progress Details</h5>
            <button 
              type="button" 
              className="close" 
              onClick={onClose}
            >
              <span>&times;</span>
            </button>
          </div>
          
          <div className="modal-body">
            <form>
              <div className="mb-4">
                <label className="form-label font-weight-medium">Objective</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value="Increase Revenue Growth" 
                  readOnly 
                />
              </div>
              
              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="form-label font-weight-medium">Team</label>
                  <select className="form-select">
                    <option>Sales Team</option>
                    <option>Marketing Team</option>
                    <option>Engineering Team</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label font-weight-medium">Time Period</label>
                  <select className="form-select">
                    <option>Q3 2025</option>
                    <option>Q2 2025</option>
                    <option>Q1 2025</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="form-label font-weight-medium">Status</label>
                <select className="form-select">
                  <option>On Track</option>
                  <option>At Risk</option>
                  <option>Behind</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="form-label font-weight-medium">Current Progress</label>
                <div className="d-flex align-items-center gap-3">
                  <input 
                    type="range" 
                    className="form-range flex-grow-1" 
                    min="0" 
                    max="100" 
                    value="82"
                  />
                  <span className="font-weight-bold">82%</span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="form-label font-weight-medium">Key Results Progress</label>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Key Result</th>
                        <th width="150">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>New Customer Acquisition</td>
                        <td>
                          <div className="progress">
                            <div 
                              className="progress-bar bg-success" 
                              style={{ width: '85%' }}
                            >85%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Upsell Existing Accounts</td>
                        <td>
                          <div className="progress">
                            <div 
                              className="progress-bar bg-warning" 
                              style={{ width: '75%' }}
                            >75%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Market Expansion</td>
                        <td>
                          <div className="progress">
                            <div 
                              className="progress-bar bg-success" 
                              style={{ width: '90%' }}
                            >90%</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label font-weight-medium">Notes</label>
                <textarea 
                  className="form-control" 
                  rows="3" 
                  placeholder="Add any additional notes about progress..."
                ></textarea>
              </div>
            </form>
          </div>
          
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
            >
              Close
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OKRProgressModal;
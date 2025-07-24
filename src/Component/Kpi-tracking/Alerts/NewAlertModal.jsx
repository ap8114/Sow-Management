import React, { useState } from 'react';

const NewAlertModal = ({ show, onClose }) => {
  const [alertData, setAlertData] = useState({
    kpi: '',
    condition: 'below',
    threshold: '',
    severity: 'medium',
    notificationType: ['email']
  });

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('New alert created:', alertData);
    onClose();
  };

  const handleCheckboxChange = (type) => {
    setAlertData(prev => {
      const types = [...prev.notificationType];
      const index = types.indexOf(type);
      
      if (index === -1) {
        types.push(type);
      } else {
        types.splice(index, 1);
      }
      
      return {...prev, notificationType: types};
    });
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-weight-bold">Create New Alert</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">KPI</label>
                <select
                  className="form-select"
                  value={alertData.kpi}
                  onChange={(e) => setAlertData({...alertData, kpi: e.target.value})}
                  required
                >
                  <option value="">Select KPI</option>
                  <option value="revenue-growth">Revenue Growth Rate</option>
                  <option value="customer-satisfaction">Customer Satisfaction Score</option>
                  <option value="response-time">Website Response Time</option>
                  <option value="conversion-rate">Conversion Rate</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Alert Condition</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="condition"
                      id="below"
                      value="below"
                      checked={alertData.condition === 'below'}
                      onChange={() => setAlertData({...alertData, condition: 'below'})}
                    />
                    <label className="form-check-label" htmlFor="below">
                      Below
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="condition"
                      id="above"
                      value="above"
                      checked={alertData.condition === 'above'}
                      onChange={() => setAlertData({...alertData, condition: 'above'})}
                    />
                    <label className="form-check-label" htmlFor="above">
                      Above
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Threshold Value</label>
                <input
                  type="text"
                  className="form-control"
                  value={alertData.threshold}
                  onChange={(e) => setAlertData({...alertData, threshold: e.target.value})}
                  placeholder="Enter threshold value"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Severity Level</label>
                <select
                  className="form-select"
                  value={alertData.severity}
                  onChange={(e) => setAlertData({...alertData, severity: e.target.value})}
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Notification Methods</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="emailNotification"
                    checked={alertData.notificationType.includes('email')}
                    onChange={() => handleCheckboxChange('email')}
                  />
                  <label className="form-check-label" htmlFor="emailNotification">
                    Email Notification
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="pushNotification"
                    checked={alertData.notificationType.includes('push')}
                    onChange={() => handleCheckboxChange('push')}
                  />
                  <label className="form-check-label" htmlFor="pushNotification">
                    Push Notification
                  </label>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Create Alert
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAlertModal;
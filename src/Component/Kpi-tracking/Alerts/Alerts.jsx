import React, { useState } from 'react';
import NewAlertModal from './NewAlertModal';

const Alerts = () => {
  const [isNewAlertModalOpen, setIsNewAlertModalOpen] = useState(false);

  return (
    <div className="">
      {/* Main Content Area */}
      <main className="">
        <div className="">
          <div className="card-body">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
              <div className="mb-3 mb-md-0">
                <h1 className="h2 font-weight-bold mb-1">Alerts & Thresholds</h1>
                <p className="text-muted">Manage KPI alerts and threshold settings</p>
              </div>
              <button 
                onClick={() => setIsNewAlertModalOpen(true)}
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                <i className="fas fa-plus"></i>
                <span>New Alert</span>
              </button>
            </div>

            {/* Alert Rules */}
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="h5 font-weight-semibold mb-0">Active Alert Rules</h3>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted small">Show:</span>
                  <select className="form-select form-select-sm" style={{ width: '120px' }}>
                    <option value="all">All Rules</option>
                    <option value="active">Active Only</option>
                    <option value="inactive">Inactive Only</option>
                  </select>
                </div>
              </div>
              <div className="list-group list-group-flush">
                {/* Alert Rule 1 */}
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-3">
                      <span className="badge bg-success rounded-circle p-1"></span>
                      <span className="font-weight-medium">Revenue Growth Rate</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-link text-muted p-0">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-link text-muted p-0">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <p className="small text-muted mb-0 ps-4">Alert when below 5% monthly growth</p>
                </div>

                {/* Alert Rule 2 */}
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-3">
                      <span className="badge bg-danger rounded-circle p-1"></span>
                      <span className="font-weight-medium">Customer Satisfaction Score</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-link text-muted p-0">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-link text-muted p-0">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <p className="small text-muted mb-0 ps-4">Alert when below 4.5/5.0 rating</p>
                </div>

                {/* Alert Rule 3 */}
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-3">
                      <span className="badge bg-warning rounded-circle p-1"></span>
                      <span className="font-weight-medium">Website Response Time</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-link text-muted p-0">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-link text-muted p-0">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <p className="small text-muted mb-0 ps-4">Alert when exceeds 2 seconds</p>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="card">
              <div className="card-header">
                <h3 className="h5 font-weight-semibold mb-0">Notification Preferences</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="font-weight-medium">Email Notifications</div>
                      <div className="small text-muted">Receive alerts via email</div>
                    </div>
                    <div className="form-check form-switch">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id="emailNotifications" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="font-weight-medium">Push Notifications</div>
                      <div className="small text-muted">Browser push notifications</div>
                    </div>
                    <div className="form-check form-switch">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id="pushNotifications" 
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* New Alert Modal */}
      <NewAlertModal 
        show={isNewAlertModalOpen} 
        onClose={() => setIsNewAlertModalOpen(false)}
      />
    </div>
  );
};

export default Alerts;
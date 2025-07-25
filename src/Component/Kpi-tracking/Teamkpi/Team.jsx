import React, { useState } from 'react';

const Team = () => {
  const [isNewKPIModalOpen, setIsNewKPIModalOpen] = useState(false);
  const [newKPI, setNewKPI] = useState({
    title: '',
    target: '',
    frequency: 'Monthly',
    description: ''
  });

  return (
    <div className="">
      {/* Main Content Area */}
      <main className="">
        <div className="">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div className="mb-3 mb-md-0">
              <h3 className=" fw-bold mb-2">Team KPIs</h3>
              <p className="text-muted mb-0">Monitor and track team performance metrics</p>
            </div>
            <button
              onClick={() => setIsNewKPIModalOpen(true)}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <i className="fas fa-plus"></i>
              <span>New KPI</span>
            </button>
          </div>

          <div className="row g-4">
            {/* Sales Team Card */}
            <div className="col-12 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-blue-50 border-bottom">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <i className="fas fa-users text-blue-600"></i>
                      <h3 className="h5 mb-0 fw-semibold">Sales Team</h3>
                    </div>
                    <span className="badge bg-blue-100 text-blue-800">8 Members</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="text-muted small">Quarterly Sales Target</div>
                      <div className="h4 fw-bold">$850,000</div>
                      <div className="text-muted small">Current: $720,500</div>
                    </div>
                    <div className="text-center">
                      <div className="h4 fw-bold text-blue-600">85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Team Card */}
            <div className="col-12 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-purple-50 border-bottom">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <i className="fas fa-bullhorn text-purple-600"></i>
                      <h3 className="h5 mb-0 fw-semibold">Marketing Team</h3>
                    </div>
                    <span className="badge bg-purple-100 text-purple-800">5 Members</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="text-muted small">Lead Generation</div>
                      <div className="h4 fw-bold">250 Leads</div>
                      <div className="text-muted small">Monthly Target: 300</div>
                    </div>
                    <div className="text-center">
                      <div className="h4 fw-bold text-purple-600">83%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New KPI Modal */}
          {isNewKPIModalOpen && (
            <div className="modal show d-block" tabIndex={-1} role="dialog">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Create New KPI</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setIsNewKPIModalOpen(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">KPI Title</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newKPI.title}
                        onChange={(e) => setNewKPI({...newKPI, title: e.target.value})}
                        placeholder="Enter KPI title"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Target Value</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newKPI.target}
                        onChange={(e) => setNewKPI({...newKPI, target: e.target.value})}
                        placeholder="Enter target value"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Frequency</label>
                      <select
                        className="form-select"
                        value={newKPI.frequency}
                        onChange={(e) => setNewKPI({...newKPI, frequency: e.target.value})}
                      >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={newKPI.description}
                        onChange={(e) => setNewKPI({...newKPI, description: e.target.value})}
                        placeholder="Enter KPI description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setIsNewKPIModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        // Handle save KPI logic here
                        setIsNewKPIModalOpen(false);
                      }}
                    >
                      Save KPI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Custom CSS for colors not in Bootstrap */}
      <style>{`
        .bg-blue-50 { background-color: #eff6ff; }
        .bg-purple-50 { background-color: #f5f3ff; }
        .bg-blue-100 { background-color: #dbeafe; }
        .bg-purple-100 { background-color: #e9d5ff; }
        .text-blue-600 { color: #2563eb; }
        .text-purple-600 { color: #9333ea; }
        .text-blue-800 { color: #1e40af; }
        .text-purple-800 { color: #6b21a8; }
      `}</style>
    </div>
  );
};

export default Team;
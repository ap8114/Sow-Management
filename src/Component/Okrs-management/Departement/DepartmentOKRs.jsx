import React, { useState } from 'react';

const DepartmentOKRs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      {/* Header Section */}
      <div className="mb-3 mb-md-4">
        <h1 className="h2 fw-bold mb-1 mb-md-2">Department OKRs</h1>
        <p className="text-muted mb-0">Track and manage department-specific objectives and key results</p>
      </div>

      {/* Department Filter - Responsive Layout */}
      <div className="row align-items-center mb-3 mb-md-4 g-2">
       <div className="row g-3 align-items-stretch">
  {/* Left Section */}
  <div className="col-12 col-md-6">
    <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2">
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary d-flex align-items-center gap-2 flex-shrink-0  w-sm-auto"
      >
        <i className="fas fa-plus"></i>
        <span className="d-none d-sm-inline">Add Department OKR</span>
        <span className="d-sm-none">Add</span>
      </button>

      <select className="form-select  w-sm-auto">
        <option>All Departments</option>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
      </select>
    </div>
  </div>

  {/* Right Section */}
  <div className="col-12  col-md-3">
    <div className="d-flex justify-content-start justify-content-md-end">
      <select className="form-select w-md-auto">
        <option>Q3 2025</option>
        <option>Q2 2025</option>
        <option>Q1 2025</option>
      </select>
    </div>
  </div>
</div>

      </div>

      {/* Department OKRs Cards */}
      <div className="row g-3">
        {/* Sales Department */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light d-flex flex-column flex-sm-row justify-content-between align-items-center py-3">
              <div className="d-flex align-items-center gap-2 gap-sm-3 mb-2 mb-sm-0">
                <div className="bg-primary bg-opacity-10 rounded p-2">
                  <i className="fas fa-chart-line text-primary fs-5"></i>
                </div>
                <div>
                  <h3 className="h5 mb-0">Sales Department</h3>
                  <small className="text-muted">Led by Sarah Connor</small>
                </div>
              </div>
              <span className="badge bg-light text-dark">3 Active OKRs</span>
            </div>
            <div className="card-body">
              {/* OKR Item */}
              <div className="mb-3">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <h4 className="h6 mb-1">Increase Enterprise Sales Revenue</h4>
                    <p className="text-muted small mb-0">Target: $2M in Q3 2025</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="fw-bold text-primary">65%</span>
                    <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                      <div className="progress-bar bg-primary" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second OKR Item */}
              <div className="pt-3 border-top">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <h4 className="h6 mb-1">Improve Lead Generation</h4>
                    <p className="text-muted small mb-0">Target: 1000 qualified leads</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="fw-bold text-success">80%</span>
                    <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                      <div className="progress-bar bg-success" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Department */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light d-flex flex-column flex-sm-row justify-content-between align-items-center py-3">
              <div className="d-flex align-items-center gap-2 gap-sm-3 mb-2 mb-sm-0">
                <div className="bg-info bg-opacity-10 rounded p-2">
                  <i className="fas fa-code text-info fs-5"></i>
                </div>
                <div>
                  <h3 className="h5 mb-0">Engineering Department</h3>
                  <small className="text-muted">Led by John Doe</small>
                </div>
              </div>
              <span className="badge bg-light text-dark">4 Active OKRs</span>
            </div>
            <div className="card-body">
              {/* OKR Item */}
              <div className="mb-3">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <h4 className="h6 mb-1">Improve System Performance</h4>
                    <p className="text-muted small mb-0">Target: 99.99% uptime</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="fw-bold text-info">90%</span>
                    <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                      <div className="progress-bar bg-info" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second OKR Item */}
              <div className="pt-3 border-top">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <h4 className="h6 mb-1">Release New Features</h4>
                    <p className="text-muted small mb-0">Target: 5 major features</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="fw-bold text-info">60%</span>
                    <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                      <div className="progress-bar bg-info" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OKRs List */}
      <div className="mt-4">
        {/* OKR Item */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-3 mb-3">
              <div className="flex-grow-1">
                <h3 className="h4 mb-1">Increase Market Share</h3>
                <div className="d-flex flex-wrap gap-2 gap-sm-4 text-muted small">
                  <span><i className="fas fa-calendar me-1"></i>Q3 2025</span>
                  <span><i className="fas fa-user me-1"></i>John Smith</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                <span className="h4 fw-bold text-primary">75%</span>
                <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Key Results */}
            <div className="mt-3">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center p-2 p-sm-3 bg-light rounded mb-2">
                <div className="flex-grow-1">
                  <h4 className="h6 mb-1">Expand to 5 new regional markets</h4>
                  <p className="text-muted small mb-0">3 out of 5 markets entered</p>
                </div>
                <span className="h5 fw-semibold text-primary mt-2 mt-sm-0">60%</span>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center p-2 p-sm-3 bg-light rounded mb-2">
                <div className="flex-grow-1">
                  <h4 className="h6 mb-1">Achieve 95% customer satisfaction score</h4>
                  <p className="text-muted small mb-0">Current: 92%</p>
                </div>
                <span className="h5 fw-semibold text-primary mt-2 mt-sm-0">85%</span>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center p-2 p-sm-3 bg-light rounded">
                <div className="flex-grow-1">
                  <h4 className="h6 mb-1">Increase monthly recurring revenue by 50%</h4>
                  <p className="text-muted small mb-0">Current increase: 40%</p>
                </div>
                <span className="h5 fw-semibold text-primary mt-2 mt-sm-0">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1050 }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New OKR</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Objective</label>
                    <input type="text" className="form-control" placeholder="Enter your objective" />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Department</label>
                    <select className="form-select">
                      <option>Select Department</option>
                      <option>Sales</option>
                      <option>Marketing</option>
                      <option>Engineering</option>
                      <option>HR</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Quarter</label>
                    <select className="form-select">
                      <option>Q3 2025</option>
                      <option>Q4 2025</option>
                      <option>Q1 2026</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Owner</label>
                    <input type="text" className="form-control" placeholder="Enter owner name" />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Key Results</label>
                    <div className="input-group mb-2">
                      <input type="text" className="form-control" placeholder="Key result 1" />
                      <button className="btn btn-outline-secondary" type="button">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="input-group mb-2">
                      <input type="text" className="form-control" placeholder="Key result 2" />
                      <button className="btn btn-outline-secondary" type="button">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">Save OKR</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentOKRs;
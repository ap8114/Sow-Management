import React from 'react';

const DepartmentOKRs = ({ setIsModalOpen }) => {
  return (
    <div className="bg-white rounded shadow-sm p-4">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="h2 mb-2">Department OKRs</h1>
        <p className="text-muted">Track and manage department-specific objectives and key results</p>
      </div>

      {/* Department Filter */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            <span>Add Department OKR</span>
          </button>
          <select className="form-select">
            <option>All Departments</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
          </select>
        </div>
        <div className="d-flex align-items-center gap-2">
          <select className="form-select">
            <option>Q3 2025</option>
            <option>Q2 2025</option>
            <option>Q1 2025</option>
          </select>
        </div>
      </div>

      {/* Department OKRs Cards */}
      <div className="row g-3">
        {/* Sales Department */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-blue-50 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-blue-100 rounded p-2">
                  <i className="fas fa-chart-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="h5 mb-0">Sales Department</h3>
                  <small className="text-muted">Led by Sarah Connor</small>
                </div>
              </div>
              <span className="badge bg-blue-100 text-blue-600">3 Active OKRs</span>
            </div>
            <div className="card-body">
              {/* OKR Item */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4 className="h6 mb-1">Increase Enterprise Sales Revenue</h4>
                    <p className="text-muted small">Target: $2M in Q3 2025</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold text-blue-600">65%</span>
                    <div className="progress" style={{ width: '100px', height: '8px' }}>
                      <div className="progress-bar bg-blue-600" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second OKR Item */}
              <div className="pt-3 border-top">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4 className="h6 mb-1">Improve Lead Generation</h4>
                    <p className="text-muted small">Target: 1000 qualified leads</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold text-success">80%</span>
                    <div className="progress" style={{ width: '100px', height: '8px' }}>
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
            <div className="card-header bg-purple-50 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-purple-100 rounded p-2">
                  <i className="fas fa-code text-purple-600"></i>
                </div>
                <div>
                  <h3 className="h5 mb-0">Engineering Department</h3>
                  <small className="text-muted">Led by John Doe</small>
                </div>
              </div>
              <span className="badge bg-purple-100 text-purple-600">4 Active OKRs</span>
            </div>
            <div className="card-body">
              {/* OKR Item */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4 className="h6 mb-1">Improve System Performance</h4>
                    <p className="text-muted small">Target: 99.99% uptime</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold text-purple-600">90%</span>
                    <div className="progress" style={{ width: '100px', height: '8px' }}>
                      <div className="progress-bar bg-purple-600" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second OKR Item */}
              <div className="pt-3 border-top">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4 className="h6 mb-1">Release New Features</h4>
                    <p className="text-muted small">Target: 5 major features</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold text-purple-600">60%</span>
                    <div className="progress" style={{ width: '100px', height: '8px' }}>
                      <div className="progress-bar bg-purple-600" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
        <div className="d-flex gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            <span>Add New OKR</span>
          </button>
          <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
            <i className="fas fa-filter"></i>
            <span>Filter</span>
          </button>
        </div>
        <div className="d-flex align-items-center gap-2">
          <select className="form-select">
            <option>Q3 2025</option>
            <option>Q2 2025</option>
            <option>Q1 2025</option>
          </select>
        </div>
      </div>

      {/* OKRs List */}
      <div className="mt-4">
        {/* OKR Item */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h3 className="h4 mb-2">Increase Market Share</h3>
                <div className="d-flex gap-4 text-muted small">
                  <span><i className="fas fa-calendar me-2"></i>Q3 2025</span>
                  <span><i className="fas fa-user me-2"></i>John Smith</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="h4 fw-bold text-blue-600">75%</span>
                <div className="progress" style={{ width: '120px', height: '8px' }}>
                  <div className="progress-bar bg-blue-600" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Key Results */}
            <div className="mt-4">
              <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded mb-2">
                <div>
                  <h4 className="h6 mb-1">Expand to 5 new regional markets</h4>
                  <p className="text-muted small mb-0">3 out of 5 markets entered</p>
                </div>
                <span className="h5 fw-semibold text-blue-600">60%</span>
              </div>
              <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded mb-2">
                <div>
                  <h4 className="h6 mb-1">Achieve 95% customer satisfaction score</h4>
                  <p className="text-muted small mb-0">Current: 92%</p>
                </div>
                <span className="h5 fw-semibold text-blue-600">85%</span>
              </div>
              <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                <div>
                  <h4 className="h6 mb-1">Increase monthly recurring revenue by 50%</h4>
                  <p className="text-muted small mb-0">Current increase: 40%</p>
                </div>
                <span className="h5 fw-semibold text-blue-600">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentOKRs;
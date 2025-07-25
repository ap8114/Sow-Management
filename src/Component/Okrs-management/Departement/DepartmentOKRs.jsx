import React, { useState } from 'react';

const DepartmentOKRs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <div className="">
        <h3 className="fw-bold mb-1 mb-md-2">Department OKRs</h3>
        <p className="text-muted small mb-0">Track and manage department-specific objectives and key results</p>
      </div>

      {/* Filters */}
      <div className="row align-items-center mb-3 mb-md-4 g-2">
        <div className="row g-3 align-items-stretch">
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-sm d-flex align-items-center gap-2 flex-shrink-0"
              >
                <i className="fas fa-plus"></i>
                <span className="d-none d-sm-inline">Add Department OKR</span>
                <span className="d-sm-none">Add</span>
              </button>

              <select className="form-select form-select-sm">
                <option>All Departments</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="d-flex justify-content-start justify-content-md-end">
              <select className="form-select form-select-sm">
                <option>Q3 2025</option>
                <option>Q2 2025</option>
                <option>Q1 2025</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* OKR Cards */}
      <div className="row g-3">
        {/* Sales */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light d-flex flex-column flex-sm-row justify-content-between align-items-center py-2">
              <div className="d-flex align-items-center gap-2 gap-sm-3 mb-2 mb-sm-0">
                <div className="bg-primary bg-opacity-10 rounded p-2">
                  <i className="fas fa-chart-line text-primary fs-6"></i>
                </div>
                <div>
                  <h6 className="mb-0">Sales Department</h6>
                  <small className="text-muted">Led by Sarah Connor</small>
                </div>
              </div>
              <span className="badge bg-light text-dark small">3 Active OKRs</span>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <p className="fw-semibold small mb-1">Increase Enterprise Sales Revenue</p>
                    <p className="text-muted small mb-0">Target: $2M in Q3 2025</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="text-primary small fw-semibold">65%</span>
                    <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                      <div className="progress-bar bg-primary" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-top">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <p className="fw-semibold small mb-1">Improve Lead Generation</p>
                    <p className="text-muted small mb-0">Target: 1000 qualified leads</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="text-success small fw-semibold">80%</span>
                    <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                      <div className="progress-bar bg-success" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light d-flex flex-column flex-sm-row justify-content-between align-items-center py-2">
              <div className="d-flex align-items-center gap-2 gap-sm-3 mb-2 mb-sm-0">
                <div className="bg-info bg-opacity-10 rounded p-2">
                  <i className="fas fa-code text-info fs-6"></i>
                </div>
                <div>
                  <h6 className="mb-0">Engineering Department</h6>
                  <small className="text-muted">Led by John Doe</small>
                </div>
              </div>
              <span className="badge bg-light text-dark small">4 Active OKRs</span>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <p className="fw-semibold small mb-1">Improve System Performance</p>
                    <p className="text-muted small mb-0">Target: 99.99% uptime</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="text-info small fw-semibold">90%</span>
                    <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                      <div className="progress-bar bg-info" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-top">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                  <div className="flex-grow-1">
                    <p className="fw-semibold small mb-1">Release New Features</p>
                    <p className="text-muted small mb-0">Target: 5 major features</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                    <span className="text-info small fw-semibold">60%</span>
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

      {/* Main OKR */}
      <div className="mt-3">
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-3 mb-3">
              <div className="flex-grow-1">
                <h6 className="mb-1">Increase Market Share</h6>
                <div className="d-flex flex-wrap gap-2 text-muted small">
                  <span><i className="fas fa-calendar me-1"></i>Q3 2025</span>
                  <span><i className="fas fa-user me-1"></i>John Smith</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                <span className="text-primary small fw-bold">75%</span>
                <div className="progress flex-grow-1" style={{ height: '6px', minWidth: '80px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* Key Results */}
            <div className="mt-2">
              {[
                { title: 'Expand to 5 new regional markets', note: '3 out of 5 markets entered', percent: '60%' },
                { title: 'Achieve 95% customer satisfaction score', note: 'Current: 92%', percent: '85%' },
                { title: 'Increase monthly recurring revenue by 50%', note: 'Current increase: 40%', percent: '80%' }
              ].map((kr, i) => (
                <div key={i} className="d-flex flex-column flex-sm-row justify-content-between align-items-center p-2 bg-light rounded mb-2">
                  <div className="flex-grow-1">
                    <p className="fw-semibold small mb-1">{kr.title}</p>
                    <p className="text-muted small mb-0">{kr.note}</p>
                  </div>
                  <span className="small fw-bold text-primary mt-2 mt-sm-0">{kr.percent}</span>
                </div>
              ))}
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
                <h6 className="modal-title">Add New OKR</h6>
                <button className="btn-close" onClick={() => setIsModalOpen(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  {['Objective', 'Owner'].map((label, i) => (
                    <div key={i} className="mb-2">
                      <label className="form-label small">{label}</label>
                      <input type="text" className="form-control form-control-sm" placeholder={`Enter ${label.toLowerCase()}`} />
                    </div>
                  ))}
                  {['Department', 'Quarter'].map((label, i) => (
                    <div key={i} className="mb-2">
                      <label className="form-label small">{label}</label>
                      <select className="form-select form-select-sm">
                        {label === 'Department' ? (
                          <>
                            <option>Select Department</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                          </>
                        ) : (
                          <>
                            <option>Q3 2025</option>
                            <option>Q4 2025</option>
                            <option>Q1 2026</option>
                          </>
                        )}
                      </select>
                    </div>
                  ))}
                  <div className="mb-2">
                    <label className="form-label small">Key Results</label>
                    {[1, 2].map((i) => (
                      <div className="input-group input-group-sm mb-2" key={i}>
                        <input type="text" className="form-control" placeholder={`Key result ${i}`} />
                        <button className="btn btn-outline-secondary btn-sm" type="button">
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary btn-sm" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button className="btn btn-primary btn-sm">Save OKR</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentOKRs;

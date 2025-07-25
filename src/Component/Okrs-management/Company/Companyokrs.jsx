import React, { useState } from 'react';
import Companyokrmodal from './Companyokrmodal';

const Companyokrs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <main className="">
        <div className="">
          {/* Header Section */}
          <div className="mb-4">
            <h3 className="fw-bold mb-1">Company OKRs</h3>
            <p className="text-muted small">Set and track company-wide objectives and key results</p>
          </div>

          {/* Action Buttons */}
          <div className="row mb-4">
            {/* Left Buttons Section */}
            <div className="col-12 col-md-8 mb-3 mb-md-0">
              <div className="d-flex flex-column flex-sm-row flex-wrap gap-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary d-flex align-items-center gap-2 btn-sm"
                >
                  <i className="fas fa-plus"></i>
                  <span>Add New OKR</span>
                </button>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2 btn-sm">
                  <i className="fas fa-filter"></i>
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Right Select Dropdown Section */}
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-md-end">
                <select className="form-select form-select-sm w-100 w-md-auto">
                  <option>Q3 2025</option>
                  <option>Q2 2025</option>
                  <option>Q1 2025</option>
                  <option>Q4 2024</option>
                </select>
              </div>
            </div>
          </div>

          {/* OKRs List */}
          <div className="mb-4">
            {/* First OKR */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="text-dark mb-1">Increase Market Share</h5>
                    <div className="d-flex align-items-center gap-3 text-muted small">
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-calendar"></i> Q3 2025
                      </span>
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-user"></i> John Smith
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="h6 text-primary mb-0">75%</span>
                    <div className="progress" style={{ width: '130px', height: '6px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                <div className="mt-3">
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                    <div>
                      <p className="mb-1 small fw-semibold text-dark">Expand to 5 new regional markets</p>
                      <p className="small text-muted">3 out of 5 markets entered</p>
                    </div>
                    <span className="small text-primary fw-semibold">60%</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                    <div>
                      <p className="mb-1 small fw-semibold text-dark">Achieve 95% customer satisfaction score</p>
                      <p className="small text-muted">Current: 92%</p>
                    </div>
                    <span className="small text-primary fw-semibold">85%</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                    <div>
                      <p className="mb-1 small fw-semibold text-dark">Increase monthly recurring revenue by 50%</p>
                      <p className="small text-muted">Current increase: 40%</p>
                    </div>
                    <span className="small text-primary fw-semibold">80%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second OKR */}
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="text-dark mb-1">Enhance Product Innovation</h5>
                    <div className="d-flex align-items-center gap-3 text-muted small">
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-calendar"></i> Q3 2025
                      </span>
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-user"></i> Sarah Johnson
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="h6 text-primary mb-0">45%</span>
                    <div className="progress" style={{ width: '120px', height: '6px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '45%' }}
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                <div className="mt-3">
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                    <div>
                      <p className="mb-1 small fw-semibold text-dark">Launch 3 new product features</p>
                      <p className="small text-muted">1 out of 3 features launched</p>
                    </div>
                    <span className="small text-primary fw-semibold">33%</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                    <div>
                      <p className="mb-1 small fw-semibold text-dark">Reduce development cycle time by 30%</p>
                      <p className="small text-muted">Current reduction: 15%</p>
                    </div>
                    <span className="small text-primary fw-semibold">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <Companyokrmodal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Companyokrs;

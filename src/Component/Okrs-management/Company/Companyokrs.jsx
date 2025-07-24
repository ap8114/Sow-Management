import React, { useState } from 'react';
import Companyokrmodal from './Companyokrmodal';

const Companyokrs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      {/* Main Content Area */}
      <main className="">
        <div className="">
          {/* Header Section */}
          <div className="mb-4">
            <h1 className="h2 fw-bold mb-2">Company OKRs</h1>
            <p className="text-muted">Set and track company-wide objectives and key results</p>
          </div>
          
          {/* Action Buttons */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex gap-3">
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
            <div className="d-flex align-items-center gap-3">
              <select className="form-select">
                <option>Q3 2025</option>
                <option>Q2 2025</option>
                <option>Q1 2025</option>
                <option>Q4 2024</option>
              </select>
            </div>
          </div>
          
          {/* OKRs List */}
          <div className="mb-4">
            {/* OKR Item */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="h4 font-weight-semibold text-dark mb-2">Increase Market Share</h3>
                    <div className="d-flex align-items-center gap-3 text-muted small">
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-calendar"></i>
                        Q3 2025
                      </span>
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-user"></i>
                        John Smith
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="h3 font-weight-bold text-primary">75%</span>
                    <div className="progress" style={{ width: '130px', height: '8px' }}>
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
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-3">
                    <div>
                      <h4 className="font-weight-medium text-dark">Expand to 5 new regional markets</h4>
                      <p className="small text-muted mt-1">3 out of 5 markets entered</p>
                    </div>
                    <span className="h5 font-weight-semibold text-primary">60%</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-3">
                    <div>
                      <h4 className="font-weight-medium text-dark">Achieve 95% customer satisfaction score</h4>
                      <p className="small text-muted mt-1">Current: 92%</p>
                    </div>
                    <span className="h5 font-weight-semibold text-primary">85%</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                    <div>
                      <h4 className="font-weight-medium text-dark">Increase monthly recurring revenue by 50%</h4>
                      <p className="small text-muted mt-1">Current increase: 40%</p>
                    </div>
                    <span className="h5 font-weight-semibold text-primary">80%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second OKR Item */}
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="h4 font-weight-semibold text-dark mb-2">Enhance Product Innovation</h3>
                    <div className="d-flex align-items-center gap-3 text-muted small">
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-calendar"></i>
                        Q3 2025
                      </span>
                      <span className="d-flex align-items-center gap-2">
                        <i className="fas fa-user"></i>
                        Sarah Johnson
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="h3 font-weight-bold text-primary">45%</span>
                    <div className="progress" style={{ width: '130px', height: '8px' }}>
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
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-3">
                    <div>
                      <h4 className="font-weight-medium text-dark">Launch 3 new product features</h4>
                      <p className="small text-muted mt-1">1 out of 3 features launched</p>
                    </div>
                    <span className="h5 font-weight-semibold text-primary">33%</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                    <div>
                      <h4 className="font-weight-medium text-dark">Reduce development cycle time by 30%</h4>
                      <p className="small text-muted mt-1">Current reduction: 15%</p>
                    </div>
                    <span className="h5 font-weight-semibold text-primary">50%</span>
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
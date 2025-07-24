import React, { useState } from 'react';
import OKRProgressModal from './OKRProgressModal';

const ProgressOKRs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      {/* Main Content Area */}
      <main className="">
        <div className="">
          {/* Header Section */}
          <div className="mb-4">
            <h1 className="h2 font-weight-bold text-dark mb-2">OKR Progress Tracker</h1>
            <p className="text-muted">Track progress across all objectives and key results</p>
          </div>

          {/* Progress Overview Cards */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="bg-white rounded p-2">
                      <i className="fas fa-bullseye text-primary"></i>
                    </div>
                    <span className="h3 font-weight-bold">24</span>
                  </div>
                  <h3 className="h6 font-weight-medium mb-1">Total OKRs</h3>
                  <p className="small mb-0">Active objectives</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="bg-white rounded p-2">
                      <i className="fas fa-check-circle text-success"></i>
                    </div>
                    <span className="h3 font-weight-bold">18</span>
                  </div>
                  <h3 className="h6 font-weight-medium mb-1">On Track</h3>
                  <p className="small mb-0">75% of total</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="card bg-warning text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="bg-white rounded p-2">
                      <i className="fas fa-exclamation-triangle text-warning"></i>
                    </div>
                    <span className="h3 font-weight-bold">4</span>
                  </div>
                  <h3 className="h6 font-weight-medium mb-1">At Risk</h3>
                  <p className="small mb-0">17% of total</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-danger text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="bg-white rounded p-2">
                      <i className="fas fa-times-circle text-danger"></i>
                    </div>
                    <span className="h3 font-weight-bold">2</span>
                  </div>
                  <h3 className="h6 font-weight-medium mb-1">Behind</h3>
                  <p className="small mb-0">8% of total</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <div className="d-flex flex-wrap gap-3 mb-3 mb-md-0">
              <select className="form-select">
                <option>All Teams</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Product</option>
              </select>
              <select className="form-select">
                <option>All Status</option>
                <option>On Track</option>
                <option>At Risk</option>
                <option>Behind</option>
              </select>
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>Q3 2025</option>
              <option>Q2 2025</option>
              <option>Q1 2025</option>
            </select>
          </div>

          {/* Progress List */}
          <div className="mb-4">
            {/* OKR Item 1 */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3 mb-md-0">
                    <div className="bg-primary bg-opacity-10 rounded p-3">
                      <i className="fas fa-chart-line text-primary"></i>
                    </div>
                    <div>
                      <h3 className="h5 font-weight-semibold text-dark">Increase Revenue Growth</h3>
                      <div className="d-flex flex-wrap gap-3 text-muted small">
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-user"></i>
                          Sales Team
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-calendar"></i>
                          Q3 2025
                        </span>
                        <span className="d-flex align-items-center gap-1 text-success">
                          <i className="fas fa-circle text-xs"></i>
                          On Track
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-md-right">
                    <div className="h3 font-weight-bold text-primary mb-2">82%</div>
                    <div className="progress" style={{ width: '130px', height: '6px' }}>
                      <div 
                        className="progress-bar bg-primary" 
                        role="progressbar" 
                        style={{ width: '82%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="row bg-light rounded p-3">
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">85%</div>
                    <div className="small text-muted">New Customer Acquisition</div>
                  </div>
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">75%</div>
                    <div className="small text-muted">Upsell Existing Accounts</div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="h4 font-weight-semibold">90%</div>
                    <div className="small text-muted">Market Expansion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* OKR Item 2 */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3 mb-md-0">
                    <div className="bg-purple bg-opacity-10 rounded p-3">
                      <i className="fas fa-code text-purple"></i>
                    </div>
                    <div>
                      <h3 className="h5 font-weight-semibold text-dark">Improve Product Quality</h3>
                      <div className="d-flex flex-wrap gap-3 text-muted small">
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-user"></i>
                          Engineering Team
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-calendar"></i>
                          Q3 2025
                        </span>
                        <span className="d-flex align-items-center gap-1 text-warning">
                          <i className="fas fa-circle text-xs"></i>
                          At Risk
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-md-right">
                    <div className="h3 font-weight-bold text-purple mb-2">58%</div>
                    <div className="progress" style={{ width: '130px', height: '6px' }}>
                      <div 
                        className="progress-bar bg-purple" 
                        role="progressbar" 
                        style={{ width: '58%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="row bg-light rounded p-3">
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">45%</div>
                    <div className="small text-muted">Bug Resolution Rate</div>
                  </div>
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">65%</div>
                    <div className="small text-muted">Code Coverage</div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="h4 font-weight-semibold">65%</div>
                    <div className="small text-muted">Performance Optimization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* OKR Item 3 */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3 mb-md-0">
                    <div className="bg-success bg-opacity-10 rounded p-3">
                      <i className="fas fa-bullhorn text-success"></i>
                    </div>
                    <div>
                      <h3 className="h5 font-weight-semibold text-dark">Enhance Brand Awareness</h3>
                      <div className="d-flex flex-wrap gap-3 text-muted small">
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-user"></i>
                          Marketing Team
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-calendar"></i>
                          Q3 2025
                        </span>
                        <span className="d-flex align-items-center gap-1 text-success">
                          <i className="fas fa-circle text-xs"></i>
                          On Track
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-md-right">
                    <div className="h3 font-weight-bold text-success mb-2">73%</div>
                    <div className="progress" style={{ width: '130px', height: '6px' }}>
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{ width: '73%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="row bg-light rounded p-3">
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">80%</div>
                    <div className="small text-muted">Social Media Reach</div>
                  </div>
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">70%</div>
                    <div className="small text-muted">Content Engagement</div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="h4 font-weight-semibold">70%</div>
                    <div className="small text-muted">Brand Recognition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* OKR Item 4 */}
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3 mb-md-0">
                    <div className="bg-warning bg-opacity-10 rounded p-3">
                      <i className="fas fa-users text-warning"></i>
                    </div>
                    <div>
                      <h3 className="h5 font-weight-semibold text-dark">Improve Customer Satisfaction</h3>
                      <div className="d-flex flex-wrap gap-3 text-muted small">
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-user"></i>
                          Customer Success
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <i className="fas fa-calendar"></i>
                          Q3 2025
                        </span>
                        <span className="d-flex align-items-center gap-1 text-danger">
                          <i className="fas fa-circle text-xs"></i>
                          Behind
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-md-right">
                    <div className="h3 font-weight-bold text-warning mb-2">35%</div>
                    <div className="progress" style={{ width: '130px', height: '6px' }}>
                      <div 
                        className="progress-bar bg-warning" 
                        role="progressbar" 
                        style={{ width: '35%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="row bg-light rounded p-3">
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">40%</div>
                    <div className="small text-muted">NPS Score Improvement</div>
                  </div>
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <div className="h4 font-weight-semibold">30%</div>
                    <div className="small text-muted">Support Response Time</div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="h4 font-weight-semibold">35%</div>
                    <div className="small text-muted">Customer Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <OKRProgressModal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProgressOKRs;
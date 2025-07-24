import React, { useState } from 'react';
import IndividualModal from './IndividualModal';

const Individual = () => {
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [activeItem, setActiveItem] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      {/* Main Content */}
      <div className="row">
        <main className="col-12">
          {/* Header Section */}
          <div className="mb-4">
            <h1 className="h2 fw-bold mb-2">Individual OKRs</h1>
            <p className="text-muted">Track and manage personal objectives and key results</p>
          </div>

          {/* Filters and Actions - Top Section */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch align-items-md-center gap-3 mb-4">
            <div className="d-flex flex-column flex-sm-row gap-2  w-md-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2 flex-shrink-0"
            
              >
                <i className="fas fa-plus"></i>
                <span>Add New OKR</span>
              </button>
              <select className="form-select flex-grow-1">
                <option>All Status</option>
                <option>On Track</option>
                <option>At Risk</option>
                <option>Behind</option>
              </select>
            </div>
            <div className="d-flex justify-content-end  w-md-auto">
              <select className="form-select">
                <option>Q3 2025</option>
                <option>Q2 2025</option>
                <option>Q1 2025</option>
                <option>Q4 2024</option>
              </select>
            </div>
          </div>

          {/* OKRs List */}
          <div className="gap-4 d-flex flex-column">
            {/* OKR Card 1 */}
            <div className="border rounded p-3 p-md-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3 mb-md-4">
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-blue-100 rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fas fa-user text-primary"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-0">Improve Technical Skills</h3>
                      <p className="small text-muted mb-0">Personal Development</p>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-3 small text-muted">
                    <span className="d-flex align-items-center gap-1">
                      <i className="fas fa-calendar"></i>
                      Q3 2025
                    </span>
                    <span className="d-flex align-items-center gap-1 text-success">
                      <i className="fas fa-circle small"></i>
                      On Track
                    </span>
                  </div>
                </div>
                <div className="text-md-end">
                  <div className="h2 fw-bold text-primary mb-2">75%</div>
                  <div className="progress" style={{ minWidth: '100px', height: '4px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="mt-3 mt-md-4 d-flex flex-column gap-2 gap-md-3">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Complete Advanced React Course</h5>
                    <p className="small text-muted mb-0">8 of 10 modules completed</p>
                  </div>
                  <span className="h5 fw-semibold text-primary">80%</span>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Build 3 Full-Stack Projects</h5>
                    <p className="small text-muted mb-0">2 projects completed</p>
                  </div>
                  <span className="h5 fw-semibold text-primary">67%</span>
                </div>
              </div>
            </div>

            {/* OKR Card 2 */}
            <div className="border rounded p-3 p-md-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3 mb-md-4">
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-purple-100 rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fas fa-chart-line text-purple"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-0">Enhance Team Collaboration</h3>
                      <p className="small text-muted mb-0">Leadership Goals</p>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-3 small text-muted">
                    <span className="d-flex align-items-center gap-1">
                      <i className="fas fa-calendar"></i>
                      Q3 2025
                    </span>
                    <span className="d-flex align-items-center gap-1 text-warning">
                      <i className="fas fa-circle small"></i>
                      At Risk
                    </span>
                  </div>
                </div>
                <div className="text-md-end">
                  <div className="h2 fw-bold text-purple mb-2">45%</div>
                  <div className="progress" style={{ minWidth: '100px', height: '4px' }}>
                    <div className="progress-bar bg-purple" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="mt-3 mt-md-4 d-flex flex-column gap-2 gap-md-3">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Implement Weekly Team Sync-ups</h5>
                    <p className="small text-muted mb-0">6 of 12 weeks completed</p>
                  </div>
                  <span className="h5 fw-semibold text-purple">50%</span>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Improve Team Satisfaction Score</h5>
                    <p className="small text-muted mb-0">Current: 7.5/10</p>
                  </div>
                  <span className="h5 fw-semibold text-purple">40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Department Filter - Middle Section */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch align-items-md-center gap-3 my-4">
            <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-md-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2 flex-shrink-0"
                style={{ minWidth: 'max-content' }}
              >
                <i className="fas fa-plus"></i>
                <span>Add New OKR</span>
              </button>
              <select className="form-select flex-grow-1">
                <option>All Departments</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Product</option>
                <option>Customer Success</option>
              </select>
            </div>
            <div className="d-flex justify-content-end w-100 w-md-auto">
              <select className="form-select" style={{ minWidth: '120px' }}>
                <option>Q3 2025</option>
                <option>Q2 2025</option>
                <option>Q1 2025</option>
                <option>Q4 2024</option>
              </select>
            </div>
          </div>

          {/* Department OKRs Cards */}
          <div className="row g-3 g-md-4">
            {/* Sales Department */}
            <div className="col-12">
              <div className="border rounded">
                <div className="bg-blue-50 px-3 px-md-4 py-2 py-md-3 border-bottom">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <div className="d-flex align-items-center gap-2 gap-md-3">
                      <div className="bg-blue-100 rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <i className="fas fa-chart-line text-primary"></i>
                      </div>
                      <div>
                        <h3 className="h5 fw-semibold mb-0">Sales Department</h3>
                        <p className="small text-muted mb-0">Led by Sarah Connor</p>
                      </div>
                    </div>
                    <span className="small text-primary fw-medium">3 Active OKRs</span>
                  </div>
                </div>
                <div className="p-3 p-md-4 d-flex flex-column gap-3 gap-md-4">
                  {/* OKR Item */}
                  <div>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-2 mb-md-3">
                      <div>
                        <h5 className="fw-semibold mb-1">Increase Enterprise Sales Revenue</h5>
                        <p className="small text-muted mb-0">Target: $2M in Q3 2025</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="h5 fw-bold text-primary">65%</span>
                        <div className="progress" style={{ minWidth: '80px', height: '4px' }}>
                          <div className="progress-bar bg-primary" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Department */}
                  <div className="border-top pt-3 pt-md-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-2 mb-md-3">
                      <div>
                        <h5 className="fw-semibold mb-1">Improve Lead Generation</h5>
                        <p className="small text-muted mb-0">Target: 1000 qualified leads</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="h5 fw-bold text-success">80%</span>
                        <div className="progress" style={{ minWidth: '80px', height: '4px' }}>
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
              <div className="border rounded">
                <div className="bg-purple-50 px-3 px-md-4 py-2 py-md-3 border-bottom">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <div className="d-flex align-items-center gap-2 gap-md-3">
                      <div className="bg-purple-100 rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <i className="fas fa-code text-purple"></i>
                      </div>
                      <div>
                        <h3 className="h5 fw-semibold mb-0">Engineering Department</h3>
                        <p className="small text-muted mb-0">Led by John Doe</p>
                      </div>
                    </div>
                    <span className="small text-purple fw-medium">4 Active OKRs</span>
                  </div>
                </div>
                <div className="p-3 p-md-4 d-flex flex-column gap-3 gap-md-4">
                  <div>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-2 mb-md-3">
                      <div>
                        <h5 className="fw-semibold mb-1">Improve System Performance</h5>
                        <p className="small text-muted mb-0">Target: 99.99% uptime</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="h5 fw-bold text-purple">90%</span>
                        <div className="progress" style={{ minWidth: '80px', height: '4px' }}>
                          <div className="progress-bar bg-purple" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-top pt-3 pt-md-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-2 mb-md-3">
                      <div>
                        <h5 className="fw-semibold mb-1">Release New Features</h5>
                        <p className="small text-muted mb-0">Target: 5 major features</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="h5 fw-bold text-purple">60%</span>
                        <div className="progress" style={{ minWidth: '80px', height: '4px' }}>
                          <div className="progress-bar bg-purple" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Bottom Section */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch align-items-md-center gap-3 my-4">
            <div className="d-flex flex-column flex-sm-row gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
              >
                <i className="fas fa-plus"></i>
                <span>Add New OKR</span>
              </button>
              <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                <i className="fas fa-filter"></i>
                <span>Filter</span>
              </button>
            </div>
            <div className="d-flex justify-content-end">
              <select className="form-select" style={{ minWidth: '120px' }}>
                <option>Q3 2025</option>
                <option>Q2 2025</option>
                <option>Q1 2025</option>
                <option>Q4 2024</option>
              </select>
            </div>
          </div>

          {/* OKRs List - Bottom Section */}
          <div className="d-flex flex-column gap-3 gap-md-4">
            {/* OKR Item */}
            <div className="border rounded p-3 p-md-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
                <div className="flex-grow-1">
                  <h3 className="h5 fw-semibold mb-2">Increase Market Share</h3>
                  <div className="d-flex flex-wrap align-items-center gap-3 small text-muted">
                    <span className="d-flex align-items-center gap-1">
                      <i className="fas fa-calendar"></i>
                      Q3 2025
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <i className="fas fa-user"></i>
                      John Smith
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="h2 fw-bold text-primary">75%</span>
                  <div className="progress" style={{ minWidth: '100px', height: '4px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="mt-3 mt-md-4 d-flex flex-column gap-2 gap-md-3">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Expand to 5 new regional markets</h5>
                    <p className="small text-muted mb-0">3 out of 5 markets entered</p>
                  </div>
                  <span className="h5 fw-semibold text-primary">60%</span>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Achieve 95% customer satisfaction score</h5>
                    <p className="small text-muted mb-0">Current: 92%</p>
                  </div>
                  <span className="h5 fw-semibold text-primary">85%</span>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Increase monthly recurring revenue by 50%</h5>
                    <p className="small text-muted mb-0">Current increase: 40%</p>
                  </div>
                  <span className="h5 fw-semibold text-primary">80%</span>
                </div>
              </div>
            </div>

            {/* Second OKR Item */}
            <div className="border rounded p-3 p-md-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
                <div className="flex-grow-1">
                  <h3 className="h5 fw-semibold mb-2">Enhance Product Innovation</h3>
                  <div className="d-flex flex-wrap align-items-center gap-3 small text-muted">
                    <span className="d-flex align-items-center gap-1">
                      <i className="fas fa-calendar"></i>
                      Q3 2025
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <i className="fas fa-user"></i>
                      Sarah Johnson
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="h2 fw-bold text-primary">45%</span>
                  <div className="progress" style={{ minWidth: '100px', height: '4px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="mt-3 mt-md-4 d-flex flex-column gap-2 gap-md-3">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Launch 3 new product features</h5>
                    <p className="small text-muted mb-0">1 out of 3 features launched</p>
                  </div>
                  <span className="h5 fw-semibold text-primary">33%</span>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-2 p-md-3 bg-light rounded">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-medium mb-1">Reduce development cycle time by 30%</h5>
                    <p className="small text-muted mb-0">Current reduction: 15%</p>
                  </div>
                  <span className="h5 fw-semibold text-primary">50%</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Component */}
      <IndividualModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Individual;
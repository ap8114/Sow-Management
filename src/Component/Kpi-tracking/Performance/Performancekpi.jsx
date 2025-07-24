import React, { useState } from 'react';
import NewKPIModal from './NewKPIModal';

const Performancekpi = () => {
  const [isNewKPIModalOpen, setIsNewKPIModalOpen] = useState(false);
  const [newKPI, setNewKPI] = useState({
    title: '',
    target: '',
    frequency: 'Monthly',
    description: ''
  });

  return (
    <div className="container-fluid p-0">
      {/* Main Content Area */}
      <main className="p-4 bg-light">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
              <div className="mb-3 mb-md-0">
                <h1 className="h2 font-weight-bold mb-1">Performance Dashboards</h1>
                <p className="text-muted">Track key performance metrics and analytics</p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="fas fa-download"></i>
                  <span>Export</span>
                </button>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="fas fa-filter"></i>
                  <span>Filter</span>
                </button>
                <button
                  onClick={() => setIsNewKPIModalOpen(true)}
                  className="btn btn-primary d-flex align-items-center gap-2"
                >
                  <i className="fas fa-plus"></i>
                  <span>New KPI</span>
                </button>
              </div>
            </div>

            <div className="row">
              {/* Revenue Overview */}
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="h5 font-weight-semibold mb-0">
                        <i className="fas fa-chart-line text-primary mr-2"></i>
                        Revenue Overview
                      </h3>
                      <span className="badge bg-success bg-opacity-10 text-success">+12.5%</span>
                    </div>
                    <div className="h2 font-weight-bold mb-2">$1,284,500</div>
                    <p className="text-muted small mb-0">Total revenue this quarter</p>
                  </div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="h5 font-weight-semibold mb-0">
                        <i className="fas fa-smile text-warning mr-2"></i>
                        Customer Satisfaction
                      </h3>
                      <span className="text-muted small">Last 30 days</span>
                    </div>
                    <div className="h2 font-weight-bold mb-2">94%</div>
                    <p className="text-muted small mb-0">Based on 1,250 reviews</p>
                  </div>
                </div>
              </div>

              {/* Active Users */}
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="h5 font-weight-semibold mb-0">
                        <i className="fas fa-users text-info mr-2"></i>
                        Active Users
                      </h3>
                      <span className="badge bg-success bg-opacity-10 text-success">Live</span>
                    </div>
                    <div className="h2 font-weight-bold mb-2">2,847</div>
                    <p className="text-muted small mb-0">Current active users</p>
                  </div>
                </div>
              </div>

              {/* Conversion Rate */}
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="h5 font-weight-semibold mb-0">
                        <i className="fas fa-exchange-alt text-purple mr-2"></i>
                        Conversion Rate
                      </h3>
                      <span className="badge bg-danger bg-opacity-10 text-danger">-2.1%</span>
                    </div>
                    <div className="h2 font-weight-bold mb-2">3.8%</div>
                    <p className="text-muted small mb-0">Average conversion rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* New KPI Modal */}
      <NewKPIModal 
        show={isNewKPIModalOpen} 
        onClose={() => setIsNewKPIModalOpen(false)}
        newKPI={newKPI}
        setNewKPI={setNewKPI}
      />
    </div>
  );
};

export default Performancekpi;
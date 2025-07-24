import React, { useState } from 'react';

const BalanceSheetPage = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  return (
    <div className="">
      <div className="">
        <div className="">
          {/* Header Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h2 fw-bold mb-2">Balance Sheet & P&L</h1>
              <p className="text-muted mb-0">Overview of financial position and performance</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <select className="form-select form-select-sm">
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
              <button className="btn btn-primary btn-sm d-flex align-items-center gap-2">
                <i className="fas fa-download"></i>
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row g-3 mb-4">
            {/* Balance Sheet Summary */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h6 mb-0">Balance Sheet Summary</h3>
                    <button 
                      className="btn btn-link btn-sm text-primary p-0"
                      onClick={() => setSelectedMetric('balance')}
                    >
                      View Details <i className="fas fa-arrow-right ms-1"></i>
                    </button>
                  </div>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <p className="small text-muted mb-0">Total Assets</p>
                        <p className="h5 mb-0">$15.2M</p>
                      </div>
                      <i className="fas fa-building text-primary fs-4"></i>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <p className="small text-muted mb-0">Total Liabilities</p>
                        <p className="h5 mb-0">$8.7M</p>
                      </div>
                      <i className="fas fa-file-invoice-dollar text-primary fs-4"></i>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <p className="small text-muted mb-0">Total Equity</p>
                        <p className="h5 mb-0">$6.5M</p>
                      </div>
                      <i className="fas fa-chart-pie text-primary fs-4"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* P&L Summary */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h6 mb-0">P&L Summary</h3>
                    <button 
                      className="btn btn-link btn-sm text-primary p-0"
                      onClick={() => setSelectedMetric('pnl')}
                    >
                      View Details <i className="fas fa-arrow-right ms-1"></i>
                    </button>
                  </div>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <p className="small text-muted mb-0">Revenue</p>
                        <p className="h5 mb-0">$25.8M</p>
                      </div>
                      <i className="fas fa-dollar-sign text-primary fs-4"></i>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <p className="small text-muted mb-0">Operating Income</p>
                        <p className="h5 mb-0">$5.2M</p>
                      </div>
                      <i className="fas fa-chart-line text-primary fs-4"></i>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <p className="small text-muted mb-0">Net Income</p>
                        <p className="h5 mb-0">$3.8M</p>
                      </div>
                      <i className="fas fa-coins text-primary fs-4"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Year-over-Year Comparison */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h6 mb-0">Year-over-Year Comparison</h3>
                <div className="d-flex gap-2">
                  <select className="form-select form-select-sm">
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th className="text-end">Current Year</th>
                      <th className="text-end">Previous Year</th>
                      <th className="text-end">YoY Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Revenue</td>
                      <td className="text-end">$25.8M</td>
                      <td className="text-end">$22.3M</td>
                      <td className="text-end text-success">+15.7%</td>
                    </tr>
                    <tr>
                      <td>Gross Profit</td>
                      <td className="text-end">$10.6M</td>
                      <td className="text-end">$9.1M</td>
                      <td className="text-end text-success">+16.5%</td>
                    </tr>
                    <tr>
                      <td>Net Income</td>
                      <td className="text-end">$3.8M</td>
                      <td className="text-end">$3.2M</td>
                      <td className="text-end text-success">+18.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default BalanceSheetPage;
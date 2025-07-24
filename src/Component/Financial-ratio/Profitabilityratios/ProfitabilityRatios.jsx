import React from 'react';

const ProfitabilityRatios = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h2 mb-1 text-dark">Profitability Ratios</h1>
              <p className="text-muted mb-0">Analysis of company's ability to generate profits</p>
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

          {/* Key Metrics */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="p-3 rounded bg-success bg-opacity-10">
                <div className="d-flex justify-content-between mb-2">
                  <h3 className="h6 mb-0 text-dark">Gross Margin</h3>
                  <i className="fas fa-chart-pie text-success"></i>
                </div>
                <p className="h2 text-success">42.5%</p>
                <p className="small text-muted mt-1 mb-0">Industry Avg: 40%</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 rounded bg-success bg-opacity-10">
                <div className="d-flex justify-content-between mb-2">
                  <h3 className="h6 mb-0 text-dark">Operating Margin</h3>
                  <i className="fas fa-chart-line text-success"></i>
                </div>
                <p className="h2 text-success">18.3%</p>
                <p className="small text-muted mt-1 mb-0">Industry Avg: 15%</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 rounded bg-success bg-opacity-10">
                <div className="d-flex justify-content-between mb-2">
                  <h3 className="h6 mb-0 text-dark">Net Profit Margin</h3>
                  <i className="fas fa-dollar-sign text-success"></i>
                </div>
                <p className="h2 text-success">12.8%</p>
                <p className="small text-muted mt-1 mb-0">Industry Avg: 10%</p>
              </div>
            </div>
          </div>

          {/* Details Table */}
          <div className="card">
            <div className="card-body">
              <h3 className="h5 mb-3 text-dark">Financial Components</h3>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-start">Component</th>
                      <th className="text-end">Amount ($)</th>
                      <th className="text-end">YoY Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Revenue</td>
                      <td className="text-end">5,200,000</td>
                      <td className="text-end text-success">+15.2%</td>
                    </tr>
                    <tr>
                      <td>Gross Profit</td>
                      <td className="text-end">2,210,000</td>
                      <td className="text-end text-success">+18.3%</td>
                    </tr>
                    <tr>
                      <td>Net Income</td>
                      <td className="text-end">665,600</td>
                      <td className="text-end text-success">+22.4%</td>
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

export default ProfitabilityRatios;
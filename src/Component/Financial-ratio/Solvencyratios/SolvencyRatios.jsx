import React, { useState } from 'react';


const SolvencyRatios = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  return (
    <div className="">
      <div className="">
        <div className="">
          {/* Header Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h2 fw-bold mb-2">Solvency Ratios</h1>
              <p className="text-muted mb-0">
                Analysis of company's long-term debt obligations and ability to meet financial commitments
              </p>
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

          {/* Key Metrics Cards */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div 
                className="p-3 rounded bg-primary bg-opacity-10 cursor-pointer"
                onClick={() => setSelectedMetric('debt')}
              >
                <div className="d-flex justify-content-between mb-2">
                  <h3 className="h6 mb-0">Debt to Equity</h3>
                  <i className="fas fa-balance-scale text-primary"></i>
                </div>
                <p className="h2 text-primary">1.2x</p>
                <p className="small text-muted mt-1 mb-0">Industry Avg: 1.5x</p>
              </div>
            </div>
            <div className="col-md-4">
              <div 
                className="p-3 rounded bg-primary bg-opacity-10 cursor-pointer"
                onClick={() => setSelectedMetric('coverage')}
              >
                <div className="d-flex justify-content-between mb-2">
                  <h3 className="h6 mb-0">Interest Coverage</h3>
                  <i className="fas fa-shield-alt text-primary"></i>
                </div>
                <p className="h2 text-primary">4.5x</p>
                <p className="small text-muted mt-1 mb-0">Industry Avg: 3.0x</p>
              </div>
            </div>
            <div className="col-md-4">
              <div 
                className="p-3 rounded bg-primary bg-opacity-10 cursor-pointer"
                onClick={() => setSelectedMetric('equity')}
              >
                <div className="d-flex justify-content-between mb-2">
                  <h3 className="h6 mb-0">Equity Ratio</h3>
                  <i className="fas fa-chart-pie text-primary"></i>
                </div>
                <p className="h2 text-primary">0.45</p>
                <p className="small text-muted mt-1 mb-0">Industry Avg: 0.40</p>
              </div>
            </div>
          </div>

          {/* Metrics Table */}
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="h5 mb-3">Solvency Metrics</h3>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th className="text-end">Current Value</th>
                      <th className="text-end">Previous Year</th>
                      <th className="text-end">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total Debt Ratio</td>
                      <td className="text-end">0.55</td>
                      <td className="text-end">0.60</td>
                      <td className="text-end text-success">-8.3%</td>
                    </tr>
                    <tr>
                      <td>Long-term Debt Ratio</td>
                      <td className="text-end">0.35</td>
                      <td className="text-end">0.40</td>
                      <td className="text-end text-success">-12.5%</td>
                    </tr>
                    <tr>
                      <td>Times Interest Earned</td>
                      <td className="text-end">4.5x</td>
                      <td className="text-end">3.8x</td>
                      <td className="text-end text-success">+18.4%</td>
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

export default SolvencyRatios;
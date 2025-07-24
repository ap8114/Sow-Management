import React, { useState } from 'react';

const EfficiencyRatios = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h2 fw-bold mb-2">Efficiency Ratios</h1>
              <p className="text-muted mb-0">Analysis of company's operational efficiency and asset utilization</p>
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

          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div 
                className="p-3 rounded-3 bg-light-blue cursor-pointer" 
                onClick={() => setSelectedMetric('inventory')}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h6 mb-0">Inventory Turnover</h3>
                  <i className="fas fa-boxes text-primary"></i>
                </div>
                <p className="h2 text-primary mb-1">8.5x</p>
                <p className="small text-muted mb-0">Industry Avg: 7.2x</p>
              </div>
            </div>
            <div className="col-md-4">
              <div 
                className="p-3 rounded-3 bg-light-blue cursor-pointer" 
                onClick={() => setSelectedMetric('receivables')}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h6 mb-0">Receivables Turnover</h3>
                  <i className="fas fa-sync text-primary"></i>
                </div>
                <p className="h2 text-primary mb-1">12.3x</p>
                <p className="small text-muted mb-0">Industry Avg: 10x</p>
              </div>
            </div>
            <div className="col-md-4">
              <div 
                className="p-3 rounded-3 bg-light-blue cursor-pointer" 
                onClick={() => setSelectedMetric('asset')}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h6 mb-0">Asset Turnover</h3>
                  <i className="fas fa-building text-primary"></i>
                </div>
                <p className="h2 text-primary mb-1">1.8x</p>
                <p className="small text-muted mb-0">Industry Avg: 1.5x</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="h5 mb-3">Efficiency Metrics</h3>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-start">Metric</th>
                      <th className="text-end">Current Value</th>
                      <th className="text-end">Previous Year</th>
                      <th className="text-end">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">Days Inventory Outstanding</td>
                      <td className="text-end">42 days</td>
                      <td className="text-end">45 days</td>
                      <td className="text-end text-success">-6.7%</td>
                    </tr>
                    <tr>
                      <td className="text-start">Days Sales Outstanding</td>
                      <td className="text-end">30 days</td>
                      <td className="text-end">35 days</td>
                      <td className="text-end text-success">-14.3%</td>
                    </tr>
                    <tr>
                      <td className="text-start">Operating Cycle</td>
                      <td className="text-end">72 days</td>
                      <td className="text-end">80 days</td>
                      <td className="text-end text-success">-10.0%</td>
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

export default EfficiencyRatios;
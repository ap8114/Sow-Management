import React from 'react';

const RatioAnalysis = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
        <div className="row align-items-center mb-4">
  {/* Left section: Heading + Subtext */}
  <div className="col-12 col-md-6 mb-3 mb-md-0 ">
    <h1 className="h2 fw-bold mb-2">Ratio Analysis</h1>
    <p className="text-muted">Key financial ratios and comparative analysis</p>
  </div>

  {/* Right section: Dropdown + Button */}
  <div className="col-12 col-md-6">
    <div className="d-flex flex-column flex-sm-row justify-content-md-end align-items-stretch gap-2">
      <select className="form-select w-100 w-sm-auto">
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
      <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto">
        <i className="fas fa-download"></i>
        <span>Export Report</span>
      </button>
    </div>
  </div>
</div>


          {/* Ratio Analysis Grid */}
          <div className="row g-4 mb-4">
            {/* Liquidity Ratios */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 fw-semibold text-dark">Liquidity Ratios</h3>
                    <i className="fas fa-tint text-primary fs-4"></i>
                  </div>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Current Ratio</span>
                      <span className="fw-medium">2.5</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Quick Ratio</span>
                      <span className="fw-medium">1.8</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Cash Ratio</span>
                      <span className="fw-medium">0.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profitability Ratios */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 fw-semibold text-dark">Profitability Ratios</h3>
                    <i className="fas fa-chart-pie text-success fs-4"></i>
                  </div>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Gross Margin</span>
                      <span className="fw-medium">45%</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Operating Margin</span>
                      <span className="fw-medium">22%</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Net Profit Margin</span>
                      <span className="fw-medium">15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficiency Ratios */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 fw-semibold text-dark">Efficiency Ratios</h3>
                    <i className="fas fa-cogs text-purple fs-4"></i>
                  </div>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Asset Turnover</span>
                      <span className="fw-medium">2.1</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Inventory Turnover</span>
                      <span className="fw-medium">8.5</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Receivables Turnover</span>
                      <span className="fw-medium">12.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leverage Ratios */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 fw-semibold text-dark">Leverage Ratios</h3>
                    <i className="fas fa-balance-scale text-warning fs-4"></i>
                  </div>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Debt to Equity</span>
                      <span className="fw-medium">0.8</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Interest Coverage</span>
                      <span className="fw-medium">4.5</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                      <span className="text-muted">Equity Multiplier</span>
                      <span className="fw-medium">1.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatioAnalysis;
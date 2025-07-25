import React from "react";

const FinancialOverview = () => {
  return (
    <main className="">
      <div className="">
        <div className="">
          {/* Page Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div className="mb-3 mb-md-0">
              <h1 className="h2 fw-bold mb-2">Financial Overview</h1>
              <p className="text-muted">
                Key financial metrics and performance indicators
              </p>
            </div>
            <div className="row mb-4">
              {/* Left Buttons Section */}
              <div className="col-12 col-md-5  mb-md-0">
                <div className="d-flex flex-column flex-sm-row flex-wrap gap-2">
                  {/* <button
                        onClick={() => setIsModalOpen(true)}
                         className="btn btn-primary d-flex align-items-center gap-2"
                          >
                         <i className="fas fa-plus"></i>
                        <span>Add New OKR</span>
                        </button> */}
                  <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                    <i className="fas fa-filter"></i>
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              {/* Right Select Dropdown Section */}
              <div className="col-12 col-md-4">
                <div className="d-flex justify-content-md-end" style={{width: '120px'}}>
                  <select className="form-select w-100 w-md-auto">
                    <option>Q3 2025</option>
                    <option>Q2 2025</option>
                    <option>Q1 2025</option>
                    <option>Q4 2024</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="row mb-4">
            {/* Revenue Card */}
            <div className="col-md-3 mb-3">
              <div className="card bg-primary bg-opacity-10 border-primary border-opacity-25 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h6 text-primary font-weight-medium mb-0">
                      Revenue
                    </h3>
                    <i className="fas fa-chart-line text-primary"></i>
                  </div>
                  <div className="h3 font-weight-bold text-primary">$2.4M</div>
                  <div className="d-flex align-items-center mt-2">
                    <i className="fas fa-arrow-up text-success me-1"></i>
                    <span className="text-success small">+12.5%</span>
                    <span className="text-muted small ms-2">vs last month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profit Margin Card */}
            <div className="col-md-3 mb-3">
              <div className="card bg-success bg-opacity-10 border-success border-opacity-25 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h6 text-success font-weight-medium mb-0">
                      Profit Margin
                    </h3>
                    <i className="fas fa-percentage text-success"></i>
                  </div>
                  <div className="h3 font-weight-bold text-success">32.8%</div>
                  <div className="d-flex align-items-center mt-2">
                    <i className="fas fa-arrow-up text-success me-1"></i>
                    <span className="text-success small">+2.3%</span>
                    <span className="text-muted small ms-2">vs last month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Costs Card */}
            <div className="col-md-3 mb-3">
              <div className="card bg-purple bg-opacity-10 border-purple border-opacity-25 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h6 text-purple font-weight-medium mb-0">
                      Operating Costs
                    </h3>
                    <i className="fas fa-wallet text-purple"></i>
                  </div>
                  <div className="h3 font-weight-bold text-purple">$820K</div>
                  <div className="d-flex align-items-center mt-2">
                    <i className="fas fa-arrow-down text-danger me-1"></i>
                    <span className="text-danger small">-5.1%</span>
                    <span className="text-muted small ms-2">vs last month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cash Flow Card */}
            <div className="col-md-3 mb-3">
              <div className="card bg-warning bg-opacity-10 border-warning border-opacity-25 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h6 text-warning font-weight-medium mb-0">
                      Cash Flow
                    </h3>
                    <i className="fas fa-money-bill-wave text-warning"></i>
                  </div>
                  <div className="h3 font-weight-bold text-warning">$1.2M</div>
                  <div className="d-flex align-items-center mt-2">
                    <i className="fas fa-arrow-up text-success me-1"></i>
                    <span className="text-success small">+8.4%</span>
                    <span className="text-muted small ms-2">vs last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3 className="h5 mb-0">Recent Transactions</h3>
              <button className="btn btn-link text-primary p-0">
                View All
              </button>
            </div>
            <div className="list-group list-group-flush">
              {/* Transaction 1 */}
              <div className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2">
                      <i className="fas fa-shopping-cart text-primary"></i>
                    </div>
                    <div>
                      <div className="font-weight-medium">Product Sales</div>
                      <div className="small text-muted">July 21, 2025</div>
                    </div>
                  </div>
                  <div className="text-success font-weight-medium">
                    +$45,200
                  </div>
                </div>
              </div>

              {/* Transaction 2 */}
              <div className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-2">
                      <i className="fas fa-file-invoice text-danger"></i>
                    </div>
                    <div>
                      <div className="font-weight-medium">Office Supplies</div>
                      <div className="small text-muted">July 20, 2025</div>
                    </div>
                  </div>
                  <div className="text-danger font-weight-medium">-$1,200</div>
                </div>
              </div>

              {/* Transaction 3 */}
              <div className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-2">
                      <i className="fas fa-user-check text-success"></i>
                    </div>
                    <div>
                      <div className="font-weight-medium">Client Payment</div>
                      <div className="small text-muted">July 19, 2025</div>
                    </div>
                  </div>
                  <div className="text-success font-weight-medium">
                    +$28,500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FinancialOverview;

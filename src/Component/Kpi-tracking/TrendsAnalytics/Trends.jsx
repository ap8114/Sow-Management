import React from 'react'; 

const Trends = () => {
  return (
    <div className="">
      {/* Main Content Area */}
      <main className="">
        <div className="">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div className="mb-3 mb-md-0">
              <h1 className="h2 fw-bold mb-2">Trends & Analysis</h1>
              <p className="text-muted mb-0">Monitor key performance trends and insights</p>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                <i className="fas fa-download"></i>
                <span>Export</span>
              </button>
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                <i className="fas fa-filter"></i>
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="row g-4">
            {/* Trend Analysis Card */}
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                    <h3 className="h5 fw-semibold mb-3 mb-md-0">
                      <i className="fas fa-chart-line text-blue-600 me-2"></i>
                      Performance Trend
                    </h3>
                    <select className="form-select form-select-sm w-auto">
                      <option value="7">Last 7 days</option>
                      <option value="30">Last 30 days</option>
                      <option value="90">Last 90 days</option>
                    </select>
                  </div>
                  <div className="bg-light rounded mb-4 d-flex align-items-center justify-content-center" style={{ height: '256px' }}>
                    <span className="text-muted">
                      <i className="fas fa-chart-area fa-3x"></i>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="p-3 bg-blue-50 rounded">
                        <div className="text-blue-600 small fw-medium mb-1">Growth Rate</div>
                        <div className="h4 fw-bold">+24.8%</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="p-3 bg-green-50 rounded">
                        <div className="text-green-600 small fw-medium mb-1">Success Rate</div>
                        <div className="h4 fw-bold">92%</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-3 bg-purple-50 rounded">
                        <div className="text-purple-600 small fw-medium mb-1">Engagement</div>
                        <div className="h4 fw-bold">8.6/10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Insights Card */}
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 fw-semibold mb-4">
                    <i className="fas fa-lightbulb text-warning me-2"></i>
                    Quick Insights
                  </h3>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item border-0 bg-light mb-2 rounded">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-arrow-trend-up text-success fs-4 me-3"></i>
                        <div>
                          <div className="fw-medium">Positive Growth Trend</div>
                          <div className="small text-muted">Consistent improvement in performance metrics</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-0 bg-light mb-2 rounded">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-bullseye text-primary fs-4 me-3"></i>
                        <div>
                          <div className="fw-medium">Target Achievement</div>
                          <div className="small text-muted">85% of KPIs are meeting or exceeding targets</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-0 bg-light rounded">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-exclamation-circle text-warning fs-4 me-3"></i>
                        <div>
                          <div className="fw-medium">Areas for Improvement</div>
                          <div className="small text-muted">Response time metrics need attention</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom CSS for colors not in Bootstrap */}
      <style>{`
        .bg-blue-50 { background-color: #eff6ff; }
        .bg-green-50 { background-color: #ecfdf5; }
        .bg-purple-50 { background-color: #f5f3ff; }
        .text-blue-600 { color: #2563eb; }
        .text-green-600 { color: #059669; }
        .text-purple-600 { color: #9333ea; }
      `}</style>
    </div>
  );
};

export default Trends;
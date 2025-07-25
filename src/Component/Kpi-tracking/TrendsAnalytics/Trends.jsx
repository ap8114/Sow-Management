import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data for the charts
const performanceData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1000 },
];

const insightsData = [
  { name: 'Success', value: 92 },
  { name: 'Growth', value: 24.8 },
  { name: 'Engagement', value: 86 },
];

const Trends = () => {
  return (
    <div className="container-fluid py-4">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div className="mb-3 mb-md-0">
          <h3 className=" fw-bold mb-2">Trends & Analysis</h3>
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

      {/* Main Content */}
      <div className="row g-4">
        {/* Performance Trend Card */}
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
                  <option value="30" selected>Last 30 days</option>
                  <option value="90">Last 90 days</option>
                </select>
              </div>
              
              {/* Line Chart */}
              <div className="mb-4" style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Performance" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              {/* Metrics Summary */}
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
              
              {/* Bar Chart */}
              <div className="mb-4" style={{ height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={insightsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="value" 
                      fill="#9333ea" 
                      name="Metrics" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              {/* Insights List */}
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
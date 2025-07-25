import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import KPIModal from './KPIModal';
import { Button } from 'react-bootstrap';

const CompanyKPI = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [showModal, setShowModal] = useState(false);
  const [kpiData] = useState([
    {
      id: 1,
      title: 'Total Revenue',
      value: '$847,927',
      change: 12.5,
      trend: 'up',
      target: '$900,000',
      progress: 99
    },
    {
      id: 2,
      title: 'New Customers',
      value: '1,482',
      change: 8.2,
      trend: 'up',
      target: '2,000',
      progress: 74
    },
    {
      id: 3,
      title: 'Customer Satisfaction',
      value: '94.8%',
      change: -2.1,
      trend: 'down',
      target: '98%',
      progress: 97
    },
    {
      id: 4,
      title: 'Operating Costs',
      value: '$235,842',
      change: -5.4,
      trend: 'down',
      target: '$220,000',
      progress: 82
    }
  ]);

  const periods = ['Today', 'This Week', 'This Month', 'This Quarter', 'This Year'];

  useEffect(() => {
    // Initialize charts
    const initCharts = () => {
      // Revenue Chart
      const revenueChart = echarts.init(document.getElementById('revenueChart'));
      revenueChart.setOption({
        animation: false,
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yAxis: { type: 'value' },
        series: [{
          name: 'Revenue',
          data: [650000, 720000, 780000, 740000, 820000, 850000, 847923],
          type: 'line',
          smooth: true,
          lineStyle: { color: '#3B82F6' },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(59, 130, 246, 0.2)' },
                { offset: 1, color: 'rgba(59, 130, 246, 0.01)' }
              ]
            }
          }
        }]
      });

      // Customer Growth Chart
      const customerChart = echarts.init(document.getElementById('customerChart'));
      customerChart.setOption({
        animation: false,
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yAxis: { type: 'value' },
        series: [{
          name: 'Customers',
          data: [1100, 1250, 1320, 1390, 1420, 1460, 1482],
          type: 'bar',
          barWidth: '60%',
          itemStyle: { color: '#10B981' }
        }]
      });

      return () => {
        revenueChart.dispose();
        customerChart.dispose();
      };
    };

    // Add slight delay to ensure DOM is ready
    const timer = setTimeout(initCharts, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h3 className=" fw-bold mb-2">Company KPI Dashboard</h3>
          <p className="text-muted mb-0">
            <i className="fas fa-clock me-2"></i>
            Last updated: July 23, 2025 at 09:30 AM
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end align-items-center">
          <div className="me-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="form-select form-select-sm"
            >
              {periods.map((period) => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
          </div>
          <Button
            variant="outline-info"
            onClick={handleShowModal}
            className="me-2"
          >
            <i className="fas fa-chart-line me-2"></i>
            Detailed Analysis
          </Button>
          <Button variant="primary">
            <i className="fas fa-download me-2"></i>
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="row mb-4 g-4">
        {kpiData.map((kpi) => (
          <div key={kpi.id} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h6 className="text-muted text-uppercase small mb-1">{kpi.title}</h6>
                    <h3 className="mb-0">{kpi.value}</h3>
                  </div>
                  <span className={`badge ${kpi.trend === 'up' ?
                    'bg-success bg-opacity-10 text-success' :
                    'bg-danger bg-opacity-10 text-danger'}`}>
                    <i className={`fas fa-arrow-${kpi.trend} me-1`}></i>
                    {Math.abs(kpi.change)}%
                  </span>
                </div>
                <div>
                  <div className="d-flex justify-content-between small mb-1">
                    <span className="text-muted">Target: {kpi.target}</span>
                    <span className="fw-bold">{kpi.progress}%</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div
                      className={`progress-bar ${kpi.progress > 90 ? 'bg-success' : kpi.progress > 70 ? 'bg-primary' : 'bg-warning'}`}
                      style={{ width: `${kpi.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Revenue Trend</h5>
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  {selectedPeriod}
                </span>
              </div>
              <div id="revenueChart" style={{ height: '300px' }}></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Customer Growth</h5>
                <span className="badge bg-success bg-opacity-10 text-success">
                  {selectedPeriod}
                </span>
              </div>
              <div id="customerChart" style={{ height: '300px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="fas fa-users text-primary"></i>
                </div>
                <div>
                  <p className="text-muted small mb-1">Active Users</p>
                  <h5 className="mb-0">24.5K</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="fas fa-shopping-cart text-success"></i>
                </div>
                <div>
                  <p className="text-muted small mb-1">Total Orders</p>
                  <h5 className="mb-0">1,463</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="bg-purple bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="fas fa-star text-purple"></i>
                </div>
                <div>
                  <p className="text-muted small mb-1">Average Rating</p>
                  <h5 className="mb-0">4.8/5.0</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Modal */}
      <KPIModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default CompanyKPI;
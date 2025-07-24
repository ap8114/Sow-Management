// CRMReports.jsx
import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'; // 👈 this line is essential

const CRMReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [selectedReport, setSelectedReport] = useState('sales');
  const [salesChart, setSalesChart] = useState(null);
  const [pipelineChart, setPipelineChart] = useState(null);

  useEffect(() => {
    const salesChartContainer = document.getElementById('salesChart');
    const pipelineChartContainer = document.getElementById('pipelineChart');

    if (salesChartContainer && !salesChart) {
      const chart = echarts.init(salesChartContainer);
      setSalesChart(chart);
    }

    if (pipelineChartContainer && !pipelineChart) {
      const chart = echarts.init(pipelineChartContainer);
      setPipelineChart(chart);
    }

    return () => {
      salesChart?.dispose();
      pipelineChart?.dispose();
    };
  }, []);

  useEffect(() => {
    if (salesChart) {
      salesChart.setOption(getSalesChartOption());
      window.addEventListener('resize', () => salesChart.resize());
    }

    if (pipelineChart) {
      pipelineChart.setOption(getPipelineChartOption());
      window.addEventListener('resize', () => pipelineChart.resize());
    }

    return () => {
      window.removeEventListener('resize', () => salesChart?.resize());
      window.removeEventListener('resize', () => pipelineChart?.resize());
    };
  }, [salesChart, pipelineChart]);

  const getSalesChartOption = () => ({
    animation: false,
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['Revenue', 'Growth', 'Conversion'],
      bottom: 0
    },
    grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLine: { lineStyle: { color: '#E5E7EB' } }
    },
    yAxis: [{
      type: 'value',
      name: 'Revenue',
      axisLine: { lineStyle: { color: '#E5E7EB' } },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    }, {
      type: 'value',
      name: 'Percentage',
      max: 100,
      axisLine: { lineStyle: { color: '#E5E7EB' } }
    }],
    series: [{
      name: 'Revenue',
      type: 'bar',
      data: [120, 200, 150, 180, 220, 190],
      itemStyle: { color: '#3B82F6' }
    }, {
      name: 'Growth',
      type: 'line',
      yAxisIndex: 1,
      data: [20, 30, 25, 40, 45, 35],
      itemStyle: { color: '#10B981' }
    }, {
      name: 'Conversion',
      type: 'line',
      yAxisIndex: 1,
      data: [30, 40, 35, 50, 55, 45],
      itemStyle: { color: '#F59E0B' }
    }]
  });

  const getPipelineChartOption = () => ({
    animation: false,
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      data: ['Qualified', 'Negotiation', 'Proposal', 'Closed']
    },
    series: [{
      name: 'Pipeline Stage',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}: {d}%'
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 1048, name: 'Qualified' },
        { value: 735, name: 'Negotiation' },
        { value: 580, name: 'Proposal' },
        { value: 484, name: 'Closed' }
      ],
      itemStyle: {
        color: (params) => {
          const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
          return colors[params.dataIndex];
        }
      }
    }]
  });

  return (
    <div className="">   
      <div className="row mb-4">
        <div className="col-md-6">
          <h1 className="h2 fw-bold mb-2">CRM Reports</h1>
          <p className="text-muted">Analyze your sales performance and customer data</p>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <div className="me-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="form-select"
            >
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="h5 mb-0">Sales Performance</h2>
              <button className="btn btn-sm btn-link text-primary">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <div className="card-body">
              <div id="salesChart" style={{ height: '300px', width: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="h5 mb-0">Pipeline Analytics</h2>
              <button className="btn btn-sm btn-link text-primary">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <div className="card-body">
              <div id="pipelineChart" style={{ height: '300px', width: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="h5 mb-0">Customer Acquisition</h2>
              <button className="btn btn-sm btn-link text-primary">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <div className="card-body">
              <ReactECharts
                option={{
                  animation: false,
                  tooltip: { trigger: 'axis' },
                  legend: {
                    data: ['New Customers', 'Retention Rate'],
                    bottom: 0
                  },
                  grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
                  xAxis: {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    axisLine: { lineStyle: { color: '#E5E7EB' } }
                  },
                  yAxis: [{
                    type: 'value',
                    name: 'Customers',
                    axisLine: { lineStyle: { color: '#E5E7EB' } }
                  }, {
                    type: 'value',
                    name: 'Rate',
                    max: 100,
                    axisLine: { lineStyle: { color: '#E5E7EB' } }
                  }],
                  series: [{
                    name: 'New Customers',
                    type: 'bar',
                    data: [150, 180, 220, 250, 280, 310],
                    itemStyle: { color: '#3B82F6' }
                  }, {
                    name: 'Retention Rate',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [85, 88, 87, 90, 92, 91],
                    itemStyle: { color: '#10B981' }
                  }]
                }}
                style={{ height: '300px', marginBottom: '20px' }}
              />
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th className="text-start">Source</th>
                      <th className="text-end">Leads</th>
                      <th className="text-end">Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Website</td>
                      <td className="text-end">245</td>
                      <td className="text-end text-success">24.5%</td>
                    </tr>
                    <tr>
                      <td>Social Media</td>
                      <td className="text-end">187</td>
                      <td className="text-end text-success">18.7%</td>
                    </tr>
                    <tr>
                      <td>Referral</td>
                      <td className="text-end">156</td>
                      <td className="text-end text-success">15.6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="h5 mb-0">Activity Reports</h2>
              <button className="btn btn-sm btn-link text-primary">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <div className="card-body">
              <ReactECharts
                option={{
                  animation: false,
                  tooltip: { trigger: 'axis' },
                  legend: {
                    data: ['Calls', 'Emails', 'Meetings'],
                    bottom: 0
                  },
                  grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
                  xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLine: { lineStyle: { color: '#E5E7EB' } }
                  },
                  yAxis: {
                    type: 'value',
                    axisLine: { lineStyle: { color: '#E5E7EB' } }
                  },
                  series: [{
                    name: 'Calls',
                    type: 'line',
                    smooth: true,
                    data: [45, 52, 48, 60, 55, 30, 25],
                    itemStyle: { color: '#3B82F6' },
                    areaStyle: {
                      opacity: 0.1
                    }
                  }, {
                    name: 'Emails',
                    type: 'line',
                    smooth: true,
                    data: [120, 132, 128, 140, 135, 80, 75],
                    itemStyle: { color: '#10B981' },
                    areaStyle: {
                      opacity: 0.1
                    }
                  }, {
                    name: 'Meetings',
                    type: 'line',
                    smooth: true,
                    data: [22, 25, 20, 28, 26, 12, 10],
                    itemStyle: { color: '#F59E0B' },
                    areaStyle: {
                      opacity: 0.1
                    }
                  }]
                }}
                style={{ height: '300px', marginBottom: '20px' }}
              />
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th className="text-start">Activity</th>
                      <th className="text-end">Count</th>
                      <th className="text-end">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Calls Made</td>
                      <td className="text-end">324</td>
                      <td className="text-end text-success">+12%</td>
                    </tr>
                    <tr>
                      <td>Emails Sent</td>
                      <td className="text-end">892</td>
                      <td className="text-end text-success">+23%</td>
                    </tr>
                    <tr>
                      <td>Meetings</td>
                      <td className="text-end">156</td>
                      <td className="text-end text-danger">-5%</td>
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

export default CRMReports;
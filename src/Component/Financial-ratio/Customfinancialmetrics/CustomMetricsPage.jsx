import React, { useState } from 'react';
import NewMetricModal from './NewMetricModal';
import EditMetricModal from './EditMetricModal';

const CustomMetricsPage = () => {
  const [isMetricModalOpen, setIsMetricModalOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);

  const customMetrics = [
    {
      id: 1,
      name: 'Customer Acquisition Cost',
      formula: '(Marketing Expenses + Sales Expenses) / New Customers',
      category: 'Marketing',
      frequency: 'Monthly',
      lastCalculated: '2025-07-20',
      value: '$450'
    },
    {
      id: 2,
      name: 'Operating Cash Flow Ratio',
      formula: 'Operating Cash Flow / Current Liabilities',
      category: 'Cash Flow',
      frequency: 'Quarterly',
      lastCalculated: '2025-07-15',
      value: '1.8'
    },
    {
      id: 3,
      name: 'Revenue per Employee',
      formula: 'Total Revenue / Number of Employees',
      category: 'Productivity',
      frequency: 'Monthly',
      lastCalculated: '2025-07-21',
      value: '$180,000'
    }
  ];

  return (
    <div className="">
      <div className="">
        <div className="">
        <div className="mb-4">
  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
    <div>
      <h1 className="h2 fw-bold mb-2 mb-sm-1">Custom Financial Metrics</h1>
      <p className="text-muted mb-0">Create and manage your custom financial metrics</p>
    </div>
    <button 
      onClick={() => setIsMetricModalOpen(true)}
      className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-sm-auto"
    >
      <i className="fas fa-plus"></i>
      <span>Create New Metric</span>
    </button>
  </div>
</div>


          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Metric Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Formula</th>
                  <th scope="col">Frequency</th>
                  <th scope="col">Last Calculated</th>
                  <th scope="col">Current Value</th>
                  <th scope="col" className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customMetrics.map((metric) => (
                  <tr key={metric.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="fw-medium">{metric.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className="text-muted">{metric.category}</span>
                    </td>
                    <td>
                      <span className="text-muted">{metric.formula}</span>
                    </td>
                    <td>
                      <span className="text-muted">{metric.frequency}</span>
                    </td>
                    <td>
                      <span className="text-muted">{metric.lastCalculated}</span>
                    </td>
                    <td>
                      <span className="fw-medium">{metric.value}</span>
                    </td>
                    <td className="text-end">
                      <div className="d-flex justify-content-end gap-2">
                        <button 
                          onClick={() => setSelectedMetric(metric.name)}
                          className="btn btn-sm btn-outline-primary"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      <NewMetricModal
        show={isMetricModalOpen} 
        onClose={() => setIsMetricModalOpen(false)} 
      />
      
      <EditMetricModal
        show={!!selectedMetric} 
        onClose={() => setSelectedMetric(null)}
        metricName={selectedMetric || ''}
      />
    </div>
  );
};

export default CustomMetricsPage;
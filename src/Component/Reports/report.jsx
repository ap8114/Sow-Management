import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Report = () => {
  const [activeItem, setActiveItem] = useState<string>('okr-reports');

  const reportData = [
    {
      id: 1,
      objective: 'Increase Market Share',
      progress: 75,
      owner: 'Sarah Chen',
      team: 'Sales',
      status: 'On Track',
      lastUpdated: '2025-07-20'
    },
    {
      id: 2, 
      objective: 'Launch Mobile App',
      progress: 45,
      owner: 'Michael Smith',
      team: 'Product',
      status: 'At Risk',
      lastUpdated: '2025-07-19'
    },
    {
      id: 3,
      objective: 'Improve Customer Satisfaction',
      progress: 90,
      owner: 'Jessica Taylor',
      team: 'Customer Success',
      status: 'On Track',
      lastUpdated: '2025-07-21'
    }
  ];

  return (
    <div className="container-fluid p-0 vh-100 bg-light">
      {/* Main Content Area */}
      <main className="p-3 p-md-4 h-100 overflow-auto">
        <div className="bg-white rounded shadow-sm p-3 p-md-4 h-100">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div className="mb-3 mb-md-0">
              <h1 className="h3 fw-bold mb-1">OKR Reports</h1>
              <p className="text-muted mb-0">View and track your organization's OKR progress</p>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                <i className="fas fa-filter"></i>
                <span>Filter</span>
              </button>
              <button className="btn btn-primary d-flex align-items-center gap-2">
                <i className="fas fa-file-export"></i>
                <span>Export Report</span>
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Objective</th>
                  <th scope="col">Progress</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Team</th>
                  <th scope="col">Status</th>
                  <th scope="col">Last Updated</th>
                  <th scope="col" className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item) => (
                  <tr key={item.id}>
                    <td className="fw-bold">{item.objective}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="progress flex-grow-1 me-2" style={{ height: '6px', minWidth: '60px' }}>
                          <div 
                            className={`progress-bar ${item.progress >= 70 ? 'bg-success' : item.progress >= 40 ? 'bg-warning' : 'bg-danger'}`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <small className="text-muted">{item.progress}%</small>
                      </div>
                    </td>
                    <td>{item.owner}</td>
                    <td>{item.team}</td>
                    <td>
                      <span className={`badge ${item.status === 'On Track' ? 'bg-success bg-opacity-10 text-success' : 'bg-warning bg-opacity-10 text-warning'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="text-muted">{item.lastUpdated}</td>
                    <td className="text-end">
                      <button className="btn btn-sm btn-link text-primary">
                        <i className="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Report;
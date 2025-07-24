import React, { useState } from 'react';
import NewReportModal from './NewReportModal'; // We'll create this next

interface Report {
  id: number;
  name: string;
  type: string;
  date: string;
  format: string;
  tags: string[];
}

interface Filter {
  type: string;
  date: string;
  format: string;
}

const ReportsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewReportModal, setShowNewReportModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<Filter>({
    type: 'all',
    date: 'all',
    format: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  const reports: Report[] = [
    { id: 1, name: 'Weekly Sales Report', type: 'Weekly', date: '2025-07-22', format: 'PDF', tags: ['Sales', 'Weekly'] },
    { id: 2, name: 'Monthly Revenue Analysis', type: 'Monthly', date: '2025-07-21', format: 'CSV', tags: ['Revenue', 'Monthly'] },
    { id: 3, name: 'Q2 Performance Review', type: 'Quarterly', date: '2025-07-20', format: 'XLS', tags: ['Performance', 'Quarterly'] },
    { id: 4, name: 'Marketing Campaign Results', type: 'Custom', date: '2025-07-19', format: 'PDF', tags: ['Marketing', 'Campaign'] },
    { id: 5, name: 'Team Productivity Stats', type: 'Weekly', date: '2025-07-18', format: 'CSV', tags: ['Team', 'Productivity'] },
  ];

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h2">Reports Database</h1>
              <p className="text-muted mb-0">Manage and access your business reports</p>
            </div>
            <div className="d-flex gap-2">
              <button
                onClick={() => setShowNewReportModal(true)}
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="fas fa-plus me-2"></i>
                New Report
              </button>
              <button className="btn btn-success d-flex align-items-center">
                <i className="fas fa-upload me-2"></i>
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-8">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="fas fa-filter me-2"></i>
            Filters
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="row mb-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label className="form-label">Type</label>
                    <select
                      className="form-select"
                      value={selectedFilter.type}
                      onChange={(e) => setSelectedFilter({...selectedFilter, type: e.target.value})}
                    >
                      <option value="all">All Types</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label className="form-label">Date</label>
                    <select
                      className="form-select"
                      value={selectedFilter.date}
                      onChange={(e) => setSelectedFilter({...selectedFilter, date: e.target.value})}
                    >
                      <option value="all">All Time</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Format</label>
                    <select
                      className="form-select"
                      value={selectedFilter.format}
                      onChange={(e) => setSelectedFilter({...selectedFilter, format: e.target.value})}
                    >
                      <option value="all">All Formats</option>
                      <option value="pdf">PDF</option>
                      <option value="csv">CSV</option>
                      <option value="xls">XLS</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col" className="w-25">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Format</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className={`fas fa-file-${report.format.toLowerCase()} text-muted me-3`}></i>
                          <div>
                            <div className="fw-bold">{report.name}</div>
                            <div className="d-flex gap-2 mt-1">
                              {report.tags.map((tag, index) => (
                                <span key={index} className="badge bg-light text-dark">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted">{report.type}</td>
                      <td className="text-muted">{report.date}</td>
                      <td>
                        <span className="badge bg-primary">
                          {report.format}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <button className="btn btn-sm btn-link text-muted">
                            <i className="fas fa-download"></i>
                          </button>
                          <button className="btn btn-sm btn-link text-muted">
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
      </div>

      <div className="row mt-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-muted">
              Showing {reports.length} reports
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary">
                <i className="fas fa-chevron-left me-1"></i>
                Previous
              </button>
              <button className="btn btn-outline-secondary">
                Next
                <i className="fas fa-chevron-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <NewReportModal 
        show={showNewReportModal} 
        onClose={() => setShowNewReportModal(false)} 
      />
    </div>
  );
};

export default ReportsPage;
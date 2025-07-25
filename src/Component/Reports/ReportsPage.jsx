import React, { useState } from 'react';
import NewReportModal from './NewReportModal';

const ReportsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewReportModal, setShowNewReportModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    type: 'all',
    date: 'all',
    format: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [exportModal, setExportModal] = useState(false);
  const [customReportModal, setCustomReportModal] = useState(false);
  const [customReportOptions, setCustomReportOptions] = useState({
    dataSource: 'all',
    columns: [],
    timeframe: 'weekly',
    format: 'pdf'
  });

  const reports = [
    { id: 1, name: 'Weekly Sales Report', type: 'Weekly', date: '2025-07-22', format: 'PDF', tags: ['Sales', 'Weekly'] },
    { id: 2, name: 'Monthly Revenue Analysis', type: 'Monthly', date: '2025-07-21', format: 'CSV', tags: ['Revenue', 'Monthly'] },
    { id: 3, name: 'Q2 Performance Review', type: 'Quarterly', date: '2025-07-20', format: 'XLS', tags: ['Performance', 'Quarterly'] },
    { id: 4, name: 'Marketing Campaign Results', type: 'Custom', date: '2025-07-19', format: 'PDF', tags: ['Marketing', 'Campaign'] },
    { id: 5, name: 'Team Productivity Stats', type: 'Weekly', date: '2025-07-18', format: 'CSV', tags: ['Team', 'Productivity'] },
  ];

  const filteredReports = reports.filter(report => {
    // Search term filter
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Type filter
    const matchesType = selectedFilter.type === 'all' || 
                       report.type.toLowerCase() === selectedFilter.type;
    
    // Format filter
    const matchesFormat = selectedFilter.format === 'all' || 
                         report.format.toLowerCase() === selectedFilter.format;
    
    // Date filter (simplified for demo)
    const matchesDate = selectedFilter.date === 'all' || true; // Actual date filtering would go here
    
    return matchesSearch && matchesType && matchesFormat && matchesDate;
  });

  const handleExport = (reportId, format) => {
    // In a real app, this would trigger the export process
    console.log(`Exporting report ${reportId} as ${format}`);
    setExportModal(false);
  };

  const handleCreateCustomReport = () => {
    // In a real app, this would create the custom report
    console.log('Creating custom report with options:', customReportOptions);
    setCustomReportModal(false);
  };

  return (
    <div className="">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div className="mb-3 mb-md-0">
              <h3 className="fw-bold mb-2">Reports Database</h3>
              <p className="text-muted mb-0">Manage and access your business reports</p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <div className="dropdown">
                <button 
                  className="btn btn-primary dropdown-toggle d-flex align-items-center" 
                  type="button" 
                  id="newReportDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-plus me-1 me-md-2"></i>
                  <span className="d-none d-sm-inline">New Report</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="newReportDropdown">
                  <li><button className="dropdown-item" onClick={() => setShowNewReportModal(true)}>Standard Report</button></li>
                  <li><button className="dropdown-item" onClick={() => setCustomReportModal(true)}>Custom Report</button></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><button className="dropdown-item">Weekly Report</button></li>
                  <li><button className="dropdown-item">Monthly Report</button></li>
                </ul>
              </div>
              <button className="btn btn-success d-flex align-items-center">
                <i className="fas fa-upload me-1 me-md-2"></i>
                <span className="d-none d-sm-inline">Import</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="row mb-4">
        <div className="col-12 col-md-8 mb-3 mb-md-0">
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
        <div className="col-12 col-md-4">
          <button
            className="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="fas fa-filter me-1 me-md-2"></i>
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Filters Card - Only shown when showFilters is true */}
      {showFilters && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {/* Type Filter */}
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <label className="form-label">Type</label>
                    <select
                      className="form-select"
                      value={selectedFilter.type}
                      onChange={(e) => setSelectedFilter({ ...selectedFilter, type: e.target.value })}
                    >
                      <option value="all">All Types</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  {/* Date Filter */}
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <label className="form-label">Date</label>
                    <select
                      className="form-select"
                      value={selectedFilter.date}
                      onChange={(e) => setSelectedFilter({ ...selectedFilter, date: e.target.value })}
                    >
                      <option value="all">All Time</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                    </select>
                  </div>

                  {/* Format Filter */}
                  <div className="col-12 col-md-4">
                    <label className="form-label">Format</label>
                    <select
                      className="form-select"
                      value={selectedFilter.format}
                      onChange={(e) => setSelectedFilter({ ...selectedFilter, format: e.target.value })}
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
            <div className="table-responsive p-2">
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
                  {filteredReports.map((report) => (
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
                          <div className="dropdown">
                            <button 
                              className="btn btn-sm btn-link text-primary dropdown-toggle" 
                              type="button" 
                              id={`exportDropdown-${report.id}`}
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-download"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby={`exportDropdown-${report.id}`}>
                              <li><button className="dropdown-item" onClick={() => handleExport(report.id, 'pdf')}>Export as PDF</button></li>
                              <li><button className="dropdown-item" onClick={() => handleExport(report.id, 'csv')}>Export as CSV</button></li>
                              <li><button className="dropdown-item" onClick={() => handleExport(report.id, 'xls')}>Export as Excel</button></li>
                            </ul>
                          </div>
                          <button className="btn btn-sm btn-link text-danger">
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
              Showing {filteredReports.length} of {reports.length} reports
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

      {/* New Standard Report Modal */}
      <NewReportModal
        show={showNewReportModal}
        onClose={() => setShowNewReportModal(false)}
      />

      {/* Custom Report Builder Modal */}
      {customReportModal && (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Custom Report Builder</h5>
                <button type="button" className="btn-close" onClick={() => setCustomReportModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Data Source</label>
                  <select 
                    className="form-select"
                    value={customReportOptions.dataSource}
                    onChange={(e) => setCustomReportOptions({...customReportOptions, dataSource: e.target.value})}
                  >
                    <option value="all">All Data</option>
                    <option value="sales">Sales Data</option>
                    <option value="marketing">Marketing Data</option>
                    <option value="finance">Financial Data</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Columns</label>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="col-date"/>
                    <label className="form-check-label" htmlFor="col-date">Date</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="col-amount"/>
                    <label className="form-check-label" htmlFor="col-amount">Amount</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="col-category"/>
                    <label className="form-check-label" htmlFor="col-category">Category</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="col-status"/>
                    <label className="form-check-label" htmlFor="col-status">Status</label>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Timeframe</label>
                    <select 
                      className="form-select"
                      value={customReportOptions.timeframe}
                      onChange={(e) => setCustomReportOptions({...customReportOptions, timeframe: e.target.value})}
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="custom">Custom Range</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Export Format</label>
                    <select 
                      className="form-select"
                      value={customReportOptions.format}
                      onChange={(e) => setCustomReportOptions({...customReportOptions, format: e.target.value})}
                    >
                      <option value="pdf">PDF</option>
                      <option value="csv">CSV</option>
                      <option value="xls">Excel</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setCustomReportModal(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleCreateCustomReport}>Generate Report</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export Center Modal */}
      {exportModal && (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Export Options</h5>
                <button type="button" className="btn-close" onClick={() => setExportModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Select Format</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exportFormat" id="format-pdf" value="pdf" defaultChecked/>
                    <label className="form-check-label" htmlFor="format-pdf">PDF Document</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exportFormat" id="format-csv" value="csv"/>
                    <label className="form-check-label" htmlFor="format-csv">CSV (Excel compatible)</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exportFormat" id="format-xls" value="xls"/>
                    <label className="form-check-label" htmlFor="format-xls">Excel Workbook</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setExportModal(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={() => handleExport(null, 'pdf')}>Export</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
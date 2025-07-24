import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LiquidityRatios = () => {
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState('PDF');

  const handleCloseExportModal = () => setShowExportModal(false);
  const handleShowExportModal = () => setShowExportModal(true);

  return (
    <div className="">
      {/* Page Header */}
      <div className="">
        <div className="">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h2 fw-bold mb-2">Liquidity Ratios</h1>
              <p className="text-muted mb-0">Analysis of company's ability to pay short-term obligations</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <select className="form-select">
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
              <button 
                className="btn btn-primary d-flex align-items-center gap-2"
                onClick={handleShowExportModal}
              >
                <i className="fas fa-download"></i>
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="bg-light-blue p-3 rounded">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="h6 fw-semibold text-dark mb-0">Current Ratio</h3>
                      <i className="fas fa-wallet text-primary fs-4"></i>
                    </div>
                    <p className="h2 fw-bold text-primary mb-1">2.5</p>
                    <p className="small text-muted mb-0">Benchmark: &gt; 2.0</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light-blue p-3 rounded">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="h6 fw-semibold text-dark mb-0">Quick Ratio</h3>
                      <i className="fas fa-bolt text-primary fs-4"></i>
                    </div>
                    <p className="h2 fw-bold text-primary mb-1">1.8</p>
                    <p className="small text-muted mb-0">Benchmark: &gt; 1.0</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light-blue p-3 rounded">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="h6 fw-semibold text-dark mb-0">Cash Ratio</h3>
                      <i className="fas fa-coins text-primary fs-4"></i>
                    </div>
                    <p className="h2 fw-bold text-primary mb-1">0.8</p>
                    <p className="small text-muted mb-0">Benchmark: &gt; 0.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ratio Components Table */}
          <div className="card">
            <div className="card-body">
              <h3 className="h5 fw-semibold text-dark mb-3">Ratio Components</h3>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-start">Component</th>
                      <th className="text-end">Amount ($)</th>
                      <th className="text-end">Change (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">Current Assets</td>
                      <td className="text-end">1,250,000</td>
                      <td className="text-end text-success">+12.5%</td>
                    </tr>
                    <tr>
                      <td className="text-start">Current Liabilities</td>
                      <td className="text-end">500,000</td>
                      <td className="text-end text-danger">-5.2%</td>
                    </tr>
                    <tr>
                      <td className="text-start">Cash & Equivalents</td>
                      <td className="text-end">400,000</td>
                      <td className="text-end text-success">+8.3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      <Modal show={showExportModal} onHide={handleCloseExportModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Export Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exportFormat" className="form-label">Select Format</label>
            <select 
              id="exportFormat" 
              className="form-select"
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
            >
              <option value="PDF">PDF</option>
              <option value="CSV">CSV</option>
              <option value="Excel">Excel</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseExportModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseExportModal}>
            Export
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LiquidityRatios;
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const KPIModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="h4">Company KPI Detailed Analysis</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-1">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5 className="mb-3">Revenue Breakdown</h5>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span>Product Sales</span>
                    <span className="badge bg-primary bg-opacity-10 text-primary">$647,000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span>Services Revenue</span>
                    <span className="badge bg-primary bg-opacity-10 text-primary">$187,500</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span>Subscriptions</span>
                    <span className="badge bg-primary bg-opacity-10 text-primary">$13,423</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span className="fw-bold">Total Revenue</span>
                    <span className="badge bg-primary text-white">$847,923</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <h5 className="mb-3">Customer Metrics</h5>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span>New Customers</span>
                    <span className="badge bg-success bg-opacity-10 text-success">1,482</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span>Active Customers</span>
                    <span className="badge bg-success bg-opacity-10 text-success">24.5K</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span>Churn Rate</span>
                    <span className="badge bg-danger bg-opacity-10 text-danger">2.8%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                    <span className="fw-bold">Satisfaction</span>
                    <span className="badge bg-success text-white">94.8%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="mb-3">Performance Against Targets</h5>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>KPI</th>
                  <th>Current</th>
                  <th>Target</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Revenue</td>
                  <td>$847,923</td>
                  <td>$900,000</td>
                  <td>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-primary" style={{ width: '94%' }}></div>
                    </div>
                  </td>
                  <td><span className="badge bg-success">On Track</span></td>
                </tr>
                <tr>
                  <td>New Customers</td>
                  <td>1,482</td>
                  <td>2,000</td>
                  <td>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-warning" style={{ width: '74%' }}></div>
                    </div>
                  </td>
                  <td><span className="badge bg-warning text-dark">Needs Work</span></td>
                </tr>
                <tr>
                  <td>Operating Costs</td>
                  <td>$235,842</td>
                  <td>$220,000</td>
                  <td>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-danger" style={{ width: '82%' }}></div>
                    </div>
                  </td>
                  <td><span className="badge bg-danger">Over Budget</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="alert alert-info">
          <i className="fas fa-info-circle me-2"></i>
          Data is updated in real-time. Last refresh was today at 09:30 AM.
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          <i className="fas fa-download me-2"></i>
          Export Report
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KPIModal;
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddOpportunityModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Opportunity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter company name"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Deal Value</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter deal value"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Pipeline Stage</label>
            <select className="form-select">
              <option>Qualification</option>
              <option>Meeting</option>
              <option>Proposal</option>
              <option>Closing</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Probability (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              className="form-control"
              placeholder="Enter probability"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              placeholder="Add opportunity details..."
              rows={3}
            ></textarea>
          </div>
          <div className="col-12">
            <label className="form-label">Next Steps</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter next action items"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary">
          Add Opportunity
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddOpportunityModal;
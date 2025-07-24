import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditLeadModal = ({ lead, onHide }) => {
  return (
    <Modal show={!!lead} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Lead: {lead?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={lead?.name || ''}
              onChange={() => {}}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Company</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter company name"
              value={lead?.company || ''}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              value={lead?.email || ''}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
              value={lead?.phone || ''}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Lead Source</label>
            <select className="form-select" value={lead?.source || ''}>
              <option>Website</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Cold Call</option>
              <option>Event</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select className="form-select" value={lead?.status || ''}>
              <option>New</option>
              <option>Contacted</option>
              <option>Qualified</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Notes</label>
            <textarea
              className="form-control"
              placeholder="Add any additional notes..."
              rows={3}
            ></textarea>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditLeadModal;
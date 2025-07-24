import React from 'react';

const EditLeadModal = ({ lead, onClose }) => {
  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Lead: {lead.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lead.name}
                  onChange={() => {}}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={lead.company}
                  onChange={() => {}}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={lead.email}
                  onChange={() => {}}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  value={lead.phone}
                  onChange={() => {}}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Lead Source</label>
                <select className="form-select" value={lead.source}>
                  <option>Website</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>Cold Call</option>
                  <option>Event</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select className="form-select" value={lead.status}>
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
          </div>
          <div className="modal-footer">
            <button
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLeadModal;
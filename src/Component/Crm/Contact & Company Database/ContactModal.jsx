import React from 'react';

const ContactModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Contact</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter full name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Position</label>
                <input type="text" className="form-control" placeholder="Enter position" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email address" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter phone number" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" placeholder="Enter company name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Tags</label>
                <input type="text" className="form-control" placeholder="Enter tags (comma separated)" />
              </div>
              <div className="col-12">
                <label className="form-label">Notes</label>
                <textarea className="form-control" placeholder="Add any additional notes..." rows={3}></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary">Add Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
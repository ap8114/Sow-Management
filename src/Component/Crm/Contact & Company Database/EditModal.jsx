import React from 'react';

const EditModal = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit: {contact.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={contact.name} 
                  onChange={() => {}}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  {contact.type === 'contact' ? 'Position' : 'Industry'}
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={contact.type === 'contact' ? contact.position : contact.industry}
                  onChange={() => {}}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={contact.email}
                  onChange={() => {}}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  value={contact.phone}
                  onChange={() => {}}
                />
              </div>
              {contact.type === 'contact' && (
                <div className="col-md-6">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    value={contact.company}
                    onChange={() => {}}
                  />
                </div>
              )}
              <div className="col-md-6">
                <label className="form-label">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  value={contact.tags.join(', ')}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
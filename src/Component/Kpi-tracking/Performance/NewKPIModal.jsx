import React from 'react';

const NewKPIModal = ({ show, onClose, newKPI, setNewKPI }) => {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('New KPI submitted:', newKPI);
    onClose();
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-weight-bold">Create New KPI</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">KPI Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={newKPI.title}
                  onChange={(e) => setNewKPI({...newKPI, title: e.target.value})}
                  placeholder="Enter KPI title"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Target Value</label>
                <input
                  type="text"
                  className="form-control"
                  value={newKPI.target}
                  onChange={(e) => setNewKPI({...newKPI, target: e.target.value})}
                  placeholder="Enter target value"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Frequency</label>
                <select
                  className="form-select"
                  value={newKPI.frequency}
                  onChange={(e) => setNewKPI({...newKPI, frequency: e.target.value})}
                  required
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={newKPI.description}
                  onChange={(e) => setNewKPI({...newKPI, description: e.target.value})}
                  placeholder="Enter KPI description"
                ></textarea>
              </div>
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Save KPI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewKPIModal;
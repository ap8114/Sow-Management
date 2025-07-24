import React from 'react';

const NewKPIModal = ({ show, onClose, newKPI, setNewKPI }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-weight-bold">Create New KPI</h5>
            <button 
              type="button" 
              className="close" 
              onClick={onClose}
            >
              <span>&times;</span>
            </button>
          </div>
          
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label font-weight-medium">KPI Title</label>
              <input
                type="text"
                value={newKPI.title}
                onChange={(e) => setNewKPI({...newKPI, title: e.target.value})}
                className="form-control"
                placeholder="Enter KPI title"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label font-weight-medium">Target Value</label>
              <input
                type="text"
                value={newKPI.target}
                onChange={(e) => setNewKPI({...newKPI, target: e.target.value})}
                className="form-control"
                placeholder="Enter target value"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label font-weight-medium">Frequency</label>
              <select
                value={newKPI.frequency}
                onChange={(e) => setNewKPI({...newKPI, frequency: e.target.value})}
                className="form-control"
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label font-weight-medium">Description</label>
              <textarea
                value={newKPI.description}
                onChange={(e) => setNewKPI({...newKPI, description: e.target.value})}
                className="form-control"
                rows="3"
                placeholder="Enter KPI description"
              ></textarea>
            </div>
          </div>
          
          <div className="modal-footer">
            <button
              onClick={onClose}
              className="btn btn-outline-secondary"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Handle save KPI logic here
                onClose();
              }}
              className="btn btn-primary"
            >
              Save KPI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewKPIModal;
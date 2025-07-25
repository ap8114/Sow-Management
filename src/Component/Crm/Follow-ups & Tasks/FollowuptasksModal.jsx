import React from 'react';

const FollowuptasksModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Task</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Enter task title"
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Enter task description"
                ></textarea>
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Due Date</label>
                  <input 
                    type="date"
                    className="form-control"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label">Assignee</label>
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter assignee name"
                  />
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Priority</label>
                  <select className="form-select">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Upcoming</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-outline-secondary" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowuptasksModal;
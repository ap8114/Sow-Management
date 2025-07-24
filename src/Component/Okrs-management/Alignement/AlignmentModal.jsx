import React from 'react';

const AlignmentModal = ({ isOpen, onClose, dependency }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dependency Details</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
            ></button>
          </div>
          
          <div className="modal-body">
            {dependency && (
              <div className="d-flex flex-column gap-3">
                <div className="bg-light p-3 rounded">
                  <div className="small text-muted mb-1">Department</div>
                  <div className="fw-medium">{dependency.department}</div>
                </div>
                
                <div className="bg-light p-3 rounded">
                  <div className="small text-muted mb-1">Objective</div>
                  <div className="fw-medium">{dependency.objective}</div>
                </div>
                
                <div className="bg-light p-3 rounded">
                  <div className="small text-muted mb-1">Dependent Team</div>
                  <div className="fw-medium">{dependency.team}</div>
                </div>
                
                <div className="bg-light p-3 rounded">
                  <div className="small text-muted mb-1">Requirement</div>
                  <div className="fw-medium">{dependency.requirement}</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlignmentModal;
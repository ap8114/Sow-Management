import React from 'react';

const IndividualModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header border-bottom">
                        <h2 className="modal-title h5 fw-bold">Create New OKR</h2>
                        <button
                            onClick={onClose}
                            className="btn-close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form className="d-flex flex-column gap-4">
                            <div>
                                <label className="form-label">
                                    Objective Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your objective"
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    rows={4}
                                    placeholder="Describe your objective"
                                    maxLength={500}
                                ></textarea>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Time Period
                                    </label>
                                    <select className="form-select">
                                        <option>Q3 2025</option>
                                        <option>Q4 2025</option>
                                        <option>Q1 2026</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Owner
                                    </label>
                                    <select className="form-select">
                                        <option>John Smith</option>
                                        <option>Sarah Johnson</option>
                                        <option>Michael Brown</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="form-label">
                                    Key Results
                                </label>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <input
                                            type="text"
                                            className="form-control flex-grow-1"
                                            placeholder="Enter a key result"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-link text-primary"
                                        >
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer border-top">
                        <button
                            onClick={onClose}
                            className="btn btn-outline-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary"
                        >
                            Create OKR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualModal;
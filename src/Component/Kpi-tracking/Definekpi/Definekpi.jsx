import React, { useState } from 'react';
import NewKPIModal from './NewKPIModal';

const Definekpi = () => {
  const [isNewKPIModalOpen, setIsNewKPIModalOpen] = useState(false);
  const [newKPI, setNewKPI] = useState({
    title: '',
    target: '',
    frequency: 'Monthly',
    description: ''
  });

  return (
    <div className="">
      {/* Main Content Area */}
      <main className="">
        <div className="">
          <div className="card-body">
           <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
  {/* Text Block */}
  <div>
    <h1 className="h2 fw-bold mb-2 mb-md-1">Define KPIs</h1>
    <p className="text-muted mb-0">Create and manage your key performance indicators</p>
  </div>

  {/* Button */}
  <button 
    onClick={() => setIsNewKPIModalOpen(true)}
    className="btn btn-primary d-flex align-items-center gap-2 flex-shrink-0"
  >
    <i className="fas fa-plus"></i>
    <span className="d-none d-sm-inline">New KPI</span>
    <span className="d-inline d-sm-none">Add</span>
  </button>
</div>


            <div className="row">
              {/* Revenue Growth */}
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h3 className="h5 font-weight-semibold">Revenue Growth</h3>
                        <p className="small text-muted">Monthly target: 15%</p>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-link text-muted p-0">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-link text-muted p-0">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="small font-weight-medium text-muted mb-2">Current Progress</p>
                      <div className="d-flex align-items-center">
                        <div className="progress flex-grow-1" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar bg-success" 
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                        <span className="small ml-2">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h3 className="h5 font-weight-semibold">Customer Satisfaction</h3>
                        <p className="small text-muted">Monthly target: 95%</p>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-link text-muted p-0">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-link text-muted p-0">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="small font-weight-medium text-muted mb-2">Current Progress</p>
                      <div className="d-flex align-items-center">
                        <div className="progress flex-grow-1" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar bg-warning" 
                            style={{ width: '88%' }}
                          ></div>
                        </div>
                        <span className="small ml-2">88%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Employee Retention */}
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h3 className="h5 font-weight-semibold">Employee Retention</h3>
                        <p className="small text-muted">Yearly target: 90%</p>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-link text-muted p-0">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-link text-muted p-0">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="small font-weight-medium text-muted mb-2">Current Progress</p>
                      <div className="d-flex align-items-center">
                        <div className="progress flex-grow-1" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar bg-success" 
                            style={{ width: '95%' }}
                          ></div>
                        </div>
                        <span className="small ml-2">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* New KPI Modal */}
      <NewKPIModal 
        show={isNewKPIModalOpen} 
        onClose={() => setIsNewKPIModalOpen(false)}
        newKPI={newKPI}
        setNewKPI={setNewKPI}
      />
    </div>
  );
};

export default Definekpi;
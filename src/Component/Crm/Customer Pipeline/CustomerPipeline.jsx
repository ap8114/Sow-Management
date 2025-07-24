import React, { useState } from 'react';
import AddOpportunityModal from './AddOpportunityModal';
import EditLeadModal from './EditLeadModal';

const CustomerPipeline = () => {
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  return (
    <div className="container-fluid p-4">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h3 mb-1">Customer Pipeline</h1>
              <p className="text-muted mb-0">Track and manage your sales pipeline stages</p>
            </div>
            <button
              onClick={() => setIsOpportunityModalOpen(true)}
              className="btn btn-primary"
            >
              <i className="fas fa-plus me-2"></i>
              Add Opportunity
            </button>
          </div>

          <div className="row mb-4">
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h6 mb-0">Qualification</h3>
                  <span className="badge bg-primary">5</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Tech Corp Solution', value: '$25,000', probability: '20%' },
                    { name: 'Digital Systems Inc', value: '$15,000', probability: '25%' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-white rounded shadow-sm mb-2">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-medium">{item.name}</span>
                        <span className="text-primary fw-medium">{item.value}</span>
                      </div>
                      <div className="d-flex justify-content-between text-muted small">
                        <span>Probability: {item.probability}</span>
                        <button className="btn btn-sm text-muted p-0">
                          <i className="fas fa-ellipsis-h"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h6 mb-0">Meeting</h3>
                  <span className="badge bg-warning text-dark">3</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Global Innovations', value: '$45,000', probability: '40%' },
                    { name: 'Smart Solutions Ltd', value: '$30,000', probability: '35%' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-white rounded shadow-sm mb-2">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-medium">{item.name}</span>
                        <span className="text-primary fw-medium">{item.value}</span>
                      </div>
                      <div className="d-flex justify-content-between text-muted small">
                        <span>Probability: {item.probability}</span>
                        <button className="btn btn-sm text-muted p-0">
                          <i className="fas fa-ellipsis-h"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h6 mb-0">Proposal</h3>
                  <span className="badge bg-purple">4</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Future Tech Inc', value: '$60,000', probability: '65%' },
                    { name: 'Innovative Labs', value: '$38,000', probability: '70%' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-white rounded shadow-sm mb-2">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-medium">{item.name}</span>
                        <span className="text-primary fw-medium">{item.value}</span>
                      </div>
                      <div className="d-flex justify-content-between text-muted small">
                        <span>Probability: {item.probability}</span>
                        <button className="btn btn-sm text-muted p-0">
                          <i className="fas fa-ellipsis-h"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h6 mb-0">Closing</h3>
                  <span className="badge bg-success">2</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Enterprise Solutions', value: '$85,000', probability: '90%' },
                    { name: 'Tech Ventures', value: '$52,000', probability: '85%' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-white rounded shadow-sm mb-2">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-medium">{item.name}</span>
                        <span className="text-primary fw-medium">{item.value}</span>
                      </div>
                      <div className="d-flex justify-content-between text-muted small">
                        <span>Probability: {item.probability}</span>
                        <button className="btn btn-sm text-muted p-0">
                          <i className="fas fa-ellipsis-h"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Source</th>
                  <th>Last Contact</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    name: "John Miller",
                    company: "Tech Solutions Inc.",
                    email: "john@techsolutions.com",
                    phone: "+1 (555) 123-4567",
                    status: "new",
                    source: "Website",
                    lastContact: "2025-07-21"
                  },
                  {
                    id: 2,
                    name: "Sarah Wilson",
                    company: "Digital Marketing Pro",
                    email: "sarah@dmpro.com",
                    phone: "+1 (555) 234-5678",
                    status: "contacted",
                    source: "LinkedIn",
                    lastContact: "2025-07-20"
                  },
                  {
                    id: 3,
                    name: "Michael Chang",
                    company: "Innovation Labs",
                    email: "michael@innolabs.com",
                    phone: "+1 (555) 345-6789",
                    status: "qualified",
                    source: "Referral",
                    lastContact: "2025-07-19"
                  }
                ].filter(lead => filterStatus === 'all' || lead.status === filterStatus)
                  .map((lead) => (
                    <tr key={lead.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="fw-medium">{lead.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">{lead.company}</span>
                      </td>
                      <td>
                        <span className="text-muted">{lead.email}</span>
                      </td>
                      <td>
                        <span className="text-muted">{lead.phone}</span>
                      </td>
                      <td>
                        <span className={`badge 
                          ${lead.status === 'new' ? 'bg-success' :
                            lead.status === 'contacted' ? 'bg-warning text-dark' :
                              'bg-purple'}`}>
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <span className="text-muted">{lead.source}</span>
                      </td>
                      <td>
                        <span className="text-muted">{lead.lastContact}</span>
                      </td>
                      <td className="text-end">
                        <div className="d-flex justify-content-end gap-2">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddOpportunityModal 
        show={isOpportunityModalOpen} 
        onHide={() => setIsOpportunityModalOpen(false)} 
      />

      {selectedLead && (
        <EditLeadModal 
          lead={selectedLead} 
          onHide={() => setSelectedLead(null)} 
        />
      )}
    </div>
  );
};

export default CustomerPipeline;
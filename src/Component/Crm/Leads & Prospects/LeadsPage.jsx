import React, { useState } from 'react';
import NewLeadModal from './NewLeadModal'; // We'll create this component next
import EditLeadModal from './EditLeadModal'; // We'll create this component next

const LeadsPage = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const leadsData = [
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
  ];

  const filteredLeads = leadsData.filter(lead => 
    filterStatus === 'all' || lead.status === filterStatus
  );

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h2 mb-1">Leads & Prospects</h1>
              <p className="text-muted mb-0">Manage and track your sales leads</p>
            </div>
            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <i className="fas fa-plus"></i>
              <span>Add New Lead</span>
            </button>
          </div>

          <div className="mb-4 d-flex justify-content-between">
            <div className="btn-group">
              <button
                onClick={() => setFilterStatus('all')}
                className={`btn ${filterStatus === 'all' ? 'btn-primary' : 'btn-outline-secondary'}`}
              >
                All Leads
              </button>
              <button
                onClick={() => setFilterStatus('new')}
                className={`btn ${filterStatus === 'new' ? 'btn-success' : 'btn-outline-secondary'}`}
              >
                New
              </button>
              <button
                onClick={() => setFilterStatus('contacted')}
                className={`btn ${filterStatus === 'contacted' ? 'btn-warning' : 'btn-outline-secondary'}`}
              >
                Contacted
              </button>
              <button
                onClick={() => setFilterStatus('qualified')}
                className={`btn ${filterStatus === 'qualified' ? 'btn-purple' : 'btn-outline-secondary'}`}
              >
                Qualified
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
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
                {filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td>
                      <span className="fw-medium">{lead.name}</span>
                    </td>
                    <td>{lead.company}</td>
                    <td>{lead.email}</td>
                    <td>{lead.phone}</td>
                    <td>
                      <span className={`badge 
                        ${lead.status === 'new' ? 'bg-success' : 
                           lead.status === 'contacted' ? 'bg-warning' : 
                           'bg-purple'}`}>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </td>
                    <td>{lead.source}</td>
                    <td>{lead.lastContact}</td>
                    <td className="text-end">
                      <div className="d-flex gap-2 justify-content-end">
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

      {/* New Lead Modal */}
      <NewLeadModal 
        show={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
      />

      {/* Edit Lead Modal */}
      {selectedLead && (
        <EditLeadModal 
          lead={selectedLead} 
          onClose={() => setSelectedLead(null)} 
        />
      )}
    </div>
  );
};

export default LeadsPage;

// Add custom CSS for purple color in Bootstrap
const style = document.createElement('style');
style.textContent = `
  .btn-purple, .bg-purple {
    background-color: #6f42c1;
    color: white;
  }
  .btn-purple:hover {
    background-color: #5a32a3;
    color: white;
  }
`;
document.head.appendChild(style);
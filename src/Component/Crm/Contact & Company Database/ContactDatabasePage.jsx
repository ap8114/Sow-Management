import React, { useState } from 'react';
import ContactModal from './ContactModal';
import CompanyModal from './CompanyModal';
import EditModal from './EditModal';

const ContactDatabasePage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const contacts = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@techcorp.com',
      phone: '+1 (555) 123-4567',
      company: 'TechCorp Solutions',
      position: 'CEO',
      type: 'contact',
      lastContact: '2025-07-21',
      tags: ['Decision Maker', 'Hot Lead']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@digitalinc.com',
      phone: '+1 (555) 234-5678',
      company: 'Digital Innovations Inc',
      position: 'Marketing Director',
      type: 'contact',
      lastContact: '2025-07-20',
      tags: ['Marketing', 'Active']
    },
    {
      id: 3,
      name: 'TechCorp Solutions',
      email: 'info@techcorp.com',
      phone: '+1 (555) 123-4500',
      industry: 'Technology',
      employees: '50-100',
      type: 'company',
      revenue: '$5M - $10M',
      tags: ['Enterprise', 'Technology']
    },
    {
      id: 4,
      name: 'Digital Innovations Inc',
      email: 'contact@digitalinc.com',
      phone: '+1 (555) 234-5600',
      industry: 'Digital Marketing',
      employees: '20-50',
      type: 'company',
      revenue: '$1M - $5M',
      tags: ['SMB', 'Marketing']
    }
  ];

  const filteredContacts = contacts.filter(contact => 
    filterType === 'all' || contact.type === filterType
  );

  return (
    <div className="container-fluid p-4 bg-light">
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h2 mb-1">Contact & Company Database</h1>
              <p className="text-muted mb-0">Manage your contacts and company information</p>
            </div>
            <div className="d-flex gap-2">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                <i className="fas fa-user-plus"></i>
                <span>Add Contact</span>
              </button>
              <button
                onClick={() => setIsCompanyModalOpen(true)}
                className="btn btn-success d-flex align-items-center gap-2"
              >
                <i className="fas fa-building"></i>
                <span>Add Company</span>
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button
                onClick={() => setFilterType('all')}
                className={`nav-link ${filterType === 'all' ? 'active' : ''}`}
              >
                All ({contacts.length})
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setFilterType('contact')}
                className={`nav-link ${filterType === 'contact' ? 'active' : ''}`}
              >
                Contacts ({contacts.filter(c => c.type === 'contact').length})
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setFilterType('company')}
                className={`nav-link ${filterType === 'company' ? 'active' : ''}`}
              >
                Companies ({contacts.filter(c => c.type === 'company').length})
              </button>
            </li>
          </ul>

          {/* Contacts/Companies Grid */}
          <div className="row g-4">
            {filteredContacts.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
                <div className="card h-100 hover-shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className={`rounded-circle p-3 ${item.type === 'contact' ? 'bg-primary-light' : 'bg-success-light'}`}>
                          <i className={`fas ${item.type === 'contact' ? 'fa-user text-primary' : 'fa-building text-success'}`}></i>
                        </div>
                        <div>
                          <h5 className="mb-0">{item.name}</h5>
                          {item.type === 'contact' && (
                            <p className="text-muted small mb-0">{item.position}</p>
                          )}
                          {item.type === 'company' && (
                            <p className="text-muted small mb-0">{item.industry}</p>
                          )}
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          onClick={() => setSelectedContact(item)}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <i className="fas fa-envelope text-muted"></i>
                        <span className="small">{item.email}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <i className="fas fa-phone text-muted"></i>
                        <span className="small">{item.phone}</span>
                      </div>
                      {item.type === 'contact' && (
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <i className="fas fa-building text-muted"></i>
                          <span className="small">{item.company}</span>
                        </div>
                      )}
                      {item.type === 'company' && (
                        <>
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <i className="fas fa-users text-muted"></i>
                            <span className="small">{item.employees} employees</span>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <i className="fas fa-dollar-sign text-muted"></i>
                            <span className="small">{item.revenue}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="badge bg-light text-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.type === 'contact' && item.lastContact && (
                      <div className="border-top pt-2">
                        <p className="text-muted small mb-0">
                          Last contact: {item.lastContact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ContactModal 
        show={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <CompanyModal 
        show={isCompanyModalOpen} 
        onClose={() => setIsCompanyModalOpen(false)} 
      />
      
      {selectedContact && (
        <EditModal 
          contact={selectedContact} 
          onClose={() => setSelectedContact(null)} 
        />
      )}
    </div>
  );
};

export default ContactDatabasePage;
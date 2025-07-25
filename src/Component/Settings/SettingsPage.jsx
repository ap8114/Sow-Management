import React, { useState, useEffect } from 'react';
import AddUserModal from './AddUserModal';

const SettingsPage = () => {
  // State for various settings
  const [showApiKey, setShowApiKey] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User'
  });
 
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [activeTab, setActiveTab] = useState('user');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: true },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Manager', status: false }
  ]);
  const [editingUser, setEditingUser] = useState(null);
  const dummyApiKey = 'sk_test_51NXXXXXXXXXXXXXXXXXXXXXXx';

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUser.id ? { ...user, ...formData } : user
      ));
    } else {
      // Add new user
      const newUser = {
        id: users.length + 1,
        ...formData,
        status: true
      };
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
    setFormData({ name: '', email: '', role: 'User' });
    setEditingUser(null);
  };

  // Handle edit user
  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role
    });
    setIsModalOpen(true);
  };

  // Handle delete user
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Handle role change
  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  // Handle status toggle
  const handleStatusToggle = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: !user.status } : user
    ));
  };

  // Initialize tooltips
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row">
        <div className="col-12">
          <div className="mb-4">
            <h1 className="h3 fw-bold mb-2">Settings</h1>
            <p className="text-muted mb-0">Manage and configure your application settings</p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="row mb-3">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'user' ? 'active' : ''}`}
                onClick={() => setActiveTab('user')}
              >
                User Management
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'notification' ? 'active' : ''}`}
                onClick={() => setActiveTab('notification')}
              >
                Notification Settings
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'integration' ? 'active' : ''}`}
                onClick={() => setActiveTab('integration')}
              >
                Integration Settings
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'system' ? 'active' : ''}`}
                onClick={() => setActiveTab('system')}
              >
                System Configuration
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          {/* User Management Tab */}
          {activeTab === 'user' && (
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-4 gap-2">
                  <div>
                    <h2 className="h5 h-md-4 mb-1">User Management</h2>
                    <p className="text-muted small mb-0">Manage user access and roles</p>
                  </div>
                  <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary btn-sm py-2 px-3  w-md-auto"
                >
                  <i className="fas fa-plus me-1 d-md-none"></i>
                  <span>Add User</span>
                </button>
                </div>

                <div className="table-responsive">
                  <table className="table table-sm table-hover">
                    <thead className="table-light">
                      <tr>
                        <th className="ps-2">Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th className="text-end pe-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.id}>
                          <td className="ps-2">{user.name}</td>
                          <td className="text-truncate" style={{maxWidth: '150px'}}>{user.email}</td>
                          <td>
                            <select 
                              className="form-select form-select-sm"
                              value={user.role}
                              onChange={(e) => handleRoleChange(user.id, e.target.value)}
                            >
                              <option value="Admin">Admin</option>
                              <option value="Manager">Manager</option>
                              <option value="User">User</option>
                            </select>
                          </td>
                          <td>
                            <div className="form-check form-switch d-inline-block">
                              <input 
                                type="checkbox" 
                                className="form-check-input" 
                                checked={user.status}
                                onChange={() => handleStatusToggle(user.id)}
                              />
                            </div>
                          </td>
                          <td className="text-end pe-2">
                            <div className="d-flex justify-content-end gap-2">
                              <button 
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleEditUser(user)}
                                data-bs-toggle="tooltip" 
                                data-bs-placement="top" 
                                title="Edit User"
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button 
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDeleteUser(user.id)}
                                data-bs-toggle="tooltip" 
                                data-bs-placement="top" 
                                title="Delete User"
                              >
                                <i className="fas fa-trash-alt"></i>
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
          )}

          {/* Notification Settings Tab */}
          {activeTab === 'notification' && (
            <div className="card">
              <div className="card-body">
                <h2 className="h5 h-md-4 mb-3">Notification Settings</h2>
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex justify-content-between align-items-center py-3">
                    <div className="me-3">
                      <h5 className="mb-1 small fw-bold">Email Notifications</h5>
                      <small className="text-muted">Receive updates via email</small>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="emailNotifications"
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                      />
                    </div>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center py-3">
                    <div className="me-3">
                      <h5 className="mb-1 small fw-bold">SMS Notifications</h5>
                      <small className="text-muted">Receive updates via SMS</small>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="smsNotifications"
                        checked={smsNotifications}
                        onChange={() => setSmsNotifications(!smsNotifications)}
                      />
                    </div>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center py-3">
                    <div className="me-3">
                      <h5 className="mb-1 small fw-bold">Push Notifications</h5>
                      <small className="text-muted">Receive push notifications</small>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="pushNotifications"
                        checked={pushNotifications}
                        onChange={() => setPushNotifications(!pushNotifications)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integration Settings Tab */}
          {activeTab === 'integration' && (
            <div className="card">
              <div className="card-body">
                <h2 className="h5 h-md-4 mb-3">Integration Settings</h2>
                <div className="mb-3">
                  <label className="form-label small fw-bold">API Key</label>
                  <div className="input-group input-group-sm">
                    <input
                      type={showApiKey ? "text" : "password"}
                      className="form-control form-control-sm"
                      value={dummyApiKey}
                      readOnly
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="btn btn-outline-secondary"
                      type="button"
                    >
                      {showApiKey ? 'Hide' : 'Show'}
                    </button>
                    <button className="btn btn-outline-secondary" type="button">
                      Copy
                    </button>
                  </div>
                </div>
                <div className="mb-0">
                  <label className="form-label small fw-bold">Webhook URL</label>
                  <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    placeholder="https://your-domain.com/webhook" 
                  />
                </div>
              </div>
            </div>
          )}

          {/* System Configuration Tab */}
          {activeTab === 'system' && (
            <div className="card">
              <div className="card-body">
                <h2 className="h5 h-md-4 mb-3">System Configuration</h2>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Currency</label>
                      <select className="form-select form-select-sm">
                        <option>USD - US Dollar</option>
                        <option>EUR - Euro</option>
                        <option>GBP - British Pound</option>
                        <option>JPY - Japanese Yen</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-0">
                      <label className="form-label small fw-bold">Time Zone</label>
                      <select className="form-select form-select-sm">
                        <option>UTC (GMT+0)</option>
                        <option>EST (GMT-5)</option>
                        <option>PST (GMT-8)</option>
                        <option>JST (GMT+9)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit User Modal */}
      {/* {isModalOpen && (
        <div className="modal fade show" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingUser ? 'Edit User' : 'Add New User'}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingUser(null);
                  }}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => {
                      setIsModalOpen(false);
                      setEditingUser(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editingUser ? 'Update User' : 'Add User'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}

      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    
    </div>
  );
};

export default SettingsPage;
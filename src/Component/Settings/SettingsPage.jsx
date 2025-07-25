import React, { useState, useEffect } from 'react';
import AddUserModal from './AddUserModal';
import UserManagement from './UserManagement';

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
            <UserManagement/>
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
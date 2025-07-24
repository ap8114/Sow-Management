import React, { useState } from 'react';
import AddUserModal from './AddUserModal';

const SettingsPage = () => {
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
  const dummyApiKey = 'sk_test_51NXXXXXXXXXXXXXXXXXXXXXXx';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', role: 'User' });
  };

  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      {/* Header Section */}
      <div className="row">
        <div className="col-12">
          <div className="mb-4">
            <h1 className="h2 fw-bold mb-2">Settings</h1>
            <p className="text-muted mb-0">Manage and configure your application settings</p>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {/* User Management */}
        <div className="col-12">
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
                      <th className="text-end pe-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ps-2">John Doe</td>
                      <td className="text-truncate" style={{maxWidth: '150px'}}>john@example.com</td>
                      <td>
                        <select className="form-select form-select-sm">
                          <option>Admin</option>
                          <option>Manager</option>
                          <option>User</option>
                        </select>
                      </td>
                      <td className="text-end pe-2">
                        <div className="form-check form-switch d-inline-block">
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="user1Status"
                            defaultChecked
                          />
                        </div>
                      </td>
                    </tr>
                    {/* Add more user rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="col-12">
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
        </div>

        {/* Integration Settings */}
        <div className="col-12">
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
        </div>

        {/* System Configuration */}
        <div className="col-12">
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
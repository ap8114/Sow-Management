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
    <div className="">
      <div className="row">
        <div className="col-12">
          <div className="mb-4">
            <h1 className="h2 fw-bold mb-2">Settings</h1>
            <p className="text-muted">Manage and configure your application settings</p>
          </div>

          <div className="row">
            {/* User Management */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h2 className="h4">User Management</h2>
                      <p className="text-muted mb-0">Manage user access and roles</p>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="btn btn-primary">
                      Add User
                    </button>
                  </div>

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John Doe</td>
                          <td>john@example.com</td>
                          <td>
                            <select className="form-control form-control-sm">
                              <option>Admin</option>
                              <option>Manager</option>
                              <option>User</option>
                            </select>
                          </td>
                          <td>
                            <div className="custom-control custom-switch">
                              <input 
                                type="checkbox" 
                                className="custom-control-input" 
                                id="user1Status"
                                defaultChecked
                              />
                              <label className="custom-control-label" htmlFor="user1Status"></label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 mb-4">Notification Settings</h2>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Email Notifications</h5>
                        <small className="text-muted">Receive updates via email</small>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="emailNotifications"
                          checked={emailNotifications}
                          onChange={() => setEmailNotifications(!emailNotifications)}
                        />
                        <label className="custom-control-label" htmlFor="emailNotifications"></label>
                      </div>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">SMS Notifications</h5>
                        <small className="text-muted">Receive updates via SMS</small>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="smsNotifications"
                          checked={smsNotifications}
                          onChange={() => setSmsNotifications(!smsNotifications)}
                        />
                        <label className="custom-control-label" htmlFor="smsNotifications"></label>
                      </div>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Push Notifications</h5>
                        <small className="text-muted">Receive push notifications</small>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="pushNotifications"
                          checked={pushNotifications}
                          onChange={() => setPushNotifications(!pushNotifications)}
                        />
                        <label className="custom-control-label" htmlFor="pushNotifications"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Settings */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 mb-4">Integration Settings</h2>
                  <div className="form-group">
                    <label>API Key</label>
                    <div className="input-group">
                      <input
                        type={showApiKey ? "text" : "password"}
                        className="form-control"
                        value={dummyApiKey}
                        readOnly
                      />
                      <div className="input-group-append">
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
                  </div>
                  <div className="form-group">
                    <label>Webhook URL</label>
                    <input 
                      type="text" 
                      className="form-control" 
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
                  <h2 className="h4 mb-4">System Configuration</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Currency</label>
                        <select className="form-control">
                          <option>USD - US Dollar</option>
                          <option>EUR - Euro</option>
                          <option>GBP - British Pound</option>
                          <option>JPY - Japanese Yen</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Time Zone</label>
                        <select className="form-control">
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
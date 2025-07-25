import React, { useState, useEffect } from 'react';
import RolePermissionsModal from './RolePermissionsModal';
import AddUserModal from './AddUserModal';

const UserManagement = () => {
  // Sample initial users data
  const initialUsers = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'Admin',
      status: true,
      permissions: {
        okrsManagement: { enabled: true, setCompanyOkrs: true, departmentOkrs: true, individualOkrs: true },
        kpiTracking: { enabled: true, defineKpis: true, teamKpis: true },
        financialRatioAnalysis: { enabled: false },
        crm: { enabled: false },
        reports: { enabled: true }
      }
    },
    {
      id: 2,
      name: 'Manager User',
      email: 'manager@example.com',
      role: 'Manager',
      status: true,
      permissions: {
        okrsManagement: { enabled: true, setCompanyOkrs: false, departmentOkrs: true },
        kpiTracking: { enabled: true, defineKpis: false, teamKpis: true },
        financialRatioAnalysis: { enabled: false },
        crm: { enabled: true, leadsProspects: true, customerPipeline: true },
        reports: { enabled: true }
      }
    },
    {
      id: 3,
      name: 'Regular User',
      email: 'user@example.com',
      role: 'User',
      status: true,
      permissions: {
        okrsManagement: { enabled: false },
        kpiTracking: { enabled: false },
        financialRatioAnalysis: { enabled: false },
        crm: { enabled: false },
        reports: { enabled: true }
      }
    }
  ];

  const [users, setUsers] = useState(initialUsers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    password: '',
    confirmPassword: '',
    status: true
  });

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

  // Handle edit user
  const handleEditUser = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      password: '',
      confirmPassword: '',
      status: user.status
    });
    setIsAddModalOpen(true);
  };

  // Handle delete user
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Handle edit permissions
  const handleEditPermissions = (user) => {
    setSelectedUser(user);
    setIsPermissionsModalOpen(true);
  };

  // Handle save permissions
  const handleSavePermissions = (userId, updatedPermissions) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, permissions: updatedPermissions } : user
    ));
  };

  // Handle add/edit user form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (selectedUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === selectedUser.id ? { 
          ...user, 
          name: formData.name,
          email: formData.email,
          role: formData.role,
          status: formData.status
        } : user
      ));
    } else {
      // Add new user
      const newUser = {
        id: Math.max(...users.map(u => u.id)) + 1,
        name: formData.name,
        email: formData.email,
        role: formData.role,
        status: formData.status,
        permissions: {
          okrsManagement: { enabled: false },
          kpiTracking: { enabled: false },
          financialRatioAnalysis: { enabled: false },
          crm: { enabled: false },
          reports: { enabled: false }
        }
      };
      setUsers([...users, newUser]);
    }

    setIsAddModalOpen(false);
    setFormData({
      name: '',
      email: '',
      role: 'User',
      password: '',
      confirmPassword: '',
      status: true
    });
    setSelectedUser(null);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-4 gap-2">
          <div>
            <h2 className="h5 h-md-4 mb-1">User Management</h2>
            <p className="text-muted small mb-0">Manage user access and roles</p>
          </div>
          <button 
            onClick={() => {
              setSelectedUser(null);
              setIsAddModalOpen(true);
            }}
            className="btn btn-primary btn-sm py-2 px-3 w-md-auto"
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
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleEditPermissions(user)}
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top" 
                        title="Edit Permissions"
                      >
                        <i className="fas fa-key"></i>
                      </button>
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

      {/* Add/Edit User Modal */}
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setSelectedUser(null);
          setFormData({
            name: '',
            email: '',
            role: 'User',
            password: '',
            confirmPassword: '',
            status: true
          });
        }}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isEditMode={!!selectedUser}
      />

      {/* Permissions Modal */}
      <RolePermissionsModal
        isOpen={isPermissionsModalOpen}
        onClose={() => setIsPermissionsModalOpen(false)}
        user={selectedUser}
        onSave={(updatedPermissions) => handleSavePermissions(selectedUser.id, updatedPermissions)}
        initialPermissions={selectedUser?.permissions || {}}
      />
    </div>
  );
};

export default UserManagement;
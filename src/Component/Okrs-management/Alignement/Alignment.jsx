import React, { useState } from 'react';
import AlignmentModal from './AlignmentModal';

const Alignment = () => {
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [activeItem, setActiveItem] = useState('alignment-dependencies');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDependency, setSelectedDependency] = useState(null);

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev =>
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const menuItems = [
    {
      id: 'okrs',
      title: 'OKRs Management',
      icon: 'fas fa-bullseye',
      color: '#3B82F6',
      submenu: [
        { id: 'company-okrs', title: 'Set Company OKRs' },
        { id: 'department-okrs', title: 'Department OKRs' },
        { id: 'individual-okrs', title: 'Individual OKRs' },
        { id: 'okr-progress', title: 'OKR Progress Tracker' },
        { id: 'alignment-dependencies', title: 'Alignment & Dependencies' },
        { id: 'okr-reports', title: 'OKR Reports' }
      ]
    },
    {
      id: 'kpi',
      title: 'KPI Tracking',
      icon: 'fas fa-chart-line',
      color: '#10B981',
      submenu: [
        { id: 'define-kpis', title: 'Define KPIs' },
        { id: 'team-kpis', title: 'Team KPIs' },
        { id: 'performance-dashboards', title: 'Performance Dashboards' },
        { id: 'kpi-trends', title: 'KPI Trends & Analytics' },
        { id: 'alerts-threshold', title: 'Alerts / Threshold Management' }
      ]
    },
    {
      id: 'financial',
      title: 'Financial Ratio Analysis',
      icon: 'fas fa-calculator',
      color: '#F59E0B',
      submenu: [
        { id: 'financial-overview', title: 'Financial Overview' },
        { id: 'ratio-analysis', title: 'Ratio Analysis' },
        { id: 'liquidity-ratios', title: 'Liquidity Ratios' },
        { id: 'profitability-ratios', title: 'Profitability Ratios' },
        { id: 'efficiency-ratios', title: 'Efficiency Ratios' },
        { id: 'solvency-ratios', title: 'Solvency Ratios' },
        { id: 'balance-sheet', title: 'Balance Sheet / P&L' },
        { id: 'custom-metrics', title: 'Custom Financial Metrics' }
      ]
    },
    {
      id: 'crm',
      title: 'CRM',
      icon: 'fas fa-users',
      color: '#8B5CF6',
      submenu: [
        { id: 'leads-prospects', title: 'Leads & Prospects' },
        { id: 'customer-pipeline', title: 'Customer Pipeline' },
        { id: 'contact-database', title: 'Contact & Company Database' },
        { id: 'follow-ups', title: 'Follow-ups & Tasks' },
        { id: 'sales-forecasting', title: 'Sales Forecasting' },
        { id: 'crm-reports', title: 'CRM Reports' }
      ]
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: 'fas fa-file-alt',
      color: '#EC4899',
      submenu: [
        { id: 'weekly-monthly', title: 'Weekly & Monthly Reports' },
        { id: 'custom-builder', title: 'Custom Report Builder' },
        { id: 'export-center', title: 'Export Center (PDF, CSV, XLS)' }
      ]
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: 'fas fa-cog',
      color: '#64748B',
      submenu: [
        { id: 'user-management', title: 'User Management' },
        { id: 'role-access', title: 'Role-based Access' },
        { id: 'notifications', title: 'Notification Settings' },
        { id: 'integrations', title: 'Integration Settings' },
        { id: 'system-config', title: 'System Configurations' }
      ]
    }
  ];

  const alignmentData = [
    {
      department: 'Sales',
      objective: 'Increase Revenue Growth',
      dependencies: [
        { team: 'Marketing', requirement: 'Lead Generation Campaign' },
        { team: 'Product', requirement: 'New Feature Release' }
      ],
      status: 'on-track',
      progress: 75
    },
    {
      department: 'Marketing',
      objective: 'Enhance Brand Awareness',
      dependencies: [
        { team: 'Design', requirement: 'Brand Guidelines Update' },
        { team: 'Content', requirement: 'Social Media Strategy' }
      ],
      status: 'at-risk',
      progress: 45
    },
    {
      department: 'Engineering',
      objective: 'Platform Scalability',
      dependencies: [
        { team: 'DevOps', requirement: 'Infrastructure Upgrade' },
        { team: 'QA', requirement: 'Performance Testing' }
      ],
      status: 'completed',
      progress: 100
    }
  ];

  return (
    <div className="">
      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">

        {/* Main Content Area */}
        <main className="">
          <div className="">
            {/* Header Section */}
            <div className="mb-5">
              <h1 className="h2 fw-bold mb-2">Alignment & Dependencies</h1>
              <p className="text-muted">Track dependencies and alignment between teams and objectives</p>
            </div>
            
            {/* Alignment Cards */}
            <div className="d-flex flex-column gap-4 bg-white">
              {alignmentData.map((item, index) => (
                <div key={index} className="border rounded p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className={`rounded p-3 d-flex align-items-center justify-content-center ${
                        item.department === 'Sales' ? 'bg-blue-100' :
                        item.department === 'Marketing' ? 'bg-purple-100' : 'bg-green-100'
                      }`}>
                        <i className={`${
                          item.department === 'Sales' ? 'fas fa-chart-line text-blue-600' :
                          item.department === 'Marketing' ? 'fas fa-bullhorn text-purple-600' : 'fas fa-code text-green-600'
                        }`}></i>
                      </div>
                      <div>
                        <h3 className="h5 fw-semibold mb-0">{item.objective}</h3>
                        <p className="small text-muted mb-0">{item.department} Department</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="text-end">
                        <div className={`small fw-medium ${
                          item.status === 'on-track' ? 'text-success' :
                          item.status === 'at-risk' ? 'text-warning' : 'text-primary'
                        }`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </div>
                        <div className="h4 fw-bold mb-0">{item.progress}%</div>
                      </div>
                      <div className="progress" style={{width: '150px', height: '8px'}}>
                        <div
                          className={`progress-bar ${
                            item.status === 'on-track' ? 'bg-success' :
                            item.status === 'at-risk' ? 'bg-warning' : 'bg-primary'
                          }`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="small fw-medium mb-3">Dependencies</h4>
                    <div className="d-flex flex-column gap-3">
                      {item.dependencies.map((dep, idx) => (
                        <div key={idx} className="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                          <div className="d-flex align-items-center gap-3">
                            <div className="bg-white rounded p-2 d-flex align-items-center justify-content-center">
                              <i className="fas fa-link text-muted"></i>
                            </div>
                            <div>
                              <div className="small fw-medium">{dep.team}</div>
                              <div className="small text-muted">{dep.requirement}</div>
                            </div>
                          </div>
                          <button 
                            onClick={() => {
                              setSelectedDependency({
                                team: dep.team,
                                requirement: dep.requirement,
                                department: item.department,
                                objective: item.objective
                              });
                              setIsModalOpen(true);
                            }}
                            className="btn btn-link btn-sm text-primary"
                          >
                            View Details
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <AlignmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        dependency={selectedDependency}
      />
    </div>
  );
};

export default Alignment;
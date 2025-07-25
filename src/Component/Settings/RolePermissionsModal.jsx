import React, { useState } from 'react';

const RolePermissionsModal = ({ 
  isOpen, 
  onClose, 
  user, 
  onSave,
  initialPermissions = {}
}) => {
  const [permissions, setPermissions] = useState(initialPermissions);

  // Define the menu structure with submenus
  const menuStructure = [
    {
      name: "OKRs Management",
      key: "okrsManagement",
      submenus: [
        { name: "Set Company OKRs", key: "setCompanyOkrs" },
        { name: "Department OKRs", key: "departmentOkrs" },
        { name: "Individual OKRs", key: "individualOkrs" },
        { name: "OKR Progress Tracker", key: "okrProgressTracker" },
        { name: "Alignment & Dependencies", key: "alignmentDependencies" },
        { name: "OKR Reports", key: "okrReports" }
      ]
    },
    {
      name: "KPI Tracking",
      key: "kpiTracking",
      submenus: [
        { name: "Define KPIs", key: "defineKpis" },
        { name: "Team KPIs", key: "teamKpis" },
        { name: "Company KPIs", key: "companyKpis" },
        { name: "Individual KPIs", key: "individualKpis" },
        { name: "Performance Dashboards", key: "performanceDashboards" },
        { name: "KPI Trends & Analytics", key: "kpiTrendsAnalytics" },
        { name: "Alerts / Threshold Management", key: "alertsThreshold" }
      ]
    },
    {
      name: "Financial Ratio Analysis",
      key: "financialRatioAnalysis",
      submenus: [
        { name: "Financial Overview", key: "financialOverview" },
        { name: "Ratio Analysis", key: "ratioAnalysis" },
        { name: "Liquidity Ratios", key: "liquidityRatios" },
        { name: "Profitability Ratios", key: "profitabilityRatios" },
        { name: "Efficiency Ratios", key: "efficiencyRatios" },
        { name: "Solvency Ratios", key: "solvencyRatios" },
        { name: "Balance Sheet / P&L", key: "balanceSheetPl" },
        { name: "Custom Financial Metrics", key: "customFinancialMetrics" }
      ]
    },
    {
      name: "CRM",
      key: "crm",
      submenus: [
        { name: "Leads & Prospects", key: "leadsProspects" },
        { name: "Customer Pipeline", key: "customerPipeline" },
        { name: "Contact & Company Database", key: "contactDatabase" },
        { name: "Follow-ups & Tasks", key: "followupsTasks" },
        { name: "Sales Forecasting", key: "salesForecasting" },
        { name: "CRM Reports", key: "crmReports" }
      ]
    },
    {
      name: "Reports",
      key: "reports",
      submenus: []
    }
  ];

  const handlePermissionChange = (key, subkey = null) => {
    setPermissions(prev => {
      if (subkey) {
        // Toggle submenu permission
        return {
          ...prev,
          [key]: {
            ...prev[key],
            [subkey]: !prev[key]?.[subkey]
          }
        };
      } else {
        // Toggle main menu permission
        const newValue = !prev[key]?.enabled;
        
        // If enabling main menu, enable all submenus by default
        // If disabling main menu, disable all submenus
        const newSubmenus = menuStructure.find(m => m.key === key)?.submenus.reduce((acc, submenu) => {
          acc[submenu.key] = newValue;
          return acc;
        }, {}) || {};
        
        return {
          ...prev,
          [key]: {
            enabled: newValue,
            ...newSubmenus
          }
        };
      }
    });
  };

  const handleSave = () => {
    onSave(permissions);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Manage Permissions for {user?.name || 'User'}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th width="30%">Menu</th>
                    <th>Permissions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuStructure.map(menu => (
                    <React.Fragment key={menu.key}>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={permissions[menu.key]?.enabled || false}
                              onChange={() => handlePermissionChange(menu.key)}
                              id={`menu-${menu.key}`}
                            />
                            <label className="form-check-label fw-bold" htmlFor={`menu-${menu.key}`}>
                              {menu.name}
                            </label>
                          </div>
                        </td>
                        <td>
                          {menu.submenus.length > 0 && (
                            <div className="d-flex flex-wrap gap-3">
                              {menu.submenus.map(submenu => (
                                <div key={submenu.key} className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={permissions[menu.key]?.[submenu.key] || false}
                                    onChange={() => handlePermissionChange(menu.key, submenu.key)}
                                    id={`submenu-${submenu.key}`}
                                    disabled={!permissions[menu.key]?.enabled}
                                  />
                                  <label className="form-check-label" htmlFor={`submenu-${submenu.key}`}>
                                    {submenu.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save Permissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePermissionsModal;
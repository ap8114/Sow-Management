import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBullseye,
  faUsers,
  faUser,
  faTachometerAlt,
  faLink,
  faClipboardList,
  faSlidersH,
  faChartPie,
  faChartLine,
  faExclamationTriangle,
  faCalculator,
  faChartBar,
  faBook,
  faDatabase,
  faTasks,
  faFileExport,
  faUserCog,
  faCogs,
  faAddressBook,
  faFileAlt,
  faGear,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) setCollapsed(true);
  };

  // Define color styles for icons
  const iconColors = {
    default: "#6c757d",
    primary: "#0d6efd",
    success: "#198754",
    warning: "#ffc107",
    danger: "#dc3545",
    info: "#0dcaf0",
    purple: "#6f42c1",
    orange: "#fd7e14",
  };

  const menus = [
    {
      name: "OKRs Management",
      icon: faCircleDot,
      iconColor: iconColors.primary,
      key: "okrs",
      subItems: [
        { label: "Set Company OKRs", path: "/okrs/company", icon: faBullseye, iconColor: iconColors.danger },
        { label: "Department OKRs", path: "/okrs/department", icon: faUsers, iconColor: iconColors.success },
        { label: "Individual OKRs", path: "/okrs/individual", icon: faUser, iconColor: iconColors.info },
        { label: "OKR Progress Tracker", path: "/okrs/tracker", icon: faTachometerAlt, iconColor: iconColors.warning },
        { label: "Alignment & Dependencies", path: "/okrs/alignment", icon: faLink, iconColor: iconColors.orange },
        { label: "OKR Reports", path: "/okrs/reports", icon: faClipboardList, iconColor: iconColors.purple },
      ],
    },
    {
      name: "KPI Tracking",
      icon: faChartLine,
      iconColor: iconColors.success,
      key: "kpi",
      subItems: [
        { label: "Define KPIs", path: "/kpi/define", icon: faSlidersH, iconColor: iconColors.danger },
        { label: "Team KPIs", path: "/kpi/team", icon: faUsers, iconColor: iconColors.success },
        { label: "Performance Dashboards", path: "/kpi/performance", icon: faChartPie, iconColor: iconColors.primary },
        { label: "KPI Trends & Analytics", path: "/kpi/trends", icon: faChartLine, iconColor: iconColors.warning },
        { label: "Alerts / Threshold Management", path: "/kpi/alerts", icon: faExclamationTriangle, iconColor: iconColors.danger },
      ],
    },
    {
      name: "Financial Ratio Analysis",
      icon: faCalculator,
      iconColor: iconColors.info,
      key: "finance",
      subItems: [
        { label: "Financial Overview", path: "/finance/overview", icon: faChartPie, iconColor: iconColors.primary },
        { label: "Ratio Analysis", path: "/finance/ratio", icon: faChartLine, iconColor: iconColors.success },
        { label: "Liquidity Ratios", path: "/finance/liquidity", icon: faTachometerAlt, iconColor: iconColors.warning },
        { label: "Profitability Ratios", path: "/finance/profitability", icon: faBullseye, iconColor: iconColors.danger },
        { label: "Efficiency Ratios", path: "/finance/efficiency", icon: faUsers, iconColor: iconColors.success },
        { label: "Solvency Ratios", path: "/finance/solvency", icon: faChartBar, iconColor: iconColors.info },
        { label: "Balance Sheet / P&L", path: "/finance/balance", icon: faBook, iconColor: iconColors.purple },
        { label: "Custom Financial Metrics", path: "/finance/custom", icon: faClipboardList, iconColor: iconColors.orange },
      ],
    },
    {
      name: "CRM",
      icon: faAddressBook,
      iconColor: iconColors.danger,
      key: "crm",
      subItems: [
        { label: "Leads & Prospects", path: "/crm/leads", icon: faBullseye, iconColor: iconColors.danger },
        { label: "Customer Pipeline", path: "/crm/pipeline", icon: faChartLine, iconColor: iconColors.success },
        { label: "Contact & Company Database", path: "/crm/database", icon: faDatabase, iconColor: iconColors.primary },
        { label: "Follow-ups & Tasks", path: "/crm/tasks", icon: faTasks, iconColor: iconColors.orange },
        { label: "Sales Forecasting", path: "/crm/forecast", icon: faChartBar, iconColor: iconColors.info },
        { label: "CRM Reports", path: "/crm/reports", icon: faClipboardList, iconColor: iconColors.purple },
      ],
    },
    {
      name: "Reports",
      icon: faFileAlt,
      iconColor: iconColors.purple,
      key: "reports",
      subItems: [
        { label: "View Reports", path: "/reports/view", icon: faBook, iconColor: iconColors.primary },
        { label: "Export Data", path: "/reports/export", icon: faFileExport, iconColor: iconColors.success },
      ],
    },
    {
      name: "Settings",
      icon: faGear,
      iconColor: iconColors.warning,
      key: "settings",
      subItems: [
        { label: "User Settings", path: "/settings/user", icon: faUserCog, iconColor: iconColors.info },
        { label: "System Preferences", path: "/settings/system", icon: faCogs, iconColor: iconColors.danger },
      ],
    },
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {menus.map((menu, index) => (
            <ui key={index} className="menu-item">
              <div className="menu-link" onClick={() => toggleMenu(menu.key)}>
                <FontAwesomeIcon icon={menu.icon} style={{ color: menu.iconColor }} className="menu-icon me-2" />
                {!collapsed && <span className="menu-text">{menu.name}</span>}
                {!collapsed && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`arrow-icon ${activeMenu === menu.key ? "rotate" : ""}`}
                  />
                )}
              </div>
              {!collapsed && activeMenu === menu.key && (
                <ul className="submenu">
                  {menu.subItems.map((sub, subIndex) => (
                    <ul
                      key={subIndex}
                      className={`submenu-item ${isActive(sub.path) ? "active-sub" : ""}`}
                      onClick={() => handleNavigate(sub.path)}
                    >
                      <FontAwesomeIcon icon={sub.icon} style={{ color: sub.iconColor }} className="submenu-icon me-2" />
                      {sub.label}
                    </ul>
                  ))}
                </ul>
              )}
            </ui>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

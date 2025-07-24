import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

import Navbar from "./Layout/Navbar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import Sidebar from "./Layout/Sidebar";
import DepartmentOKRs from "./Component/Okrs-management/Departement/DepartmentOKRs";
import Companyokrs from "./Component/Okrs-management/Company/Companyokrs";
import Indivudal from "./Component/Okrs-management/Individual/indivudal";
import Alignment from "./Component/Okrs-management/Alignement/Alignment";
import Report from "./Component/Okrs-management/Reports/Report";
import ProgressOKRs from "./Component/Okrs-management/Progress/ProgressOKRs";
import Definekpi from "./Component/Kpi-tracking/Definekpi/Definekpi";
import Team from "./Component/Kpi-tracking/Teamkpi/Team";
import Performancekpi from "./Component/Kpi-tracking/Performance/Performancekpi";
import Trends from "./Component/Kpi-tracking/TrendsAnalytics/Trends";
import Alerts from "./Component/Kpi-tracking/Alerts/Alerts";
import FinancialOverview from "./Component/Financial-ratio/Financialowerview/FinancialOverview";
import RatioAnalysis from "./Component/Financial-ratio/RatioAnalysis/RatioAnalysis";
import LiquidityRatios from "./Component/Financial-ratio/Liquidityratios/LiquidityRatios";
import ProfitabilityRatios from "./Component/Financial-ratio/Profitabilityratios/ProfitabilityRatios";
import SolvencyRatios from "./Component/Financial-ratio/Solvencyratios/SolvencyRatios";
import EfficiencyRatios from "./Component/Financial-ratio/Efficiencyratios/EfficiencyRatios";
import BalanceSheetPage from "./Component/Financial-ratio/Balancesheet/BalanceSheetPage";
import CustomMetricsPage from "./Component/Financial-ratio/Customfinancialmetrics/CustomMetricsPage";
import CompanyKPI from "./Component/Kpi-tracking/CompanyKPI/CompanyKPI";
import IndividualKPI from "./Component/Kpi-tracking/IndividualKPI/IndividualKPI";
import LeadsPage from "./Component/Crm/Leads & Prospects/LeadsPage";
import CustomerPipeline from "./Component/Crm/Customer Pipeline/CustomerPipeline";
import CRMReports from "./Component/Crm/CRM Reports/CRMReports";
import SalesForecastingPage from "./Component/Crm/Sales Forecasting/SalesForecastingPage";
import ContactDatabasePage from "./Component/Crm/Contact & Company Database/ContactDatabasePage";
import Followuptasks from "./Component/Crm/Follow-ups & Tasks/Followuptasks";
import ReportsPage from "./Component/Reports/ReportsPage";
import SettingsPage from "./Component/Settings/SettingsPage";


function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => window.innerWidth <= 768;
    if (checkIfMobile()) {
      setIsSidebarCollapsed(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();

  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password";

  return (
    <>
      {hideLayout ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      ) : (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Sidebar
              collapsed={isSidebarCollapsed}
              setCollapsed={setIsSidebarCollapsed}
            />
            <div
              className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""
                }`}
            >
              <Routes>
                {/* OKRs Management */}
                <Route path="okrs/companyokrs" element={<Companyokrs />} />
                <Route path="okrs/departmentokrs" element={<DepartmentOKRs />} />
                <Route path="okrs/individual" element={<Indivudal />} />
                <Route path="okrs/alignment" element={<Alignment />} />
                <Route path="okrs/reports" element={<Report />} />
                <Route path="okrs/tracker" element={<ProgressOKRs />} />

                {/* KPI Tracking */}
                <Route path="kpi/define" element={<Definekpi />} />
                <Route path="kpi/team" element={<Team />} />
                <Route path="kpi/performance" element={<Performancekpi />} />
                <Route path="kpi/trends" element={<Trends />} />
                <Route path="kpi/alerts" element={<Alerts />} />
                <Route path="kpi/companykpi" element={<CompanyKPI />} />
                <Route path="kpi/individualkpi" element={<IndividualKPI />} />

                {/* Financial Ratio */}
                <Route path="finance/overview" element={<FinancialOverview />} />
                <Route path="finance/ratio" element={<RatioAnalysis />} />
                <Route path="finance/liquidity" element={<LiquidityRatios />} />
                <Route path="finance/profitability" element={<ProfitabilityRatios />} />
                <Route path="finance/solvency" element={<SolvencyRatios />} />
                <Route path="finance/efficiency" element={<EfficiencyRatios />} />
                <Route path="finance/balance" element={<BalanceSheetPage />} />
                <Route path="finance/custom" element={<CustomMetricsPage />} />

                {/* CRM */}
                <Route path="/crm/leads" element={<LeadsPage />} />
                <Route path="/crm/pipeline" element={<CustomerPipeline />} />
                <Route path="/crm/database" element={<ContactDatabasePage />} />
                <Route path="/crm/tasks" element={<Followuptasks />} />
                <Route path="/crm/forecast" element={<SalesForecastingPage />} />
                <Route path="/crm/reports" element={<CRMReports />} />

                {/* Reports */}
                <Route path="/reports" element={<ReportsPage />} />

                   {/* Reports */}
                <Route path="/settings" element={<SettingsPage />} />

              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;

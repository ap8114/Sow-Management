import React, { useState } from 'react';
import { Button, Card, ProgressBar, Badge } from 'react-bootstrap';
import KPIModal from './KPIModal';

const IndividualKPI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newKpi, setNewKpi] = useState({
    name: '',
    target: '',
    details: '',
    owner: '',
    department: '',
    timeline: '',
  });
  
  const [kpiData, setKpiData] = useState([
    {
      id: 1,
      name: "Improve Technical Skills",
      target: "Complete Advanced React Course",
      progress: 75,
      status: "On Track",
      timeline: "Q3 2025",
      owner: "David Chen",
      department: "Engineering",
      details: "Build 3 full-stack projects by end of quarter"
    },
    {
      id: 2,
      name: "Enhance Team Collaboration",
      target: "Implement Weekly Team Sync-ups",
      progress: 45,
      status: "At Risk",
      timeline: "Q3 2025",
      owner: "Sarah Johnson",
      department: "Product",
      details: "Improve team satisfaction score to 4.5/5"
    },
    {
      id: 3,
      name: "Increase Market Share",
      target: "15% Growth in Target Market",
      progress: 60,
      status: "On Track",
      timeline: "Q3 2025",
      owner: "Michael Smith",
      department: "Sales",
      details: "Focus on enterprise segment expansion"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKpiData = {
      ...newKpi,
      id: kpiData.length + 1,
      progress: 0,
      status: 'On Track',
    };
    setKpiData([...kpiData, newKpiData]);
    setIsModalOpen(false);
    setNewKpi({
      name: '',
      target: '',
      details: '',
      owner: '',
      department: '',
      timeline: '',
    });
  };

  return (
    <div className="">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 mb-1">Individual KPIs</h1>
          <p className="text-muted mb-0">Track and manage personal objectives and key results</p>
        </div>
        <div className="d-flex gap-3">
          <Button 
            variant="primary" 
            onClick={() => setIsModalOpen(true)}
            className="d-flex align-items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Add New KPI
          </Button>
          <Button variant="outline-secondary" className="d-flex align-items-center gap-2">
            <i className="fas fa-filter"></i>
            Filter
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="row g-4">
        {kpiData.map((kpi) => (
          <div key={kpi.id} className="col-12">
            <Card className="h-100">
              <Card.Body>
                <div className="row">
                  <div className="col-md-4">
                    <h3 className="h5">{kpi.name}</h3>
                    <p className="text-muted mb-3">{kpi.details}</p>
                    <div className="d-flex align-items-center gap-2">
                      <Badge 
                        bg={kpi.status === 'On Track' ? 'success' : 'warning'} 
                        className="text-capitalize"
                      >
                        {kpi.status}
                      </Badge>
                      <span className="text-muted small">{kpi.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="col-md-4 d-flex flex-column justify-content-center">
                    <div className="mb-2">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="small">Progress</span>
                        <span className="small fw-bold">{kpi.progress}%</span>
                      </div>
                      <ProgressBar 
                        now={kpi.progress} 
                        variant={kpi.status === 'On Track' ? 'success' : 'warning'} 
                        className="mb-3"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="small text-muted mb-1">Owner</p>
                      <p className="mb-0">{kpi.owner}</p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Department</p>
                      <p className="mb-0">{kpi.department}</p>
                    </div>
                  </div>
                  
                  <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <Button variant="link" className="text-muted p-0">
                      <i className="fas fa-ellipsis-v"></i>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* KPI Modal */}
      <KPIModal 
        show={isModalOpen} 
        handleClose={() => setIsModalOpen(false)}
        newKpi={newKpi}
        setNewKpi={setNewKpi}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default IndividualKPI;
// SalesForecastingPage.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactECharts from 'echarts-for-react';
import AddDealModal from './AddDealModal';

const initialColumns = [
  {
    id: 'qualified',
    title: 'Qualified Lead',
    deals: [
      {
        id: '1',
        title: 'Enterprise Software Deal',
        value: 50000,
        company: 'TechCorp Solutions',
        closeDate: '2025-08-15',
        owner: 'John Smith'
      },
      {
        id: '2',
        title: 'Cloud Migration Project',
        value: 75000,
        company: 'Digital Innovations Inc',
        closeDate: '2025-09-01',
        owner: 'Sarah Johnson'
      }
    ]
  },
  {
    id: 'negotiation',
    title: 'Negotiation',
    deals: [
      {
        id: '3',
        title: 'Security Suite Implementation',
        value: 120000,
        company: 'SecureNet Systems',
        closeDate: '2025-08-30',
        owner: 'Mike Wilson'
      }
    ]
  },
  {
    id: 'closedWon',
    title: 'Closed Won',
    deals: [
      {
        id: '4',
        title: 'Data Analytics Platform',
        value: 95000,
        company: 'DataTech Solutions',
        closeDate: '2025-07-20',
        owner: 'Emily Brown'
      }
    ]
  },
  {
    id: 'closedLost',
    title: 'Closed Lost',
    deals: []
  }
];

const SalesForecastingPage = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTotalForecast = () => {
    return columns.reduce((total, column) => {
      if (column.id !== 'closedLost') {
        return total + column.deals.reduce((sum, deal) => sum + deal.value, 0);
      }
      return total;
    }, 0);
  };

  const getChartOption = () => {
    return {
      animation: false,
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Forecast',
          type: 'line',
          data: [150000, 180000, 220000, 270000, 320000, 350000],
          itemStyle: {
            color: '#3B82F6'
          }
        }
      ]
    };
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const sourceColumn = columns.find(col => col.id === source.droppableId);
    const destColumn = columns.find(col => col.id === destination.droppableId);

    if (sourceColumn && destColumn) {
      const sourceDeal = sourceColumn.deals[source.index];
      const newColumns = columns.map(col => {
        if (col.id === source.droppableId) {
          return {
            ...col,
            deals: col.deals.filter((_, index) => index !== source.index)
          };
        }
        if (col.id === destination.droppableId) {
          const newDeals = [...col.deals];
          newDeals.splice(destination.index, 0, sourceDeal);
          return {
            ...col,
            deals: newDeals
          };
        }
        return col;
      });
      setColumns(newColumns);
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2">Sales Forecasting</h1>
          <p className="text-muted">Track and manage your sales pipeline</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="form-select"
          >
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Add Deal
          </button>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-muted">Total Pipeline</h5>
              <p className="h4">${getTotalForecast().toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-muted">Weighted Forecast</h5>
              <p className="h4">${(getTotalForecast() * 0.7).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-muted">Monthly Target</h5>
              <p className="h4">$300,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-muted">Achievement</h5>
              <p className="h4">85%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Forecast Trend</h5>
          <ReactECharts option={getChartOption()} style={{ height: '300px' }} />
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="d-flex overflow-auto pb-3" style={{ gap: '1.5rem' }}>
          {columns.map(column => (
            <div key={column.id} className="flex-grow-1" style={{ minWidth: '300px' }}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">{column.title}</h5>
                    <span className="text-muted">
                      ${column.deals.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()}
                    </span>
                  </div>
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="d-flex flex-column gap-3"
                      >
                        {column.deals.map((deal, index) => (
                          <Draggable key={deal.id} draggableId={deal.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="card"
                              >
                                <div className="card-body">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="mb-0">{deal.company}</h6>
                                    <span className="text-primary fw-bold">
                                      ${deal.value.toLocaleString()}
                                    </span>
                                  </div>
                                  <p className="small text-muted mb-2">{deal.title}</p>
                                  <div className="d-flex justify-content-between small text-muted">
                                    <span>Close: {deal.closeDate}</span>
                                    <span>{deal.owner}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddDealModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(dealData) => {
          const newDeal = {
            id: Math.random().toString(),
            ...dealData
          };
          setColumns(prevColumns => prevColumns.map(col => {
            if (col.id === 'qualified') {
              return {
                ...col,
                deals: [...col.deals, newDeal]
              };
            }
            return col;
          }));
        }}
      />
    </div>
  );
};

export default SalesForecastingPage;
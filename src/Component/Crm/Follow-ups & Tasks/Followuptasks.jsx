import React, { useState } from 'react';
import FollowuptasksModal from './FollowuptasksModal';

const FollowUpTasks = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Tasks');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Review Q3 performance metrics',
      description: 'Analyze quarterly results and prepare summary report',
      dueDate: '2025-07-28',
      assignee: 'Sarah Johnson',
      priority: 'High',
      status: 'In Progress',
      progress: 65,
      completed: false
    },
    {
      id: 2,
      title: 'Client onboarding for new account',
      description: 'Complete paperwork and schedule training sessions',
      dueDate: '2025-08-05',
      assignee: 'Michael Chen',
      priority: 'Medium',
      status: 'Upcoming',
      progress: 0,
      completed: false
    },
    {
      id: 3,
      title: 'Update marketing campaign assets',
      description: 'Refresh banners and social media creatives',
      dueDate: '2025-07-30',
      assignee: 'Emily Rodriguez',
      priority: 'High',
      status: 'In Progress',
      progress: 40,
      completed: false
    },
    {
      id: 4,
      title: 'Team building activity planning',
      description: 'Research venues and activities for next month',
      dueDate: '2025-08-15',
      assignee: 'David Wilson',
      priority: 'Low',
      status: 'Upcoming',
      progress: 0,
      completed: false
    },
    {
      id: 5,
      title: 'Monthly financial reconciliation',
      description: 'Verify all transactions and prepare reports',
      dueDate: '2025-07-25',
      assignee: 'Lisa Thompson',
      priority: 'High',
      status: 'Completed',
      progress: 100,
      completed: true
    },
    {
      id: 6,
      title: 'Software upgrade testing',
      description: 'Test new version before deployment',
      dueDate: '2025-08-01',
      assignee: 'Robert Kim',
      priority: 'Medium',
      status: 'In Progress',
      progress: 30,
      completed: false
    }
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { 
            ...task, 
            completed: !task.completed, 
            status: !task.completed ? 'Completed' : 'In Progress', 
            progress: !task.completed ? 100 : 0 
          }
        : task
    ));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-danger text-white';
      case 'Medium': return 'bg-warning text-dark';
      case 'Low': return 'bg-success text-white';
      default: return 'bg-secondary text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success text-white';
      case 'In Progress': return 'bg-primary text-white';
      case 'Upcoming': return 'bg-secondary text-white';
      default: return 'bg-secondary text-white';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const filteredTasks = selectedFilter === 'All Tasks'
    ? tasks
    : tasks.filter(task => task.status === selectedFilter);

  return (
    <div className="container-fluid py-2">
      {/* Header */}
      <div className="mb-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-2">
  <h1 className="h2 fw-bold  mb-2">Follow-ups & Tasks</h1>
  <button 
    onClick={() => setIsModalOpen(true)}
    className="btn btn-primary w-md-auto"
  >
    <i className="fas fa-plus me-2"></i>
    Add New Task
  </button>
</div>
        <p className="text-muted">Manage and track your team's tasks and follow-up activities</p>
        
        {/* Filter */}
        <div className="mt-3">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="form-select"
            style={{ width: '200px' }}
          >
            <option>All Tasks</option>
            <option>Upcoming</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* Task Cards */}
      <div className="row g-3">
        {filteredTasks.map((task) => (
          <div key={task.id} className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-start flex-grow-1">
                    {/* Checkbox */}
                    <div className="form-check mt-1 me-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="form-check-input"
                        style={{ width: '20px', height: '20px' }}
                      />
                    </div>
                    
                    {/* Task Content */}
                    <div className="flex-grow-1">
                      <h5 className={`card-title ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                        {task.title}
                      </h5>
                      <p className="card-text text-muted small mb-2">{task.description}</p>
                      
                      {/* Progress Bar */}
                      {task.progress > 0 && (
                        <div className="mb-3">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>Progress</span>
                            <span>{task.progress}%</span>
                          </div>
                          <div className="progress" style={{ height: '6px' }}>
                            <div
                              className="progress-bar"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Task Meta */}
                      <div className="d-flex flex-wrap gap-3 small">
                        <span className="text-muted">
                          <i className="far fa-calendar me-1"></i>
                          Due {formatDate(task.dueDate)}
                        </span>
                        <span className="text-muted">
                          <span className="badge bg-primary me-1">
                            {getInitials(task.assignee)}
                          </span>
                          {task.assignee}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status and Priority */}
                  <div className="d-flex flex-column align-items-end ms-3">
                    <span className={`badge ${getStatusColor(task.status)} mb-2`}>
                      {task.status}
                    </span>
                    <span className={`badge ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    
                    {/* Action Buttons */}
                    <div className="d-flex gap-2 mt-2">
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <div className="text-center py-5 my-4 bg-light rounded">
          <i className="fas fa-tasks text-muted mb-3" style={{ fontSize: '2.5rem' }}></i>
          <h3 className="h4 text-muted">No tasks found</h3>
          <p className="text-muted">Try adjusting your filter or create a new task to get started.</p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="h5 card-title mb-3">Task Summary</h3>
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-3">
              <div className="h3 text-primary">{tasks.length}</div>
              <small className="text-muted">Total Tasks</small>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="h3 text-success">{tasks.filter(t => t.completed).length}</div>
              <small className="text-muted">Completed</small>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="h3 text-warning">{tasks.filter(t => t.status === 'In Progress').length}</div>
              <small className="text-muted">In Progress</small>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="h3 text-secondary">{tasks.filter(t => t.status === 'Upcoming').length}</div>
              <small className="text-muted">Upcoming</small>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <FollowuptasksModal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default FollowUpTasks;
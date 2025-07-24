import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const KPIModal = ({ show, handleClose, newKpi, setNewKpi, handleSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Create New KPI</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>KPI Name</Form.Label>
            <Form.Control
              type="text"
              value={newKpi.name}
              onChange={(e) => setNewKpi({...newKpi, name: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Target</Form.Label>
            <Form.Control
              type="text"
              value={newKpi.target}
              onChange={(e) => setNewKpi({...newKpi, target: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newKpi.details}
              onChange={(e) => setNewKpi({...newKpi, details: e.target.value})}
              required
            />
          </Form.Group>

          <div className="row mb-3">
            <Form.Group className="col-md-6">
              <Form.Label>Owner</Form.Label>
              <Form.Control
                type="text"
                value={newKpi.owner}
                onChange={(e) => setNewKpi({...newKpi, owner: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="col-md-6">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                value={newKpi.department}
                onChange={(e) => setNewKpi({...newKpi, department: e.target.value})}
                required
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Timeline</Form.Label>
            <Form.Control
              type="text"
              value={newKpi.timeline}
              onChange={(e) => setNewKpi({...newKpi, timeline: e.target.value})}
              placeholder="e.g. Q3 2025"
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-end gap-3 mt-4">
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create KPI
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default KPIModal;
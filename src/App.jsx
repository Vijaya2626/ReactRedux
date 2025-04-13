import React from 'react';
import FDReduxManager from './components/FDReduxManager';
import RDReduxManager from './components/RDReduxManager';
import NotificationComponent from './components/NotificationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {
  return (
    <div className="container py-4">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary">FD/RD Redux Tracker</h1>
        <p className="lead text-muted">Manage your Fixed and Recurring Deposits effectively with live updates.</p>
      </div>

      {/* Main Content */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4 border-light rounded bg-light-blue">
            <h4 className="card-title text-dark">Fixed Deposit Manager</h4>
            <FDReduxManager />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4 border-light rounded bg-light-teal">
            <h4 className="card-title text-dark">Recurring Deposit Manager</h4>
            <RDReduxManager />
          </div>
        </div>
      </div>

      {/* Notification Section */}
      <div className="card shadow-sm p-4 mb-4 border-light rounded bg-light-yellow">
        <h4 className="card-title text-dark">Notifications</h4>
        <NotificationComponent />
      </div>
    </div>
  );
};

export default App;

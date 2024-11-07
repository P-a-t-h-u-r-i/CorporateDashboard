import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import ScheduleCalendar from './ScheduleCalendar';
import DomainSelection from './DomainSelection';
import '../index.css';

const App = () => (
  <Router>
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/calendar" element={<ScheduleCalendar />} />
            <Route path="/domain-selection" element={<DomainSelection />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
);

export default App;

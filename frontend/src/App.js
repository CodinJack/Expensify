import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bg from './img/bg.png';
import Dashboard from './components/dashboard';
import Transactions from './components/transactions';
import Incomes from './components/income';
import Expenses from './components/expenses';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex" style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex-1 bg-opacity-80 bg-white bg-blur-md rounded-xl overflow-hidden">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

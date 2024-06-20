import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orb from './components/background';
import bg from './img/bg.png';
import Dashboard from './components/dashboard';
import Transactions from './components/transactions';
import Incomes from './components/income';
import Expenses from './components/expenses';

function App() {
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <Router>
      <div className="App min-h-screen flex" style={{ backgroundImage: `url(${bg})` }}>
        {orbMemo}
        <main className="flex-1 bg-opacity-80 bg-white bg-blur-md rounded-xl overflow-hidden">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

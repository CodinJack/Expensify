import React from 'react';

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-600">This is an overview of your dashboard. You can add widgets, charts, and other components here.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <ul className="text-gray-600">
            <li>Transaction 1</li>
            <li>Transaction 2</li>
            <li>Transaction 3</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Income</h2>
          <p className="text-gray-600">$2,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Expenses</h2>
          <p className="text-gray-600">$1,200</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Budget</h2>
          <p className="text-gray-600">$5,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Savings</h2>
          <p className="text-gray-600">$3,800</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

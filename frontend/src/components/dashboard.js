import React from 'react';

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Total Expenses</h2>
            <p className="text-3xl font-bold text-gray-900">$2,500</p>
          </div>
          <div className="bg-red-100 p-2 rounded-full">
            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-9a1 1 0 00-1-1H8a1 1 0 000 2h4a1 1 0 001-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Savings</h2>
            <p className="text-3xl font-bold text-gray-900">$7,500</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm4-8a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Budget</h2>
            <p className="text-3xl font-bold text-gray-900">$5,000</p>
          </div>
          <div className="bg-yellow-100 p-2 rounded-full">
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm8 4a1 1 0 00-1-1H7a1 1 0 000 2h6a1 1 0 001-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-600 mb-6">This is an overview of your dashboard. You can add widgets, charts, and other components here.</p>
          {/* Placeholder for chart */}
          <div className="bg-gray-200 h-40 rounded-lg"></div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex justify-between">
              <span>Transaction 1</span>
              <span>$100</span>
            </li>
            <li className="flex justify-between">
              <span>Transaction 2</span>
              <span>$200</span>
            </li>
            <li className="flex justify-between">
              <span>Transaction 3</span>
              <span>$300</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

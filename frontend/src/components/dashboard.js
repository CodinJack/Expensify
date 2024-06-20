import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Fetch total expenses
    fetch('http://localhost:5000/transactions/expense') 
      .then(response => response.json())
      .then(data => {
        // Calculate total expenses from the fetched data
        const sum = data.reduce((acc, expense) => acc + expense.amount, 0);
        setTotalExpenses(sum);
        setExpenses(data);
      })
      .catch(error => console.error('Error fetching expenses:', error));

    // Fetch balance
    fetch('http://localhost:5000/transactions/balance')
      .then(response => response.json())
      .then(data => {
        // Set balance
        setBalance(data.amount);
      })
      .catch(error => console.error('Error fetching balance:', error));
  }, []); // Empty dependency array ensures this effect runs only once

  // Calculate savings
  useEffect(() => {
    const calculatedSavings = balance - totalExpenses;
    setSavings(calculatedSavings);
  }, [balance, totalExpenses]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Total Expenses */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Total Expenses</h2>
            <p className="text-3xl font-bold text-gray-900">${totalExpenses}</p>
          </div>
        </div>

        {/* Savings */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Savings</h2>
            <p className="text-3xl font-bold text-gray-900">${savings}</p>
          </div>
        </div>

        {/* Balance */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Balance</h2>
            <p className="text-3xl font-bold text-gray-900">${balance}</p>
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
            {expenses.map((exp, index) => (
              <li key={index} className="flex justify-between">
                <span>{exp.title}</span>
                <span>${exp.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import avatar from '../img/avatar.png';
import { menuItems } from '../utils/menuitems';

function Navigation({ active, setActive }) {
  return (
    <nav className="w-64 h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white p-6 flex flex-col justify-start font-sans">
      <div className="flex items-center mb-4">
        <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-2xl font-bold">Hi!</h2>
          <p className="text-sm">Welcome back</p>
        </div>
      </div>
      <ul className="flex-1 flex flex-col space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`p-2 rounded-lg cursor-pointer transition-colors duration-300 ${
              active === item.id ? 'bg-gray-800' : 'hover:bg-gray-700'
            }`}
          >
            <span className="text-lg mr-2">{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

import {dashboard, expenses, transactions, trend} from '../utils/icons'
import { FaTachometerAlt, FaMoneyBill, FaExchangeAlt, FaDollarSign, FaCog, FaPhone } from 'react-icons/fa';
export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <FaTachometerAlt />,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Transactions",
        icon: <FaExchangeAlt />,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: <FaDollarSign />,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: <FaMoneyBill />,
        link: "/dashboard",
    },
]
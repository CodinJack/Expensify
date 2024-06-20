import React, { useMemo } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orb from './components/background';
import Navigation from './components/Navigation';
import bg from './img/bg.png';
import Dashboard from './components/dashboard';
import Transactions from './components/transactions';
import Incomes from './components/income';
import Expenses from './components/expenses';

function App() {
  const orbMemo = useMemo(() => {
    return <Orb />
  }, []);

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/incomes" element={<Incomes />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </main>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    padding: 20px;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;

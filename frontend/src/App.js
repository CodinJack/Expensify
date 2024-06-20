import React, { useMemo } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Orb from './components/Orb';
import Navigation from './components/Navigation';
import bg from './img/bg.png';

import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Incomes from './components/Incomes';
import Expenses from './components/Expenses';

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
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/incomes" component={Incomes} />
            <Route path="/expenses" component={Expenses} />
          </Switch>
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

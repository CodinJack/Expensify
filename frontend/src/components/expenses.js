import React, { useState } from 'react';
import ExpenseForm from './expenseform';
import ExpenseList from './expenselist';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Container>
      <MainContent>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </MainContent>
    </Container>
  );
};

export default ExpenseTracker;

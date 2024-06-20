import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ExpenseList = ({ expenses }) => {
  return (
    <ListContainer>
      <h3>Expenses</h3>
      {expenses.map((expense, index) => (
        <ExpenseItem key={index}>
          <div>
            <h4>{expense.title}</h4>
            <p>{expense.date}</p>
            <p>{expense.reference}</p>
          </div>
          <div>
            <p>${expense.amount}</p>
            <p>{expense.category}</p>
          </div>
        </ExpenseItem>
      ))}
    </ListContainer>
  );
};

export default ExpenseList;

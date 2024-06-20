import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [reference, setReference] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, amount, date, category, reference });
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
    setReference('');
  };

  return (
    <FormContainer>
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Expense Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Enter A Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Option</option>
          <option value="dentist">Dentist Appointment</option>
          <option value="travel">Travelling</option>
          <option value="rent">Rent</option>
        </Select>
        <Input
          type="text"
          placeholder="Add A Reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <Button type="submit">Add Expense</Button>
      </form>
    </FormContainer>
  );
};

export default ExpenseForm;

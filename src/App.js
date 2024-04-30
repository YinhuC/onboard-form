import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import {
  calculateTax,
  calculateSuperannuation,
} from './calculate/calculate.js';

function App() {
  const [salary, setSalary] = useState('');

  const alertTax = () => {
    const tax = calculateTax(salary);
    const superA = calculateSuperannuation(salary);
    alert(`Annual Tax: $${tax} \nAnnual Superannuation: $${superA}`);
  };

  console.log(salary);

  return (
    <Container className="my-5">
      <h1 className="mb-5">Onboarding Form</h1>
      <h2 className="mb-3 mt-5">Personal Details</h2>
      <Form>
        <FormGroup>
          <Label for="name">Full Name:</Label>
          <Input id="name" />
        </FormGroup>
        <FormGroup>
          <Label for="dob">Date of Birth:</Label>
          <Input id="dob" type="date" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address:</Label>
          <Input id="address" />
        </FormGroup>
        <FormGroup>
          <Label for="dob">Email:</Label>
          <Input id="dob" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="dob">Phone Number:</Label>
          <Input id="dob" />
        </FormGroup>
      </Form>

      <h2 className="mb-3 mt-5">Bank Details</h2>
      <Form>
        <FormGroup>
          <Label for="taxNumber">Tax Number:</Label>
          <Input id="taxNumber" />
        </FormGroup>
        <FormGroup>
          <Label for="accountName">Account Name:</Label>
          <Input id="accountName" />
        </FormGroup>
        <FormGroup>
          <Label for="accountNumber">Account Number:</Label>
          <Input id="accountNumber" />
        </FormGroup>
        <FormGroup>
          <Label for="salary">Salary:</Label>
          <Input
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </FormGroup>
        <Button onClick={alertTax} color="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;

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

  return (
    <Container className="my-5">
      <h1 className="mb-5">Onboarding Form</h1>
      <Form>
        <fieldset>
          <legend>Personal Details</legend>
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
            <Label for="email">Email:</Label>
            <Input id="email" type="email" />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number:</Label>
            <Input id="phone" type="tel" />
          </FormGroup>
        </fieldset>

        <fieldset>
          <legend className="mt-3">Bank Details</legend>
          <FormGroup>
            <Label for="taxNumber">Tax Number:</Label>
            <Input id="taxNumber" />
          </FormGroup>
          <FormGroup>
            <Label for="accountName">Bank Account Name:</Label>
            <Input id="accountName" />
          </FormGroup>
          <FormGroup>
            <Label for="accountNumber">Bank Account Number:</Label>
            <Input id="accountNumber" />
          </FormGroup>
          <FormGroup>
            <Label for="salary">Salary:</Label>
            <Input
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type="number"
            />
          </FormGroup>
          <Button onClick={alertTax} color="primary">
            Submit
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default App;

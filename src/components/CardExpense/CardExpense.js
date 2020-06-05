import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";

const expenseView = (id, name, amount) => (
  <ListGroup.Item key={id}>
    {name}
    <span className="float-right">
      <Badge pill variant="primary">
        {amount}
      </Badge>
    </span>
  </ListGroup.Item>
);

export default function CardExpense(props) {
  return (
    <>
      <Card style={{ width: "23rem" }}>
        <Card.Header>Expense</Card.Header>
        <Card.Body>
          <Card.Title>History</Card.Title>
          <ListGroup variant="flush">
            {props.expensesData.map(ed => {
              return expenseView(ed.id, ed.name, ed.amount);
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}

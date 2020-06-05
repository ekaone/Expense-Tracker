import React from "react";
import { Card, Button, Form } from "react-bootstrap";

export default function CardTransaction(props) {
  return (
    <>
      <Card style={{ width: "23rem" }}>
        <Card.Header>Input Transaction</Card.Header>
        <Card.Body>
          <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="form-transaction">
              <Form.Label>Transaction name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Buy Beef Burger"
                onChange={props.handleOnChange("transaction")}
              />
              <Form.Text className="text-muted">
                Name of your Transaction
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="form-amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="e.g. 400"
                onChange={props.handleOnChange("expense")}
              />
              <Form.Text className="text-muted">
                Positive and Negative
              </Form.Text>
            </Form.Group>

            <Button
              disabled={props.buttonActive}
              variant="primary"
              type="submit"
              block
            >
              Save Transaction
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

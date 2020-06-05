import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function CardInfo(props) {
  return (
    <>
      <Card style={{ width: "23rem" }}>
        <Row className="justify-content-md-center">
          <Col>
            <Card.Body>
              <Card.Title className="d-flex justify-content-md-center">
                Income
              </Card.Title>
              <Card.Title className="d-flex justify-content-md-center">
                {props.income}
              </Card.Title>
            </Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className="d-flex justify-content-md-center">
                Expenses
              </Card.Title>
              <Card.Title className="d-flex justify-content-md-center">
                {props.expense}
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

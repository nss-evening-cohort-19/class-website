import React from 'react';
import { Card } from 'react-bootstrap';

export default function Thanks() {
  return (
    <>
      <div id="thanks">Thanks</div>
      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Special Thanks to Dr. T, Trinity, and the rest of the instructional team (Janya, Daniel, Gavin, Aja). We would not be the engineers that we are today without your hard work and dedication to seeing us succeed. Thanks also to our friends and family who have supported us during this journey. {' '}
            </p>
            <footer className="blockquote-footer">
              Evening Cohort 19
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}

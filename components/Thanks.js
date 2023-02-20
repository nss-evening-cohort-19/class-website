import React from 'react';
import { Card } from 'react-bootstrap';

export default function Thanks() {
  return (
    <div id="thanks">
      <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> Special thanks to Dr. T, Trinity, and the rest of the instructional team (Jayna, Daniel, Gavin, and Aja). We would not be the engineers that we are today without your hard work and dedication to seeing us succeed.</p>
            <p>Thank you to our friends and family who have encouraged us and made sacrifices to support us during this journey.</p>
            <p>Thank you to Ashley Canino, Michael Frieh, and the rest of the career devolopment team.</p>
            <footer className="blockquote-footer">Evening Cohort 19</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

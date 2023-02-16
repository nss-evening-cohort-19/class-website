/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { BsLinkedin, BsGithub, BsGlobe2 } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function StudentCard({ student }) {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img src={student.photoUrl1} className="card-img-top" height="300px" style={{ objectFit: 'cover' }} alt={`${student.name}`} />
      <Card.Body>
        <div className="card-content">
          <Card.Title className="card-title">{student.name}</Card.Title>
          <Card.Text className="card-text">
            {student.shortQuote}
            <br />
          </Card.Text>
        </div>
        <Card.Footer>
          <Link href={student.linkedinUrl}>
            <a target="_blank" href={student.linkedinUrl} rel="noreferrer">
              <BsLinkedin className="card-icon" />
            </a>
          </Link>

          <Link href={student.githubUrl}>
            <a target="_blank" href={student.githubUrl} rel="noreferrer">
              <BsGithub className="card-icon" />
            </a>
          </Link>

          {student.personalWebsite ? (
            <Link href={student.personalWebsite}>
              <a target="_blank" href={student.personalWebsite} rel="noreferrer">
                <BsGlobe2 className="card-icon" />
              </a>
            </Link>
          ) : (
            ''
          )}

          <Link href={`mailto:${student.emailAddress}`}>
            <a target="_blank" href={`mailto:${student.emailAddress}`} rel="noreferrer">
              <MdOutlineEmail className="card-icon" />
            </a>
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

StudentCard.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string,
    photoUrl1: PropTypes.string,
    linkedinUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    personalWebsite: PropTypes.string,
    shortQuote: PropTypes.string,
    emailAddress: PropTypes.string,
  }).isRequired,
};

export default StudentCard;

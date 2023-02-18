/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid nav-buttons">
        <Link href="/" passHref>
          <img src="/images/nsslogo.png" className="d-inline-block align-top logo" alt="logoimage" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="#cohort" scroll={false}>
                <a className="nav-link">
                  Developers
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="#technologies" scroll={false}>
                <a className="nav-link">Technologies</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="#thanks" scroll={false}>
                <a className="nav-link">Thanks</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

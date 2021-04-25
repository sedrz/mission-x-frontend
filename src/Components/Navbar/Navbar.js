import { React, useState } from "react";
import "./style.scss";
import './modal.scss';

import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isStudentLogInBtnClicked = false;
  const isStudentSignupBtnClicked = false;
  const isTeacherLogInBtnClicked = false;
  const isTeacherSignupBtnClicked = false;
  const handleLoginStatus = false;
  const handleSignupStatus = false;

  const body = (
    <div>
      <Container>
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <Row className="mb-30">
          <Col xs={12} md={6} className="student-column">
            <img
              src={process.env.PUBLIC_URL + "assets/img/student.png"}
              alt=""
              class="students-img"
            />
            <br />
            <h1 class="align-center">STUDENTS</h1>
            <h4 class="align-center">
              <span class="login-label">
                <a
                  href="#"
                  className={`login-link ${
                    isStudentLogInBtnClicked ? "active" : ""
                  }`}
                  onClick={handleLoginStatus}
                >
                  LOGIN
                </a>
              </span>
              <span class="signup-label">
                <a
                  href="#"
                  className={`signup-link ${
                    isStudentSignupBtnClicked ? "active" : ""
                  }`}
                  onClick={handleSignupStatus}
                >
                  SIGN UP
                </a>
              </span>
            </h4>
            <br />
            <Form
              className={`form-center ${
                isStudentSignupBtnClicked ? "" : "hidden"
              }`}
            >
              <Form.Group controlID="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="input-radius"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="input-radius"
                />
              </Form.Group>
              <Button type="submit" className="btn-pink btn-sm">
                LOG IN
              </Button>
            </Form>
            <Form className="form-center">
              <Form.Group controlId="formFullName">
                <Form.Control
                  type="fullname"
                  placeholder="Full Name"
                  className="input-radius"
                />
              </Form.Group>

              <Form.Group controlID="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="input-radius"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="input-radius"
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Control
                  type="confirmpassword"
                  placeholder="Confirm Password"
                  className="input-radius"
                />
              </Form.Group>
              <Button type="submit" className="btn-pink btn-sm">
                SIGN UP
              </Button>
            </Form>
          </Col>
          <br />
          <Col xs={12} md={6}>
            <img
              src={process.env.PUBLIC_URL + "assets/img/teacher.png"}
              alt=""
              class="teacher-img"
            />
            <br />
            <h1 class="align-center">TEACHERS</h1>
            <h4 class="align-center">
              <span class="login-label">
                <a
                  href="#"
                  className={`login-link ${
                    isTeacherLogInBtnClicked ? "active" : ""
                  }`}
                  onClick={handleLoginStatus}
                >
                  LOGIN
                </a>
              </span>
              <span class="signup-label">
                <a
                  href="#"
                  className={`signup-link ${
                    isTeacherSignupBtnClicked ? "active" : ""
                  }`}
                  onClick={handleSignupStatus}
                >
                  SIGN UP
                </a>
              </span>
            </h4>
            <br />
            <Form
              className={`form-center ${
                isTeacherLogInBtnClicked ? "" : "hidden"
              }`}
            >
              <Form.Group controlID="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="input-radius"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="input-radius"
                />
              </Form.Group>
              <Button type="submit" className="btn-pink btn-sm">
                LOG IN
              </Button>
            </Form>
            <br />
            <Form className="form-center">
              <Form.Group controlId="formFullName">
                <Form.Control
                  type="fullname"
                  placeholder="Full Name"
                  className="input-radius"
                />
              </Form.Group>

              <Form.Group controlID="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="input-radius"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="input-radius"
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Control
                  type="confirmpassword"
                  placeholder="Confirm Password"
                  className="input-radius"
                />
              </Form.Group>
              <Button type="submit" className="btn-pink btn-sm">
                SIGN UP
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <div className="nav-container">
      <div className="nav-subcon">
        <div className="nav-wrapper">
          <div className="nav-box1">
            <img
              src={process.env.PUBLIC_URL + "assets/img/logo.png"}
              alt="logolevelup"
            />
          </div>

          <div className="nav-box2">
            <ul className="menu">
              <li className="menu-link">
                <a href="#">HOME</a>
              </li>
              <li className="menu-link">
                <a href="#">FEATURES</a>
              </li>
              <li className="menu-link">
                <a href="#">TEACHERS</a>
              </li>
            </ul>
          </div>

          <div className="nav-box3">
            <img
              src={process.env.PUBLIC_URL + "assets/img/nzflag.jpg"}
              alt="nzflag"
            />
            <img
              src={process.env.PUBLIC_URL + "assets/img/maoriflag.jpg"}
              alt="lmaoriflag"
            />
          </div>

          <div className="nav-box4">
            <span>
              <img
                src={process.env.PUBLIC_URL + "assets/img/register.png"}
                alt="register"
              />
              <a href="#" onClick={handleShow}>
                REGISTER
              </a>
              &nbsp;|&nbsp;
              <a href="#" onClick={handleShow}>
                LOGIN
              </a>
            </span>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </div>
  );
}

export default Navbar;

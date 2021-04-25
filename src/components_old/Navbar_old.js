import {React, useState} from "react";
import { Modal, Row,Container,Col,Form, Button } from 'react-bootstrap';
import '../css/MenuBar.css';
import "./Navbar.css";

import register from "../assets/img/register.png";
import nzflag from "../assets/img/nzflag.jpg";
import maoriflag from "../assets/img/maoriflag.jpg";

function Navbar() {

  const [show, setShow] = useState(false);

  //define Student 3rd attempt

  const [isStudentLogInBtnClicked, setLoginStatus] = useState(true);
  const [isStudentSignupBtnClicked, setSignupStatus] = useState(false);

  const handleStudentClose = () => setShow(false);
  const handleStudentShow = () => setShow(true);

  const handleStudentLoginStatus = () => setLoginStatus(!isStudentLogInBtnClicked);
  const handleStudentSignupStatus = () => setLoginStatus(!isStudentSignupBtnClicked);

  //define Teacher

  const [isTeacherLogInBtnClicked, setTeacherLoginStatus] = useState(true);
  const [isTeacherSignupBtnClicked, setTeacherSignupStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const handleLoginStatus = () => setLoginStatus(!isTeacherLogInBtnClicked);
  const handleSignupStatus = () => setLoginStatus(!isTeacherSignupBtnClicked);

  return (
    <div className="nav-container">
      <div className="nav-subcon">
          <div className="nav-wrapper">
          <div className="nav-box1">
             <img src={process.env.PUBLIC_URL + 'assets/img/logolevelup.png'} alt="logolevelup" />
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
              <img src={nzflag} alt="nzflag" />
             <img src={maoriflag} alt="lmaoriflag" />
        </div>

        <div className="nav-box4">
          <span>
            <img src={register} alt="register" />
            <a href="" class="register-txt" onClick={handleShow}>REGISTER</a> | <a href="#" onClick={handleShow} class="login-txt">LOGIN</a>
          </span>
        </div>



        </div>
      </div>
      <div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Container>
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <Row className="mb-30">
                        <Col xs={12} md={6} className="student-column">
                            <img src={process.env.PUBLIC_URL + 'img/students.jpg'} alt="" class="students-img"/>
                            <br/>
                            <h1 class="align-center">STUDENTS</h1>
                            <h4 class="align-center">
                                <span class="login-label"><a href="#" className={`login-link ${isStudentLogInBtnClicked ? 'active' : ''}` } onClick={handleLoginStatus}>LOGIN</a></span>
                                <span class="signup-label"><a href="#" className={`signup-link ${isStudentSignupBtnClicked ? 'active' : ''}` } onClick={handleSignupStatus}>SIGN UP</a></span>
                            </h4>
                            <br/>
                            <Form className={`form-center ${isStudentSignupBtnClicked ? '' : 'hidden'}` }>
                                <Form.Group controlID="formBasicEmail">
                                <Form.Control type="email" placeholder="Email Address" className="input-radius"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" className="input-radius"/>
                                </Form.Group>
                                <Button type="submit" className="btn-pink btn-sm">
                                    LOG IN
                                </Button>
                            </Form>
                            <Form className="form-center">
                                <Form.Group controlId="formFullName">
                                    <Form.Control type="fullname" placeholder="Full Name" className="input-radius"/>
                                </Form.Group>

                                <Form.Group controlID="formBasicEmail">
                                <Form.Control type="email" placeholder="Email Address" className="input-radius"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" className="input-radius"/>
                                </Form.Group>
                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Control type="confirmpassword" placeholder="Confirm Password" className="input-radius"/>
                                </Form.Group>
                                <Button type="submit" className="btn-pink btn-sm">
                                    SIGN UP
                                </Button>
                                </Form>
                        </Col>
                        <br/>
                        <Col xs={12} md={6}>
                            <img src={process.env.PUBLIC_URL + 'img/teacher.jpg'} alt="" class="teacher-img"/>
                            <br/>
                            <h1 class="align-center">TEACHERS</h1>
                            <h4 class="align-center">
                                <span class="login-label"><a href="#" className={`login-link ${isTeacherLogInBtnClicked ? 'active' : ''}` } onClick={handleLoginStatus}>LOGIN</a></span>
                                <span class="signup-label"><a href="#" className={`signup-link ${isTeacherSignupBtnClicked ? 'active' : ''}` } onClick={handleSignupStatus}>SIGN UP</a></span>
                            </h4>
                            <br/>
                            <Form className={`form-center ${isTeacherLogInBtnClicked ? '' : 'hidden'}` }>
                                <Form.Group controlID="formBasicEmail">
                                <Form.Control type="email" placeholder="Email Address" className="input-radius"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" className="input-radius"/>
                                </Form.Group>
                                <Button type="submit" className="btn-pink btn-sm">
                                    LOG IN
                                </Button>
                            </Form>
                            <br/>
                            <Form className="form-center">
                            <Form.Group controlId="formFullName">
                                    <Form.Control type="fullname" placeholder="Full Name" className="input-radius"/>
                                </Form.Group>

                                <Form.Group controlID="formBasicEmail">
                                <Form.Control type="email" placeholder="Email Address" className="input-radius"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" className="input-radius"/>
                                </Form.Group>
                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Control type="confirmpassword" placeholder="Confirm Password" className="input-radius"/>
                                </Form.Group>
                                <Button type="submit" className="btn-pink btn-sm">
                                    SIGN UP
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </div>
    </div>
  );
}

export default Navbar;

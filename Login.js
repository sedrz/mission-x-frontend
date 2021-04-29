import { React, useState} from 'react';
import '../css/MenuBar.css';
import { Navbar, Nav, Modal, Row,Container,Col,Form, Button } from 'react-bootstrap';

function Menubar() {
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

    //original attempt

    //const [isLogInBtnClicked, setLoginStatus] = useState(true);
    //const [isSignupBtnClicked, setSignupStatus] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
  
    //const handleLoginStatus = () => setLoginStatus(!isLogInBtnClicked);
    //const handleSignupStatus = () => setLoginStatus(!isSignupBtnClicked);



 //define student state 2nd attempt
 //const [isStudentLoginBtnClicked, setStudentLoginStatus]=useState(true);
 //const [isStudentSignupBtnClickedd, setStudentLoginStatus]=useState(false);

 //define teacher state
 //const [isTeacherLoginBtnClicked, setTeacherLoginStatus]=useState(true);
 //const [isTeacherSignupBtnClicked, setTeacherLoginStatus]=useState(false);

 //student button click event
 //const handleStudentLoginStatus = setStudentLoginStatus(!isStudentLoginBtnClicked);
 //const handleStudentSignupStatus = setStudentSignupStatus(!isStudentSignupBtnClicked);

 //teacher button click event
 //const handleTeacherLoginStatus = setTeacherLoginStatus(!isTeacherLoginBtnClicked);
 //const handleTeacherSignupStatus = setTeacherSignupStatus(!isTeacherSignupBtnClicked);

    return (
        <div>

            <Navbar className="main-nav justify-content-md-center" expand="lg">
            <Navbar.Brand href="#home">
                <img className="main-logo" src={process.env.PUBLIC_URL + 'img/starLogo.jpg'} alt=""/>
            </Navbar.Brand>

        
            <Navbar.Collapse classname="justify-content-md-center" >
                <Nav>
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#link">FEATURES</Nav.Link>
                    <Nav.Link href="#link">TEACHERS</Nav.Link>
                    <Nav.Link href="javascript:void(0)" className="register" onClick={handleShow}>
                        <span></span>
                        <br/>
                        Register/Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
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

    );
}

export default Menubar;
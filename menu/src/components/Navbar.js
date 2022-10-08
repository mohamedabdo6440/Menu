import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ FilterSearch }) => {

    const [searchWord, setSearchWord] = useState('')
    const onSearch = () => {
        FilterSearch(searchWord);
        setSearchWord('')
    }
    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <div className='brand-color'>مطعم جديد</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>



                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="ابحث"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => setSearchWord(e.target.value)}
                                value={searchWord}
                            />
                            <Button onClick={() => onSearch()} className="btn-search me-1">بحث</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Row>
    )
}

export default NavBar;

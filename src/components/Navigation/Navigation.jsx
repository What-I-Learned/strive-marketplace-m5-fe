import "./navigation.css";
import { Navbar, Form, Button, InputGroup, FormControl } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className=" nav-container">
      <Navbar.Brand href="#home">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/logo.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Marketplae"
        />
      </Navbar.Brand>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className=" nav-search mr-sm-2"
        />
        <Button className="nav-btn" type="submit">
          Submit
        </Button>
      </Form>
    </Navbar>
  );
};

export default Navigation;

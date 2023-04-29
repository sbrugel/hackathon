import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Navingbar = ({ userID }) => { // user ID is the currently logged in user
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${userID}`).then((res) => {
      setUser(res.data);
    })
  }, [])
  
  return (
    <>
      <Navbar expand="sm" style={{backgroundColor:"#528560",paddingLeft: "10px",color:"white",
                paddingRight: "10px",}}>
        <Container>
          <Navbar.Brand style={{position:"relative", left:"0px"}} onClick={() => navigate("/")}>GO-DE</Navbar.Brand>
          <Nav>
            <Nav.Link style={{color:"white"}} onClick={() => navigate("/people")}>People</Nav.Link>
            <Nav.Link style={{color:"white"}} onClick={() => navigate("/locations")}>Locations</Nav.Link>
            <div style={{backgroundColor:"grey"}}>
            <Nav.Link style={{color:"white"}} onClick={() => navigate("/user/" + user.id)}>{ user.name }</Nav.Link>
            </div>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navingbar;
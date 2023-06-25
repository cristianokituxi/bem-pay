import { Button, Navbar, Container } from 'react-bootstrap';
import { LogOut } from '../../service/Authentication';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../Spinner';


function HomePage() {
const [loading, setloading] = useState(false);

const navigate = useNavigate()
    const LogOutFunc = async () =>{
        console.log("entrei na função");
        setloading(true);
         await LogOut();
            setloading(false);
            navigate("/bem-pay/");
    
        
    
    }
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button onClick={LogOutFunc}>Sair</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    { loading &&<Spinner /> }

    </>
  );
}

export default HomePage;
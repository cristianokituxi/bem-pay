
import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { AuthenticatorLogin } from '../../service/Authentication';
import Spinner from '../Spinner';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import img1 from './images/assistencia-social.png'
import img2 from './images/avatar.png'
import img3 from './images/chave.png'
import RecoverPasswordModal from '../Recuper-password';




const LoginScreen = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setloading] = useState(false);


  const navigate = useNavigate();


  const handleShow = () => setShow(true);
  
  

  const handleLogin = async (e) => {
    setloading(true);
    e.preventDefault();

    // Realize a validação dos campos aqui
    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {
      setErrorMessage('');

      // Lógica de autenticação ou redirecionamento após o login
      const resp = await AuthenticatorLogin(username, password);
      if (resp.user) {
        setloading(false)
        navigate('/bem-pay/home');
 
      } else if (!resp.user) {
        setloading(false)
        setErrorMessage(true);

      }



    }
  };

 

  return (
    <>
      <div className='mt-2'>
        <Container>
       { errorMessage && <Alert  
        variant="danger" 
        onClose={() => setErrorMessage(false)}
        dismissible
        >
        <p>
          Email ou senha invalida
        </p>
      </Alert>
      } 
          <Row className="d-flex justify-content-center align-items-center">
            <Col className='centralize  mt-5' >
              {/* <div className="border border-3 border-primary"></div> */}
              <Card className="shadow  rounded-3 justify-content-center"  
             
                style={{ 
                background:"#0000", 
               
        
              }}
                
                >
                <Card.Body>
                  <div className=" ">
                    <img src={img1} alt=""  width={200}
                    style={{
                      marginLeft: "64px"
                    }}
                    />
                    <div className="border border-4 border-warning"></div>
                    <div className="mb-1">
                      <Form  className="mt-3">
                        <Row>
                          <Col xs={2}>
                            <img src={img2} alt='' height={40} />
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Digite seu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={2}>
                            <img src={img3} alt='' height={40} />
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            >
                              <Form.Control type="password" placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Button variant='link' onClick={handleShow}>Esqueceu sua senha?</Button>
                          
              
                        </Form.Group>
                        <div className="d-grid">
                          <Button onClick={handleLogin} variant="warning" type="submit">
                          <FaSignInAlt  />  Entrar
                          </Button> 
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        
        { loading &&<Spinner /> }
        <RecoverPasswordModal show={show}  setShow={setShow}/>
      </div> 
    </>
  );
}; 

export default LoginScreen;



import { Row, Col, Container, Card, Badge, Button } from 'react-bootstrap';
import img1 from './images/avatar.png'
import img2 from './images/codigo-qr.png'
import img3 from './images/bate-papo.png'
import img4 from './images/sair.png'






import { LogOut } from '../../service/Authentication';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../Spinner';


function HomePage() {
  const [loading, setloading] = useState(false);

  const navigate = useNavigate()
  const LogOutFunc = async () => {
    console.log("entrei na função");
    setloading(true);
    await LogOut();
    setloading(false);
    navigate("/bem-pay/");



  }
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className='centralize  mt-5' >
            {/* <div className="border border-3 border-primary"></div> */}
            <Card className="shadow  rounded-3 justify-content-center"

              style={{
                background: "#0000",


              }}

            >
              <Card.Body>
                <Row>
                  <Col>
                  <Button variant='link' size='sm' onclik={LogOutFunc}  style={{
                       width: "49px"
                      }} ><img src={img4} alt="" width={40}
                      style={{
                       // marginLeft: "64px"
                      }}
                    /></Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className='text-center text-white'>olá, cristiano</p>
                  </Col>
                  <Col>

                    <img src={img1} alt="" width={70}
                      style={{
                        marginLeft: "64px"
                      }}
                    />
                  </Col>
                </Row>
                <Row className='mt-1'>

                  <Col>
                    <h3>

                      <Badge pill bg="secondary">
                        <Row>
                          <Col>
                            Saldo:
                          </Col>
                          <Col>
                            R$0,00
                          </Col>
                        </Row>
                      </Badge>
                    </h3>

                  </Col>
                </Row>
                <Card className="shadow mt-2  rounded-3 justify-content-center"

                  style={{
                    background: "#ffeded18",
                    height: "150px"


                  }}

                >
                  <Card.Body>
                    <Row>
                      <p className='text-center text-white'>Historico de compras</p>
                    </Row>

                  </Card.Body>
                </Card>

                <Row>
                  <Col>
                  <Row>
                  <p className='text-center text-white'>escanear qr</p>

                  </Row>
                  <Row>
                    <Button variant='link' ><img src={img2} alt="" width={70}
                      style={{
                       // marginLeft: "64px"
                      }}
                    /></Button>
                  </Row>
                  </Col>
                  <Col>
                  <Row>
                  <p className='text-center text-white'> posso te ajudar?</p>
                  </Row>
                  <Row>
                  <Button variant='link' ><img src={img3} alt="" width={70}
                      style={{
                       // marginLeft: "64px"
                      }}
                    /></Button>
                  </Row>
                  </Col>

                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {loading && <Spinner />}

    </>
  );
}

export default HomePage;

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { RecoverPasswordFunc } from '../../service/Authentication';
import PropTypes from 'prop-types';
import { RecoverPassword } from '../../service/Authentication';
import { Alert, Col, Form, Row } from 'react-bootstrap';
import img2 from '../Login/images/avatar.png'
import { useState } from 'react';
import Spinner from '../Spinner';


function RecoverPasswordModal({ show, setShow }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setloading] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    const RecoverPasswordFunc = async () => {
        setloading(true);

        if(username){
            await RecoverPassword(username)
            setloading(false);
            setShow(false)
            setErrorMessage(true);

        }


    }

    return (
        <>
            {errorMessage && <Alert
                variant="warning"
                onClose={() => setErrorMessage(false)}
                dismissible
            >
                <p>
                    foi enviado para seu e-mail link para alteração da senha
                </p>
            </Alert>
            }
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            // style={{
            //     background: "#064105",
            // }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Recuperar senha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="mt-3">
                        <Row>
                            <Col xs={2}>
                                <img src={img2} alt='' height={40} />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Digite seu e-mail"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={RecoverPasswordFunc} variant="warning">Enviar</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
                {loading && <Spinner />}
            </Modal>

        </>
    );
}
RecoverPasswordModal.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func
};
export default RecoverPasswordModal;
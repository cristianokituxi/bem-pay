
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Realize a validação dos campos aqui
    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {
      setErrorMessage('');

      // Lógica de autenticação ou redirecionamento após o login
      console.log('Usuário:', username);
      console.log('Senha:', password);
    }
  };

  return (
    <div className="container">
      <h1>Tela de Login</h1>

      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <Button variant="primary" type="submit">Entrar</Button>
        <Button variant="secondary" className="ml-2">Esqueceu a senha?</Button>
        <Button variant="secondary" className="ml-2">Criar conta</Button>
      </Form>
    </div>
  );
};

export default LoginScreen;

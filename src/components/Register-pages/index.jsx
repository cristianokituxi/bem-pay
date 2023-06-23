import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Realize a lógica de cadastro aqui
    console.log('Usuário:', username);
    console.log('E-mail:', email);
    console.log('Senha:', password);

    // Redirecionar ou exibir uma mensagem de sucesso
  };

  return (
    <div className="container">
      <h1>Tela de Cadastro</h1>

      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formUsername">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Cadastrar</Button>
      </Form>
    </div>
  );
};

export default SignupScreen;

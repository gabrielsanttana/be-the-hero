import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import {Modal} from 'react-bootstrap';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import './styles.css';

function Login() {
  const [id, setID] = useState("");

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('/sessions', {id});

      localStorage.setItem('ongID', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch(err) {
      alert("Error ao efetuar o login. Tente novamente");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="logo"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <Modal/>

          <input 
            type="text" 
            autoFocus
            placeholder="Seu ID"
            value={id}
            onChange={(event) => setID(event.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link to="/register">
            <FiLogIn
              size={16}
              color="#e02041" 
            /> 
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroes} alt="heroes"/>
    </div>
  );
}

export default Login;
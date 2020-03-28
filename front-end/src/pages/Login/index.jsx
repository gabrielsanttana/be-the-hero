import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import './styles.css';

function Login() {
  const [id, setID] = useState("");

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="logo"/>

        <form>
          <h1>Faça seu login</h1>

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
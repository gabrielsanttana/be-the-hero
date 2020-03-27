import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

function Register() {
  return (
    <div className="register-container">
      <section className="title">
        <img src={logo} alt="logo" />

        <h1>Cadastro</h1>

        <p>
          Faça seu cadastro, entre na plataforma e ajude pessoas
          a encontrarem os casos da sua ONG.
        </p>

        <Link>
          <FiArrowLeft 
            size={46}
            color="#e02041"
          />
          Voltar para o login
        </Link>
      </section>

      <form>
        <input 
          type="text"
          placeholder="Nome da ONG"
          autoFocus
        />
        <input 
          type="email"
          placeholder="E-mail"
        />
        <input 
          type="text"
          placeholder="Whatsapp"
        />
        <input 
          type="text"
          placeholder="Cidade"
        />
        <input 
          type="text"
          placeholder="UF"
        />
        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Register;
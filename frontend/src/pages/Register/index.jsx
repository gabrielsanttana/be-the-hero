import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import './styles.css';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const ongData = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', ongData);

      alert(`Seu ID de acesso: ${response.data.id}. Utilize-o para fazer o login`);

      history.push('/');
    } catch(err) {
      console.log(err);
      
      alert('Ocorreu um erro ao realizar seu cadastro. Tente novamente, por favor');

      history.push('/register');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section className="title">
          <img src={logo} alt="logo" />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas
            a encontrarem os casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o login
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nome da ONG" 
            autoFocus 
            value={name}
            onChange={(event) => setName(event.target.value)} 
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Whatsapp" 
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)} 
          />

          <div className="input-group">
            <input 
              type="text" 
              placeholder="Cidade" 
              value={city}
              onChange={(event) => setCity(event.target.value)} 
            />
            <input 
              type="text" 
              placeholder="UF" 
              style={{width: 80}} 
              value={uf}
              onChange={(event) => setUf(event.target.value)} 
            />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
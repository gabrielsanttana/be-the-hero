import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import './styles.css';

function NewIncident() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  const ongID = localStorage.getItem('ongID');

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try { 
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongID,
        }
      });

      history.push('/profile');
    } catch(err) {
      alert('Erro ao registrar o incidente. Tente novamente');
    }
  }

  return (
    <div className="newIncident-container">
      <div className="content">
        <section className="title">
          <img src={logo} alt="logo" />

          <h1>Registrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolve-lo
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para a home
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Título do caso" 
            autoFocus
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Valor em reais (somente o número)"
            value={value}
            onChange={(event) => setValue(event.target.value)} 
          />

          <button type="submit" className="button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
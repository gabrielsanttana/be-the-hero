import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongID = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: ongID,
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongID]);

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo" />

        <p>Bem vinda, {ongName}</p>

        <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>

        <button>  
          <FiPower size={16} color="#e02041" />
        </button>      
      </header>

      <div className="content">
        <h1>Casos cadastrados</h1>
      
        <ul>
          {incidents.map(({title, description, value}) => (
            <li>
              <strong>CASO:</strong>

              <p>{title}</p>

              <strong>DESCRIÇÃO:</strong>

              <p>
                {description}
              </p>

              <strong>VALOR:</strong>

              <p>{`R$${value}`}</p>

              <button>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

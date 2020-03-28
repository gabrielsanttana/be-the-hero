import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

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

  async function handleDeleteIncident(incident_id) {
    try {
      await api.delete(`/incidents/${incident_id}`, {
        headers: {
          Authorization: ongID,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== incident_id));
    } catch(err) {
      alert('Erro ao excluir caso. Tente novamente');
    }
  }

  async function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo" />

        <p>Bem vinda, {ongName}</p>

        <Link to="/incidents/new" className="button">Registrar novo caso</Link>

        <button onClick={handleLogout}>  
          <FiPower size={16} color="#e02041" />
        </button>      
      </header>

      <div className="content">
        <h1>Casos registrados</h1>
      
        {incidents.length >= 1 ?
          <ul>
            {incidents.map(({title, description, value, id}) => (
              
              <li>
                <strong>CASO:</strong>

                <p>{title}</p>

                {console.log(incidents.length)}

                <strong>DESCRIÇÃO:</strong>

                <p>
                  {description}
                </p>

                <strong>VALOR:</strong>

                <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)}</p>

                <button onClick={() => handleDeleteIncident(id)}>
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </li>
            ))}
          </ul>
        : <p className="no-incidents">Não há casos registrados no momento</p>}
      </div>
    </div>
  );
}

import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

function NewIncident() {
  return (
    <div className="newIncident-container">
      <div className="content">
        <section className="title">
          <img src={logo} alt="logo" />

          <h1>Cadastrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolve-lo
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para a home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" autoFocus />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais (somente o número)" />

          <div className="input-group">
            <button type="submit" className="button">
              Cancelar
            </button>

            <button type="submit" className="button">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
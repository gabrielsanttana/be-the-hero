import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo" />

        <p>Bem vinda, ONG</p>

        <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>

        <button>  
          <FiPower size={16} color="#e02041" />
        </button>      
      </header>

      <div className="content">
        <h1>Casos cadastrados</h1>

        <ul>
          <li>
            <strong>CASO:</strong>

            <p>Cadelinha atropelada</p>

            <strong>DESCRIÇÃO:</strong>
            
            <p>
              A cadelinha Jolie foi atropelada por um carro no bairro
              Santana e teve que passar por uma cirurgia às pressas.
            </p>

            <strong>VALOR:</strong>

            <p>R$120,00 reais</p>

            <button>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>

            <p>Cadelinha atropelada</p>

            <strong>DESCRIÇÃO:</strong>
            
            <p>
              A cadelinha Jolie foi atropelada por um carro no bairro
              Santana e teve que passar por uma cirurgia às pressas.
            </p>

            <strong>VALOR:</strong>

            <p>R$120,00 reais</p>
          </li>

          <li>
            <strong>CASO:</strong>

            <p>Cadelinha atropelada</p>

            <strong>DESCRIÇÃO:</strong>
            
            <p>
              A cadelinha Jolie foi atropelada por um carro no bairro
              Santana e teve que passar por uma cirurgia às pressas.
            </p>

            <strong>VALOR:</strong>

            <p>R$120,00 reais</p>
          </li>

          <li>
            <strong>CASO:</strong>

            <p>Cadelinha atropelada</p>

            <strong>DESCRIÇÃO:</strong>
            
            <p>
              A cadelinha Jolie foi atropelada por um carro no bairro
              Santana e teve que passar por uma cirurgia às pressas.
            </p>

            <strong>VALOR:</strong>

            <p>R$120,00 reais</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

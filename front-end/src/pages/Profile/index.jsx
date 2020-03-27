import React from 'react';
import {FiPower} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo"/>

        <p>Bem vinda, ONG</p>

        <button>Cadastrar novo caso</button>

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

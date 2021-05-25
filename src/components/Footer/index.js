import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="http://www.visao-ol.com.br/">
      <img src="../../assets/img/Logo-white.png" alt="Logo Jones" />
      </a>
      <p>
        Todos os direitos reservados.
        {' '}
        <a href="http://www.visao-ol.com.br/">
          Visão On-line
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

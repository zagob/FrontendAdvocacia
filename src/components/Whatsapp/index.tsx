import React from 'react';

import Wpp_fixed from '../../assets/whatsapp_fixed.svg';
import './styles.css';

const Whatsapp: React.FC = () => {
  return (
    <div className="teste">
    <a href="https://api.whatsapp.com/send?phone=5514997130042" target="_blank">
      <img src={Wpp_fixed} width="60" color="red" alt="Contate-nos"/>
    </a>
  </div>
  );
}

export default Whatsapp;
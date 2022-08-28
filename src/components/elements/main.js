import React from "react";
import '../../assets/scss/core/elements/_main.scss'


// const rootElement = document.getElementById('root');
// createRoot(rootElement).render(<Chart />);

function main() {
  return (
    <container class='main'>
    <div className="navBar">
      <p className='label-filter'>Tomador</p>
      <select name='filter'>
        <option>Todos</option>
      </select>
      <p className='label-filter'>Emissor</p>
      <select name='filter'>
        <option>Todos</option>
      </select>
      <p className="label-filter">Apólice</p>
      <select name='filter'>
        <option>Todos</option>
      </select>
    </div>
    <div className="boxes">
      <div className="premios">
        <div className="label-box">75.1 Bi <p>IS Aceita</p></div>
        <div className="label-box">75.1 Bi <p>Taxa média</p></div>
        <div className="label-box">75.1 Bi <p>nº apólices</p></div>
      </div>
    </div>
   </container>)};

export default main;
import './index.css'
import React from "react";
import { useState } from 'react'

let nextId = 0;

export const Adicionar = () => {
  
  const [name, setName] = useState('');
  const [cargos, setCargos] = useState([]);


  const handleClick = () => {
    console.log(cargos)
  }

  return (
    <div>
      <h1 className='titulo'>SETORES</h1>
      <div className='body'>
        <div className='sider-left'>
          <h1>Setores</h1>
        </div>
        <div className='sider-right'>
          <h1>Adicionar Setor</h1>
            <div className='d-ln'>
              <label className='ln'>Nome:</label>
              <input className='ln-in'/>
            </div>
            <div className='d-lc'>
              <div className='lc'>
                <label>Cargo(s):</label>
              </div>
              <div>
                <input className='lc-in'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <button className='lc-bu' onClick={() => {
                  setName('');
                  setCargos([
                   ...cargos,
                   { id: nextId++, name: name }
                  ]); handleClick()
                }}>
                  Add
                </button>
              </div>
            </div>
            <div className='d-aut'>
              {cargos.map(artist => (
                <button className='bt-aut' key={artist.id} onClick={() => setCargos(
                  cargos.filter(a =>
                    a.id !== artist.id
                  )
                )}
                >{artist.name}</button>
              ))}
            </div> 
            <div className='d-save'>
              <button className='bt-save' >Salvar</button>
            </div>
        </div>
      </div>
    </div>
  );
}
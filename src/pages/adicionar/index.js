import './index.css'
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'


let nextId = 0;

export const Adicionar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [cargos, setCargos] = useState([]);
  const [setor,setSetor] = useState({
    name: '',
    cargos: []
  })
 

  const handleClick = () => {
    setName('');
    setSetor({ ...setor, cargos: [cargos] });
    setCargos([]);
  }

  useEffect(() => {
    dispatch({ type:'SET_SETOR', setor});
  },[setor.cargos])

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
              <input className='ln-in'
                onChange={e => setSetor({ ...setor, name: e.target.value })} />
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
                  ]);
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
              <button className='bt-save' onClick={handleClick} >Salvar</button>
            </div>
        </div>
      </div>
    </div>
  );
}
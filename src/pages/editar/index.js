import './index.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSetores } from '../../store/module/setores/actions'
import { SideMenu } from './side.menu'



let nextId = 0;

export const Editar = () => {
  
  const setores  = useSelector(state => state.setor.setor)

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [cargos, setCargos] = useState([]);
  const [setor, setSetor] = useState([]);
  

  const handleClick = () => {
    dispatch(setSetores(setor));
    setCargos([])
  }
  
  useEffect(() => {
    setSetor({ ...setor, name:setores.name, cargos: cargos });
  },[cargos])

  return (
    <div>
      <h1 className='titulo'>SETORES</h1>
      <div className='body'>
        <div className='sider-left'>
          <h1>Setores</h1>
          <div> <SideMenu/> </div>
        </div>
        <div className='sider-right'>
          <h1>Editar {setores.name}</h1>
            <div className='d-ln'>
              <label className='ln'>Nome:</label>
              <input className='ln-in' value={setores.name}/>
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
                  setName("");
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
              {cargos.map(cargo => (
                <button className='bt-aut' type='button' key={cargo.id} onClick={() => setCargos(
                  cargos.filter(a =>
                    a.id !== cargo.id
                  )
                )}
                >{cargo.name}</button>
              ))}
            </div> 
            <div className='d-save'>
              <button className='bt-save' type="button" onClick={handleClick} >Salvar</button>
            </div>
        </div>
      </div>
    </div>
  );
}
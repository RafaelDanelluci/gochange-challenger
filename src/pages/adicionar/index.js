import './index.css'
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { setSetores } from '../../store/module/setores/actions'
import { SideMenu } from './side.menu'

//Variavel para adicionar id nos cargos.
let nextId = 0;

export const Adicionar = () => {

  //Hooks do react e dispatch do redux.
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [cargos, setCargos] = useState([]);
  const [setor,setSetor] = useState([])
  
  //função do botão Add, limpa o campo de input e insere um novo valor
  //no array de cargos e um Id.
  const handleAdd = () => {
    const valiCargos = cargos.map(cargo=> cargo.name);
    if(!valiCargos.includes(name)){
      setCargos([...cargos, { id: nextId++, name: name }]);
      setName("");    
    } else {
      alert('Cargo ja existe');
      setName("");
    }
  }

  //função do botão salvar, envia o state para o store do redux, e limpa o
  //hook do react e reset a variavel de id.
  const handleClick = () => {
    dispatch(setSetores(setor));
    setCargos([]);
    nextId = 0;
  }
  
  //Hook do react para salvar os dados do array cargos no array que será
  //mandado para o store do redux.
  useEffect(() => {
    setSetor({ ...setor, cargos: cargos });
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
          <h1>Adicionar Setor</h1>
            <div className='d-ln'>
              <label className='ln'>Nome:</label>
              <input className='ln-in'
                onChange={e => setSetor({...setor, name: e.target.value })} />
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
                <button className='lc-bu' onClick={handleAdd}>
                  Add
                </button>
              </div>
            </div>
            <div className='d-aut'>
              {cargos.map(cargo => (
                <button className='bt-aut' type='button' key={cargo.id}
                  onClick={() => setCargos(
                    cargos.filter(a =>
                      a.id !== cargo.id
                    )
                  )
                }
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
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './side.menu.css';
import { Link } from 'react-router-dom';
import { setSetores } from '../../store/module/setores/actions'


export const SideMenu = () => {
  
  //Hooks do react e dispatch do redux.
  const dispatch = useDispatch();
  const [mdiv, setMdiv]= useState();
  const [edit, setEdit]= useState();
  const [del, setDel] = useState();
  
  //Tras o state da store.
  const setores  = useSelector(state => state.setor.setor)

  //Função de click do menu, irá adicionar os cargos a baixo do menu assim
  //como os botões de editar e excluir. setMdiv faz um map do array cargos
  //e exibe na tela criando um botão pra cada elemento.
  function handleMap() {
    setMdiv(setores.cargos.map(cargo => (<button className='bt-save' key={cargo.id}>{cargo.name}</button>)));
    setEdit(<button className='bt-li'><Link className='li' to='/editar'>EDITAR</Link></button>);
    setDel(<button className='bt-li' onClick={handleDelete}>Excluir</button>)
  }

  //função do botão de excluir, limpa o state mandando um chave vazia e limpa
  //os hooks do react.
  function handleDelete() {
    dispatch(setSetores({}));
    setDel([]);
    setMdiv([]);
    setEdit([])
  }

  return(
    <div>
      <button className="accordion" onClick={()=> handleMap()}>
        {setores.name}
      </button>
      <div className='dv-bt-sv'>
        {mdiv}
      </div>
      <div className='dv-bt-li'>
        {edit}
        {del}
      </div>
    </div>
  );
}
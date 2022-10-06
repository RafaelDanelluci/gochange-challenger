import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './side.menu.css';
import { Link } from 'react-router-dom';
import { setSetores } from '../../store/module/setores/actions'


export const SideMenu = () => {

  const dispatch = useDispatch();
  const [mdiv, setMdiv]= useState();
  const [edit, setEdit]= useState();
  const [del, setDel] = useState();
  
  const setores  = useSelector(state => state.setor.setor)


  function handleMap() {
    setMdiv(setores.cargos.map(cargo => (<button className='bt-save' key={cargo.id}>{cargo.name}</button>)));
    setEdit(<button className='bt-li'><Link className='li' to='/editar'>EDITAR</Link></button>);
    setDel(<button className='bt-li' onClick={handleDelete}>Excluir</button>)
  }

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
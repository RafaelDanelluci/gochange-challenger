import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Adicionar } from './pages/adicionar';
import { Editar } from './pages/editar';

//Rotas do projeto
export const Router = () => {
  return(
    <BrowserRouter>
     <Routes>
        <Route path='/' element= {<Adicionar />} />
        <Route path='/editar' element= {<Editar />} />
     </Routes>
    </BrowserRouter>
  )
}
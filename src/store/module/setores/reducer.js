import produce from 'immer'

//Estado inicial 
const INITIAL_STATE = {
  setor: {}
};

//Funções do reducer
function setor(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SETOR': {
      return produce(state, (draft) =>{
        draft.setor = action.setor;
      })
    }

    default:
      return state;
  }
}

export default setor;
import produce from 'immer'

const INITIAL_STATE = {
  setor: {}
};

function setor(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SETOR': {
      return produce(state, (draft) =>{
        draft.setor = action.setor;
      })
    }

    case 'SEND_SETORES': {
      return produce(state, (draft) =>{
        draft.setores = action.setores;
      })
    }

    default:
      return state;
  }
}

export default setor;
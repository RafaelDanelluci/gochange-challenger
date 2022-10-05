import produce from 'immer'

const INITIAL_STATE = {
  setor: {},
};

function setores(state = INITIAL_STATE,action) {
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

export default setores;
import { combineReducers } from 'redux';
import setor from '../module/setores/reducer';

//combina todos os reducer.(obs: só teve um então não precisava disso)
export default combineReducers({
  setor
});
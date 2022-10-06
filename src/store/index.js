import { createStore } from 'redux';

import rootreducer from './module/rootreducer';


const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
import { createStore } from 'redux';
import advertisementReducer from './reducers';

const store = createStore(advertisementReducer);

export default store;

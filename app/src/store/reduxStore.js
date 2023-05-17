import {
    legacy_createStore as createStore, 
    applyMiddleware,
    compose
} from 'redux';
import { reducers } from './reducers';


function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch(e) {
        console.log(e);
    }
}

function loadFromLocalStorage(store) {
    try {
        const serializedStore = window.localStorage.getItem('store')
        if(serializedStore === null) {
            return undefined;
        }
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
} 

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState)
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
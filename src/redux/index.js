import {createStore, combineReducers} from 'redux';
import {userReducer} from './userReducer'
import {dataReducer} from './dataReucer'


function configureStore() {
    return createStore(combineReducers({
        user:userReducer,
        data:dataReducer,
    }));
}


export {
    configureStore
}
import {GET_DOGS, GET_BY_NAME, GET_BY_ID} from '../actions/index'

let initialState = {allDogs:[], dogsCopy: [], temperaments:[]};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS: 
        return{
            ...state,
            allDogs: action.payload,
            dogsCopy: action.payload,
        };
        case GET_BY_NAME:
        return{
             ...state,
             allDogs: action.payload,
        }; 
        case GET_BY_ID:
        return{
            ...state,
            allDogs: action.payload,
        };
        
        default:
            return state;
    }
}

export default rootReducer;
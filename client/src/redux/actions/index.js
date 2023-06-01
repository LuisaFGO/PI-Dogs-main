import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";

export function getDogs(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/dogs");
        return dispatch({
            type:"GET_DOGS",
            payload: response.data
        })
    };
}

export function getByName(nombre){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/dogs?nombre=${nombre}`);
        return dispatch({
            type:"GET_BY_NAME",
            payload: response.data
        })
    };
}

export function getByID(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/dogs/${id}`);
        return dispatch({
            type:"GET_BY_ID",
            payload: response.data
        })
    };
}
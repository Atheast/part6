import {getAll, postAncedote, voteA} from "../services/ancedotes";

const reducer = (state = [], action) => {
    switch(action.type) {
        case 'VOTE': 
            return state.map(x => x.id === action.data.id ? {...x, votes: x.votes+1} : x);
        case 'ADD':
            return [...state,action.data.ancedote];
        case 'INIT_ANCEDOTES':
            return action.data;
        default: 
            return state;
    }
}

export const vote = (id) => {
    return async dispatch => {
        const ancedote = await voteA(id);

        dispatch({
            type: 'VOTE',
            data: ancedote
        });
    }
}

export const add = (content) => {
    return async dispatch => {
        const ancedote = await postAncedote(content);

        dispatch({
            type: 'ADD',
            data: {
                ancedote
            }
        });
    }
} 

export const initA = () => {
    return async dispatch => {
        const ancedotes = await getAll();
        dispatch({
            type: 'INIT_ANCEDOTES',
            data: ancedotes
        });
    }   
} 

export default reducer;
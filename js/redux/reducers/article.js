import { ADD_ARTICLE } from "../constants/actionTypes";

const initialState = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' },
];

const articleReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload];
            //return state.push(action.payload);
        default:
            return state;
    }
};

export default articleReducer;
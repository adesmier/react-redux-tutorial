import { ADD_USER } from "../constants/actionTypes";

const initialState = [
    { id: 1, name: 'Antohny' },
    { id: 2, name: 'Ben' },
    { id: 3, name: 'Richard' },
];

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default usersReducer;
import { ADD_ARTICLE } from "../constants/actionTypes";

const initialState = {
    articles: [
        { id: 1, title: 'First' },
        { id: 2, title: 'Second' },
        { id: 3, title: 'Third' },
    ]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return {
                articles: [...state.articles, action.payload]
            }
        default:
            return state;
    }
};

export default rootReducer;
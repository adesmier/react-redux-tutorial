import { ADD_USERS, USERS_LOADING } from "../constants/actionTypes";

const initialState = {
    users: [
        {
            "id": 1345,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
            }
        },
    ],
    usersLoading: false
};



const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USERS:
            return Object.assign({}, state, {
                users: [...state.users, ...action.payload]
            });
        case USERS_LOADING:
            return Object.assign({}, state, {
                usersLoading: action.payload
            });
        default:
            return state;
    }
};

export default usersReducer;

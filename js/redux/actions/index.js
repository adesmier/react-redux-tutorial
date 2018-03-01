import { ADD_ARTICLE } from "../constants/actionTypes";

export const addArticle = article => ({
    type: 'ADD_ARTICLE',
    payload: article
});

export const addUsers = users => ({
    type: 'ADD_USERS',
    payload: users
});


export const usersLoading = bool => ({
    type: 'USERS_LOADING',
    payload: bool
});

export const getUsers = url => {
    return dispatch => {
        dispatch(usersLoading(true));

        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error(response.statusText);
                }

                dispatch(usersLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(users => dispatch(addUsers(users)))
            .catch(error => console.error(error));
    };
}


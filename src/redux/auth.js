import * as ActionTypes from './ActionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const Auth = (state = {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token'),
        user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    }, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state,
                isAuthenticated: false,
                user: action.creds
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {...state,
                
                isAuthenticated: true,
                
                token: action.token
            };
        case ActionTypes.LOGIN_FAILURE:
            return {...state,
                
                isAuthenticated: false
                
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {...state,
               
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state,
                
                isAuthenticated: false,
                token: '',
                user: null
            };
        default:
            return state
    }
}


export const SignUpUser = (state = {
        
        user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    }, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_REQUEST:
            return {...state,
                
                user: action.creds
            };
        case ActionTypes.SIGNUP_SUCCESS:
            return {...state,
                
               
                
            };
        case ActionTypes.SIGNUP_FAILURE:
            return {...state,
                
                isAuthenticated: false
                
            };
        
        default:
            return state
    }
}




export const Announcements = (state = {
        errMess: null,
        announcements: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ANNOUNCEMENTS:
            return {...state,  errMess: null, announcements: action.payload};

        case ActionTypes.ANNOUNCEMENTS_FAILED:
            return {...state, errMess: action.payload, announcements: null};

        default:
            return state;
    }
}

export const Challenges = (state = {
        errMess: null,
        challenges: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CHALLENGES:
            return {...state,  errMess: null, challenges: action.payload};

        case ActionTypes.CHALLENGES_FAILED:
            return {...state, errMess: action.payload, challenges: null};

        default:
            return state;
    }
}

export const Rules = (state = {
        errMess: null,
        rules: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_RULES:
            return {...state,  errMess: null, rules: action.payload};

        case ActionTypes.RULES_FAILED:
            return {...state, errMess: action.payload, rules: null};

        default:
            return state;
    }
}

export const Universities = (state = {
        errMess: null,
        rules: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_UNIVERSITES:
            return {...state,  errMess: null, universities: action.payload};

        case ActionTypes.UNIVERSITIES_FAILED:
            return {...state, errMess: action.payload, universities: null};

        default:
            return state;
    }
}
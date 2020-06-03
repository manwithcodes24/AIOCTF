import * as ActionTypes from './ActionTypes';
//import { baseUrl } from '../shared/baseUrl';




export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}




export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('http://localhost:8000/user/UserLogin', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
             dispatch(fetchannouncements());
             dispatch(fetchrules());
             dispatch(fetchchallenges());
             dispatch(fetchuniversities());
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};
export const signupUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSignup(creds))

    return fetch('http://localhost:8000/user/UserRegister', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
           
             //dispatch(fetchannouncements());
             //dispatch(fetchrules());
            // dispatch(fetchchallenges());
             //dispatch(fetchuniversities());
            dispatch(receiveSignup(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(signupError(error.message)))
};

export const requestSignup = (creds) => {
    return {
        type: ActionTypes.SIGNUP_REQUEST,
        creds
    }
}
  
export const receiveSignup = (response) => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS
    }
}
  
export const signupError = (message) => {
    return {
        type: ActionTypes.SIGNUP_FAILURE,
        message
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}
export const fetchannouncements = () => (dispatch) => {
    
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch('http://localhost:8000/announcements', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(announcements => dispatch(addannouncements(announcemets)))
    .then(rules => dispatch(addrules(rules)))
    .then(challenges => dispatch(addchallenges(challenges)))
    .then(universities => dispatch(adduniversitiess(universitiess)))
    .catch(error => dispatch(announcementsFailed(error.message)));
}



export const announcementsFailed = (errmess) => ({
    type: ActionTypes.ANNOUNCEMENTS_FAILED,
    payload: errmess
});

export const addannouncements = (announcements) => ({
    type: ActionTypes.ADD_ANNOUNCEMENTS,
    payload: announcements
});


export const fetchrules = () => (dispatch) => {
    
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch('http://localhost:8000/rules', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(announcements => dispatch(addrules(rules)))
    .catch(error => dispatch(rulesFailed(error.message)));
}



export const rulesFailed = (errmess) => ({
    type: ActionTypes.RULES_FAILED,
    payload: errmess
});

export const addrules = (rules) => ({
    type: ActionTypes.ADD_RULES,
    payload: rules
});

export const fetchrules = () => (dispatch) => {
    
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch('http://localhost:8000/rules', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(announcements => dispatch(addrules(rules)))
    .catch(error => dispatch(rulesFailed(error.message)));
}



export const rulesFailed = (errmess) => ({
    type: ActionTypes.RULES_FAILED,
    payload: errmess
});

export const addrules = (rules) => ({
    type: ActionTypes.ADD_RULES,
    payload: rules
});

export const fetchchallenges = () => (dispatch) => {
    
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch('http://localhost:8000/challenges', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(challenges => dispatch(addchallenges(challenges)))
    .catch(error => dispatch(challengesFailed(error.message)));
}



export const challengesFailed = (errmess) => ({
    type: ActionTypes.CHALLENGES_FAILED,
    payload: errmess
});

export const addchallenges = (challenges) => ({
    type: ActionTypes.ADD_CHALLENGES,
    payload: challenges
});

export const fetchuniversities = () => (dispatch) => {
    
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch('http://localhost:8000/universities', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(universities => dispatch(adduniversities(universities)))
    .catch(error => dispatch(universitiesFailed(error.message)));
}



export const universitiesFailed = (errmess) => ({
    type: ActionTypes.UNIVERSITIES_FAILED,
    payload: errmess
});

export const adduniversities = (universities) => ({
    type: ActionTypes.ADD_UNIVERSITIES,
    payload: universities
});
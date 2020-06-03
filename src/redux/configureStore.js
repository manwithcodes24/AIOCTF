import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth ,Rules, Announcements,Challenges,Universities,Total} from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';





export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            rules: Rules,
            signupuser:SignUpUser,
            announcements:Announcements,
            universities:Universities,
            challenges:Challenges,
            total:Total

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
import {FETCH_USER} from '../actions/types';

// In the beggining of the application the state will be null to avoid unecessary
// waits to know if the user is logged in
export default function(state= null,action){
    switch(action.type){
        case FETCH_USER:
            // In JavaScript the value '' || false will return false
            // If the action.payload is empty then the user is logged in
            // For this case, this will return null, the data of the login of false if the user
            // is logged out
            return action.payload || false;
        default:
            return state;
    }
}
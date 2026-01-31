import { moviesActionTypes } from './movies.types';

/*
Defines the inital state for the animation row
Sets loading to false, 
sets the error string to be empty,
and intializes the data array.
*/
const initialState = {
    loading: false,
    error: '',
    data: []
}
/*
Reducer that handles the state of the Animation Movies Catagory.
Fetches data, loading additional data, and errors.
*/
const animationMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        // Sets the loading state to true to toggle on the loading animation
        case moviesActionTypes.FETCH_ANIMATION_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        /* 
        Ensures the loading animation is off, 
        and that the fetched payload is stored in data
        */
        case moviesActionTypes.FETCH_ANIMATION_MOVIES_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
                error: ''
            }
        /*
        Ensures the loading animation is off, 
        stores the newly fetched payload to data while preserving what
        was already stored in data,
        adding to the list instead of overwritting it.
        */
        case moviesActionTypes.LOAD_MORE_ANIMATION_MOVIES_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...payload],
                loading: false,
                error: ''
            }
        /*
        Ensures the loading animation is off,
        sets data to be empty,
        and stores the error message as the payload
        */    
        case moviesActionTypes.FETCH_ANIMATION_MOVIES_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                error: payload
            }
        // if no other cases, return state
        default:
            return state;
    }
}
// Exports the reducer into the root reducer
export default animationMoviesReducer;
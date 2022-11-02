import * as types from "./types";

const defaultState = {
    // Add later
    output: ""
}

export default function reducer (state=defaultState, action){
    switch(action.type){
        //add cases here in the future if needed.
        case types.GET_OUTPUT:
            return {
                ...state, 
                output: action.payload
            };

        default: return state;
    }
};
/* eslint-disable linebreak-style */
import initialState from "./initialState";

export const actionTypes = {
    SET_WORD1: "SET_WORD1",
    SET_WORD2: "SET_WORD2",
    BREAKIFY: "BREAKIFY"
};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
    case actionTypes.SET_WORD1: {
        return Object.assign({}, state, { word1: action.payload });
    }
    case actionTypes.SET_WORD2: {
        return Object.assign({}, state, { word2: action.payload });
    }
    case actionTypes.BREAKIFY: {
        return Object.assign({}, state, { breakify: action.payload });
    }
    default:
        return state;
    }
};

export default reducer;
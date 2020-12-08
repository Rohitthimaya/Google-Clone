export const initialState = {
    term: null,
};

export const actionTypes = {
    SET__SEARCH__TERM: "SET__SEARCH__TERM",
};

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.SET__SEARCH__TERM:
            return{
                ...state,
                term: action.term,
            };

            default:
                return state;
    }
};

export default reducer;
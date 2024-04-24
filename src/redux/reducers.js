import { ADD_ADVERTISEMENT, DELETE_ADVERTISEMENT } from './actions';

const initialState = {
    advertisements: [],
};

const advertisementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADVERTISEMENT:
            return {
                ...state,
                advertisements: [...state.advertisements, action.payload],
            };
        case DELETE_ADVERTISEMENT:
            return {
                ...state,
                advertisements: state.advertisements.filter(ad => ad.id !== action.payload),
            };
        default:
            return state;
    }
};

export default advertisementReducer;

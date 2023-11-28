import { categoryConstants } from "../../constant/constant";

const initState = {
    categories: [],
    error: [],
};

const CategoryReducer= (state = initState, action) => {

    switch (action.type) {
        case categoryConstants.CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        default: {
            state = {
                ...state
            }
        }
    }
    return state;
}

export default CategoryReducer
import { allCategoryConstants, categoryConstants, newProductConstants, productConstants} from "../../constant/constant";

const initState = {
    products: [],
    newproducts: [],
    categories: [],
    allcategory: [],
    error: [],
};

const InitialDataReducer= (state = initState, action) => {

    switch (action.type) {
        case productConstants.PRODUCT_SUCCESS:
            state = {
                ...state,
                products:action.payload.products
            }
            break;
        case allCategoryConstants.ALL_CATEGORY_SUCCESS:
            state={
                ...state,
                allcategory:action.payload.category,
            }
            break;
        case newProductConstants.NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                newproducts: action.payload.newproducts
            }
            break;
        case categoryConstants.CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        default:{
            state={
                ...state
            }
        }
    }
    return state;
}

export default InitialDataReducer
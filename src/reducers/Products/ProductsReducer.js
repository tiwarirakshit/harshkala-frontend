import { filterConstants, newProductConstants, productConstants, relatedConstants, searchConstants, setPageConstant, trendingProductsConstants } from "../../constant/constant";

const initState = {
    products: [],
    totalproducts:null,
    shownproducts:null,
    remainingproducts:null,
    relatedproducts: [],
    filteredproducts: [],
    searchedProducts: [],
    trendingProducts:[],
    error: [],
    ptype:null,
    page:null,
};

const ProductsReducer = (state = initState, action) => {

    switch (action.type) {
        case trendingProductsConstants.TRENDING_PRODUCTS_SUCCESS:
            state={
                ...state,
                trendingProducts:action.payload.trendingproducts
            }
            break;
        case newProductConstants.NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                newproducts: action.payload.newproducts
            }
            break;
        case newProductConstants.NEW_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
        case productConstants.PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.products,
                ptype:0,
                totalproducts:action.payload.totalproducts,
                shownproducts:action.payload.shownproducts,
                remainingproducts:action.payload.remainingproducts,
            }
            break;
        case setPageConstant.PAGE_SUCCESS:
            state={
                ...state,
                page:action.payload.page
            }
        case searchConstants.SEARCH_SUCCESS:
            state = {
                ...state,
                searchedProducts: action.payload.products,
                ptype:1,
            }
            break;
        case searchConstants.SEARCH_FAILURE:
            state = {
                ...state,
                searchedProducts: null,
                ptype:action.payload.ptype,
                page:1,
            }
            break;
        case filterConstants.FILTER_SUCCESS:
            state = {
                ...state,
                filteredproducts: action.payload.filteredproducts,
                ptype:2,
            }
            break;
        case relatedConstants.RELATED_SUCCESS:
            state = {
                ...state,
                relatedproducts: action.payload.relatedproducts
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

export default ProductsReducer
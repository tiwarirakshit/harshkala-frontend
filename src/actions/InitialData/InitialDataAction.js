import { newProductConstants, categoryConstants, initialCartDataConstant, allCategoryConstants} from "../../constant/constant"
import axios from '../../helpers/axios';

export const getInitialData = ()=>{
    return async dispatch=>{
        const res = await axios.get('/initialdata');
        if(res.status  === 200){
            const {categories,newproducts} = res.data;
            dispatch({
                type: categoryConstants.CATEGORY_SUCCESS,
                payload:{categories}
            })
            dispatch({
                type: newProductConstants.NEW_PRODUCT_SUCCESS,
                payload:{newproducts}
            })
        }
    }

}


export const getAllCategoriesParent = ()=>{
    return async dispatch=>{
        const res = await axios.get('/get-category');
        if(res.status  === 200){
            const {category} = res.data;
            dispatch({
                type: allCategoryConstants.ALL_CATEGORY_SUCCESS,
                payload:{category}
            })
        }
    }

}

export const getInitialCartData = (uid)=>{
    return async dispatch=>{
        const res = await axios.post('/initial-cart-data',{
            uid
        });
        if(res.status  === 200){
            const {cartItems} = res.data;
            dispatch({
                type: initialCartDataConstant.INITIAL_CART_DATA_SUCCESS,
                payload:{cartItems}
            })
        }
    }

}

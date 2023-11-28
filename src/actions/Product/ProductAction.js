import axios from "../../helpers/axios";
import { filterConstants, getPageConstant, newProductConstants, productConstants, relatedConstants, searchConstants, setPageConstant, trendingProductsConstants } from "../../constant/constant";

export const getNewProducts = () => {

  return async (dispatch) => {
    dispatch({ type: newProductConstants.NEW_PRODUCT_REQUEST });
    const res = await axios.get(`/new-products`)
    if (res.status === 200) {
      const { products } = res.data;
      dispatch({
        type: newProductConstants.NEW_PRODUCT_SUCCESS,
        payload: {
          products,
        },
      });
    }
  };

};

export const setPageNumber = (page,ptype) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.PRODUCT_REQUEST });
    dispatch({
      type:setPageConstant.PAGE_SUCCESS,
      payload:{
        page,
      }
    })
  }
}

export const getAllProducts = (page,sort) => {
  if(sort == null){
    sort = "latest";
  }
  return async (dispatch) => {
    dispatch({ type: productConstants.PRODUCT_REQUEST });
    const res = await axios.get(`/get-products/${page}/${sort}`)
    if (res.status === 200) {
      const { products, totalproducts } = res.data;
      var shownproducts;
      if((page*8) < totalproducts){
        shownproducts=(page*8);
      }else{
        shownproducts=totalproducts
      }
      var remainingproducts = (totalproducts - shownproducts);
      dispatch({
        type: productConstants.PRODUCT_SUCCESS,
        payload: {
          products,
          totalproducts,
          shownproducts,
          remainingproducts
        }
      })
    } else {
      console.log("Error");
    }
  }
}


export const getFilteredProducts = (checked, value, page,type) => {
  return async (dispatch) => {
    dispatch({ type: filterConstants.FILTER_REQUEST })
    const res = await axios.post(`/filter-product`, {
      checked,
      value,
      page,
      type
    }).catch((err) => {
      if (err.response.status === 500) {
        const { message } = err.response.data.message;
        dispatch({
          type: filterConstants.FILTER_FAILURE,
          payload: {
            message,
          }
        })
      }
    })
    if (res.status === 200) {
      const { products } = res.data;
      dispatch({
        type: filterConstants.FILTER_SUCCESS,
        payload: {
          filteredproducts: products,
        }
      })
    }
  }
}

export const getTrendingProducts = () => {
  return async (dispatch) => {
    dispatch({ type: trendingProductsConstants.TRENDING_PRODUCTS_REQUEST })
    const res = await axios.get(`/trending-products`).catch((err) => {
      if (err.response.status === 500) {
        const { message } = err.response.data.message;
        dispatch({
          type: trendingProductsConstants.TRENDING_PRODUCTS_FAILURE,
          payload: {
            message,
          }
        })
      }
    })
    if (res.status === 200) {
      const { products } = res.data;
      dispatch({
        type: trendingProductsConstants.TRENDING_PRODUCTS_SUCCESS,
        payload: {
          trendingproducts: products,
        }
      })
    }
  }
}


export const getRelatedProducts = (keyword) => {
  return async (dispatch) => {
    dispatch({ type: relatedConstants.RELATED_REQUEST })
    const res = await axios.get(`/related-products/${keyword}`).catch((err) => {
      if (err.response.status === 500) {
        const { message } = err.response.data.message;
        dispatch({
          type: relatedConstants.RELATED_FAILURE,
          payload: {
            message,
          }
        })
      }
    })
    if (res.status === 200) {
      const { products } = res.data;
      dispatch({
        type: relatedConstants.RELATED_SUCCESS,
        payload: {
          relatedproducts: products,
        }
      })
    }
  }
}



export const getSearchedProducts = (keyword, page) => {
  return async (dispatch) => {
    dispatch({ type: searchConstants.SEARCH_REQUEST })
    if (keyword == null || keyword.trim() == "" || keyword == undefined) {
      dispatch({
        type: searchConstants.SEARCH_FAILURE,
        payload: {
          ptype: 0,
        }
      })
    } else {

      const res = await axios.get(`/search-product/${keyword}/${page}`).catch((err) => {
        if (err.response.status === 500) {
          const { message } = err.response.data.message;
          dispatch({
            type: searchConstants.SEARCH_FAILURE,
            payload: {
              message,
            }
          })
        }
      })
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: searchConstants.SEARCH_SUCCESS,
          payload: {
            products,
          }
        })
      }
    }
  }
}


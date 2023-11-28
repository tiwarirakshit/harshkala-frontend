import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header2/Header2";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProducts,
  getFilteredProducts,
  getSearchedProducts,
  setPageNumber,
} from "../../actions/Product/ProductAction";
import Slider from "@material-ui/core/Slider";
import "./Listing.css";
import {
  BiChevronDown,
  BiLoader,
  BiMenu,
  BiMinus,
  BiPlus,
  BiX,
} from "react-icons/bi";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Listing = () => {
  const [checked, setChecked] = useState([]);
  const [current, setCurrent] = useState(null);
  const [value, setValue] = useState([0, 4999]);
  const dispatch = useDispatch();
  const [totalProducts, setTotalProducts] = useState(null);
  const [shownProducts, setShownProducts] = useState(null);
  const [remainingProducts, setRemainingProducts] = useState(null);
  const allproducts = useSelector((state) => state.initialData.products);
  const allcategories = useSelector((state) => state.initialData.allcategory);
  const searchedProducts = useSelector(
    (state) => state.products.searchedProducts
  );
  const filteredProducts = useSelector(
    (state) => state.products.filteredproducts
  );
  const storePtype = useSelector((state) => state.products.ptype);
  const productscount = useSelector((state) => state.products);
  const page_number = useSelector((state) => state.products.page);
  // 0 - all products
  // 1 - searched products
  // 2 - filtered products
  const [pType, setPType] = useState(null);
  const [parentCategory, setParentCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [hamburger, setHamburger] = useState(false);
  const [type, setType] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location?.state) {
      if (location?.state?.from === "latest") {
        getAllProducts(0, "latest");
        setPType(0);
      }
    }
  }, [location?.state]);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (page_number) {
      setPage(page_number);
    }
  }, [page_number]);

  useEffect(() => {
    if (productscount) {
      setTotalProducts(productscount?.totalproducts);
      setShownProducts(productscount?.shownproducts);
      setRemainingProducts(productscount?.remainingproducts);
    }
  }, [productscount]);

  useEffect(() => {
    setPType(storePtype);
    if (storePtype == 0) {
      dispatch(getAllProducts(page, null));
    }
  }, [storePtype]);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    dispatch(getFilteredProducts(checked, value, page));
    setPType(2);
  };

  function handleFilter(value, id, type) {
    console.log(type, "type1");
    setType(type);
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  }

  useEffect(() => {
    if (checked.length > 0) {
      setPType(2);
      console.log(type, "type");
      dispatch(getFilteredProducts(checked, value, page, type));
    }
  }, [checked]);

  const handlePage = () => {
    if (pType == 0) {
      if (remainingProducts > 0) {
        var newpage = page + 1;
        dispatch(setPageNumber(newpage, pType));
        dispatch(getAllProducts(page, null));
      }
    }
  };

  const handleSort = (e) => {
    console.log("sort", e.target.value);
    if (pType === 0) {
      dispatch(getAllProducts(page, e.target.value));
    }
  };

  useEffect(() => {
    if (allcategories) {
      const res = allcategories.filter(filterParent);
      function filterParent(p) {
        return p.parentid === undefined;
      }
      setParentCategory(res);
    }
  }, [allcategories]);

  const toggleCurrentParent = (id) => {
    setCurrent(id);
  };

  const [showFilter, setShowFilter] = useState(false);
  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="flex flex-col relative z-900 min-h-full">
        {/* navbar filter  */}
        <div
          className={`${
            showFilter ? "left-0" : "left-[-380px]"
          } transition-all duration-200 block sm:hidden fixed top-[-25px] left-0 z-[1000] pt-4 pl-4 pr-4 bg-white w-[320px] shadow-2xl min-h-full mt-6  rounded`}
        >
          <div className="h-10 flex" onClick={toggleShowFilter}>
            <p className="flex text-darkred items-center pb-5">
              <BiX size={18} />
              close
            </p>
          </div>
          <p className="font-semibold">Prices</p>
          <div className="flex justify-between items-center">
            <p className="text-sm mt-3 font-dmsans">Range</p>
            <p className="text-xs font-dmsans mt-3">
              Rs {value[0]} - Rs {value[1]}
            </p>
          </div>
          <span className="w-full flex justify-center items-center h-14">
            <Slider
              value={value}
              min={0}
              max={4999}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
            />
          </span>
          <p className="font-semibold mb-4">Filters</p>
          {parentCategory?.map((category, key) => (
            <div key={key} className="mb-2 flex items-center justify-between">
              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between mb-1">
                  <div className="flex">
                    <input
                      className="h-[15px] w-[15px]"
                      onChange={(e) => {
                        handleFilter(e.target.checked, category._id, "parent");
                      }}
                      type="checkbox"
                    />
                    <p className="text-[13px] ml-3">{category.name}</p>
                  </div>
                  {category?.children?.length > 0 && (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        current == null
                          ? toggleCurrentParent(category?._id)
                          : toggleCurrentParent(null);
                      }}
                    >
                      {current == category?._id ? (
                        <BiMinus size={18} />
                      ) : (
                        <BiPlus size={18} color="#787878" />
                      )}
                    </div>
                  )}
                </div>
                {category?._id === current && category?.children?.length > 0 && (
                  <div className=" min-h-20 w-full">
                    {category?.children?.map((child, key) => (
                      <div key={key} className="flex">
                        <input
                          className="h-[13px] w-[13px] ml-4"
                          onChange={(e) => {
                            handleFilter(e.target.checked, child._id, "child");
                          }}
                          type="checkbox"
                        />
                        <p className="text-[12px] ml-2">{child.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* navbar filter  */}

        <div
          className="absolute block sm:hidden top-4 left-6 z-[60]"
          onClick={toggleHamburger}
        >
          {hamburger ? (
            <BiX color="darkred" size={22} />
          ) : (
            <BiMenu size={22} color="#1a1a1d" />
          )}
        </div>
        <Navbar show={hamburger} />
        <Header />
        <Header2 />

        <div className="flex min-h-screen sm:min-h-full  relative">
          <div className="hidden sm:flex flex-col items-end min-h-full min-w-[340px] max-w-[340px] pt-10 ">
            <p className="text-sm font-semibold tracking-wide">
              Showing 1-{shownProducts}{" "}
              <span className="text-gray font-normal ">
                out of {totalProducts} products
              </span>
            </p>
            <div className="pt-4 pl-4 pr-4 w-[250px] min-h-[250px] mt-6 border rounded border-[#1a1a1d36]">
              <p className="font-semibold">Prices</p>
              <div className="flex justify-between items-center">
                <p className="text-sm mt-3 font-dmsans">Range</p>
                <p className="text-xs font-dmsans mt-3">
                  Rs {value[0]} - Rs {value[1]}
                </p>
              </div>
              <span className="w-full flex justify-center items-center h-14">
                <Slider
                  value={value}
                  min={0}
                  max={4999}
                  onChange={rangeSelector}
                  valueLabelDisplay="auto"
                />
              </span>
              <p className="font-semibold mb-4">Filters</p>
              {parentCategory?.map((category, key) => (
                <div
                  key={key}
                  className="mb-2 flex items-center justify-between"
                >
                  <div className="flex flex-col w-full">
                    <div className="flex w-full justify-between mb-1">
                      <div className="flex">
                        <input
                          className="h-[15px] w-[15px]"
                          onChange={(e) => {
                            handleFilter(
                              e.target.checked,
                              category._id,
                              "parent"
                            );
                          }}
                          type="checkbox"
                        />
                        <p className="text-[13px] ml-3">{category.name}</p>
                      </div>
                      {category?.children?.length > 0 && (
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            current == null
                              ? toggleCurrentParent(category?._id)
                              : toggleCurrentParent(null);
                          }}
                        >
                          {current == category?._id ? (
                            <BiMinus size={18} />
                          ) : (
                            <BiPlus size={18} color="#787878" />
                          )}
                        </div>
                      )}
                    </div>
                    {category?._id === current &&
                      category?.children?.length > 0 && (
                        <div className=" min-h-20 w-full">
                          {category?.children?.map((child, key) => (
                            <div key={key} className="flex">
                              <input
                                className="h-[13px] w-[13px] ml-4"
                                onChange={(e) => {
                                  handleFilter(
                                    e.target.checked,
                                    child._id,
                                    "child"
                                  );
                                }}
                                type="checkbox"
                              />
                              <p className="text-[12px] ml-2">{child.name}</p>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:min-h-full w-full">
            <div className="mt-10 h-5 w-full flex justify-between sm:justify-end text-sm text-gray font-dmsans sm:pr-10 items-center pl-5 sm:pl-0">
              <div onClick={toggleShowFilter} className="block sm:hidden">
                <p className="flex items-center hover:text-darkred">
                  Filters
                  <BiChevronDown />
                </p>
              </div>
              <div className="scale-[0.85] sm:scale-100 w-full flex justify-end items-center">
                <span>Sort by:&nbsp;</span>
                <select
                  name=""
                  id=""
                  className="border rounded-full h-8 text-xs"
                  onChange={handleSort}
                >
                  <option value="latest" defaultChecked={true}>
                    Latest Arrival
                  </option>
                  <option value="pricelowtohigh">Price: Low to High</option>
                  <option value="pricehightolow">Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="sm:min-h-full pt-8 pl-0 pr-0 sm:pl-14 max-w-full grid grid-cols-2 sm:grid-cols-3 sm:gap-y-8 mb-10">
                {(pType === 0 || location?.state?.from === "latest") &&
                  allproducts.map((product, key) => (
                    <ProductCard key={key} product={product} />
                  ))}
                {pType === 1 &&
                  searchedProducts &&
                  searchedProducts.map((product, key) => (
                    <ProductCard key={key} product={product} />
                  ))}{" "}
                {pType === 2 &&
                  filteredProducts?.map((product, key) => (
                    <ProductCard key={key} product={product} />
                  ))}
              </div>
              {remainingProducts > 0 && (
                <div
                  className="scale-95 sm:scale-100 w-full h-20 flex justify-end items-start rounded-lg shadow"
                  onClick={handlePage}
                >
                  <button className="bg-darkred text-white rounded-3xl sm:w-[120px] px-2 mr-2 sm:mr-0 h-[32px] font-dmsans mb-20 flex justify-center items-center">
                    Load More <BiLoader className="ml-1" size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
      <div className="h-20"></div>
      <Footer />
    </>
  );
};

export default Listing;

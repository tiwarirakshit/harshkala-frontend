import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import './App.css';
import MyOrders from "./pages/MyOrders/MyOrders";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ContactUs from "./pages/ContactUs/ContactUs";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Listing from "./pages/Listing/Listing";
import Cart from "./pages/Cart/Cart";
import Billing from "./pages/Billing/Billing";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProducts, getTrendingProducts } from "./actions/Product/ProductAction";
import { getAllCategoriesParent, getInitialData } from "./actions/InitialData/InitialDataAction";
import FooterPages from "./pages/FooterPages/FooterPages";
import ListingForCategories from "./pages/Listing/ListingForCategories";
import Saved from "./pages/Saved/Saved";
import Wishlist from "./pages/WishList/WishList";
import { loginWithGoogle } from "./actions/User/UserAction";
import axios from './helpers/axios';
import { api } from './helpers/baseUrl'
import BuyNow from "./pages/Billing/BuyNow";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import GiftBox from "./pages/GiftBox/GiftBox";
import GiftBuyNow from "./pages/Billing/GiftBuy";
import PersonalizeBuy from "./pages/Billing/PersonalizeBuy";
import Blogs from "./pages/Blogs/Blogs";

function App() {

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `https://backend.hhkgifts.com/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true }).catch((err) => {
        console.log(err, 24);
      })
      sessionStorage.setItem('googlelogin',true);
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(sessionStorage.getItem('google_login')){
      getUser();
    }
  }, [sessionStorage.getItem('google_login')]);

  useEffect(() => {
    if (user){
      const userObj = {
        email: user.email,
        fullname: user.name,
        googleid: user.sub,
        avatar: user.picture
      }
      dispatch(loginWithGoogle(userObj));
    }
  }, [user])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllProducts(1,null));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTrendingProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategoriesParent());
  }, [dispatch]);



  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/profile"} element={<UserProfile />} />
        <Route exact path={"/contact-us"} element={<ContactUs />} />
        <Route exact path={"/change-pass"} element={<ChangePassword />} />
        <Route exact path={"/orders"} element={<MyOrders />} />
        <Route exact path={"/product/:slug"} element={<SingleProduct />} />
        <Route exact path={"/listing"} element={<Listing />} />
        <Route exact path={"/listing/:keyword"} element={<ListingForCategories />} />
        <Route exact path={"/cart"} element={<Cart />} />
        <Route exact path={"/billing"} element={<Billing />} />
        <Route exact path={"/footer-pages"} element={<FooterPages />} />
        <Route exact path={"/saved"} element={<Saved />} />
        <Route exact path={"/wishlist"} element={<Wishlist />} />
        <Route exact path={"/buy-now"} element={<BuyNow />} />
        <Route exact path={"/gift-buy-now"} element={<GiftBuyNow />} />
        <Route exact path={"/contact-us-page"} element={<ContactUsPage />} />
        <Route exact path={"/gift-box"} element={<GiftBox />} />
        <Route exact path={"/personalize-buy"} element={<PersonalizeBuy />} />
        <Route exact path={"/blog"} element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";

import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("userEmail", user.email);
      } else {
        localStorage.removeItem("userEmail");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
        <ScrollToTop>
        <Provider store={store}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/product/*" element={<PageNotFound />} />
            </Routes>
        </Provider>
        </ScrollToTop>
        <Toaster />
    </BrowserRouter>
  );
}

export default App;

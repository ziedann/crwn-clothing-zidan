import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.componet";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component.jsx";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
import { initializeFirebaseData } from "./utils/init-firebase-data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // Initialize Firebase data - remove this line after first run
    initializeFirebaseData();
  }, [dispatch]); // Added dispatch to dependencies

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

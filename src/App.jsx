import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

import "./App.css";
import AuthProvider from "./Context/AuthContext";
import ProductsDetails from "./pages/ProductsDetails";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
        </Routes>
      </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

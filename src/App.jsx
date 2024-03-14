import { Navigate, Route, Routes } from "react-router-dom"
//pages
import ProductsPage from "./pages/ProductsPage"
import NotFoundPage from "./pages/NotFoundPage"
import DetailsPage from "./pages/DetailsPage"
import CheckoutPage from "./pages/CheckoutPage"
//context
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartProvider"

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route index path="/" element={<Navigate to="/products"  replace/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/:id" element={<DetailsPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/*" element={<NotFoundPage/>} />
          </Routes>
      </ProductsProvider>
    </CartProvider>

  )
}

export default App

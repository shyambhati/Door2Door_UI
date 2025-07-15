import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";
import MainLayout from "../layouts/MainLayout";
import AddProduct from "../modules/products/AddProduct";
import ProductList from "../modules/products/ProductList";
import NotFound from "../modules/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
         <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

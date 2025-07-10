import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { useDispatch } from "react-redux";
// import { fetchCategoriesStartAsync } from "../../store/categories/categories.action";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();

  // Get categories from database
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]); // Added dispatch to dependencies

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

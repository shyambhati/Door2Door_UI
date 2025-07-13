import React, { useState, useMemo } from "react";
import productData from "./product-list.json";
import { useDebounce } from "../../hooks/useDebounce";
import { highlightText } from "../../utils/textUtils";

export const ProductTable = () => {


const [searchTerm, setSearchTerm] = useState("");
const debouncedSearch = useDebounce(searchTerm);
const [statusFilter, setStatusFilter] = useState("All");


const filteredData = useMemo(() => {
  let data = productData;
  if (debouncedSearch) {
    data = data.filter((row) =>
      Object.values(row).some((val) =>
        val.toString().toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    );
  }

  if (statusFilter !== "All") {
    data = data.filter((row) => row.status === statusFilter);
  }

  return data;
}, [debouncedSearch, statusFilter]);


const textStyle = ( text:any) =>{
  return highlightText(text, debouncedSearch, "bg-blue-100 text-blue-800")
}


  return (
    <div className="p-4 bg-white rounded shadow m-4">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by name, SKU, category..."
        className="border border-gray-300 rounded px-3 py-1 text-sm mb-4 w-full max-w-xs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />


       <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 text-sm"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

      {/* 📋 Table */}
      <table className="min-w-full text-sm border border-gray-200">
        <thead className="[&>tr>th]:text-left [&>tr>th]:text-gray-700 [&>tr>th]:text-sm [&>tr>th]:uppercase [&>tr>th]:px-4 [&>tr>th]:py-2 [&>tr>th:hover]:text-blue-500 bg-gray-50">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y table-body [&>tr>td]:text-left [&>tr>td]:text-sm [&>tr>td]:px-4 [&>tr>td]:py-2">
          {filteredData.map((product) => (
            <tr key={product.id} 
            className="transition-all duration-300  translate-y-2 animate-fade-in">
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                />
              </td>
              <td>{textStyle(product.name)}</td>

              <td>{textStyle(product.sku)}</td>
              <td>{textStyle(product.category)}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{textStyle(product.stock)}</td>
              <td>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded ${
                    product.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

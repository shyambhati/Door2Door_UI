import React, { useState, useMemo } from "react";
import productData from "./product-list.json";
import { useDebounce } from "../../hooks/useDebounce";
import { highlightText } from "../../utils/textUtils";

export const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");


  type SortableKeys = "name" | "sku" | "category" | "price" | "stock";
const [sortKey, setSortKey] = useState<SortableKeys | null>(null);

const handleSort = (key: SortableKeys) => {
  if (sortKey === key) {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  } else {
    setSortKey(key);
    setSortOrder("asc");
  }
};


  const textStyle = (text: any) => {
    return highlightText(text, debouncedSearch, "bg-blue-100 text-blue-800");
  };

  const filteredData = useMemo(() => {
    let data = [...productData];

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

    if (sortKey) {
        data.sort((a, b) => {
            const valA = a[sortKey];
            const valB = b[sortKey];

            if (typeof valA === "number" && typeof valB === "number") {
            return sortOrder === "asc" ? valA - valB : valB - valA;
            }

            return sortOrder === "asc"
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA));
        });
        }


    return data;
  }, [debouncedSearch, statusFilter, sortKey, sortOrder]);

  return (
    <div className="p-4 bg-white rounded shadow m-4">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>

      {/* 🔍 Search & Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name, SKU, category..."
          className="border border-gray-300 rounded px-3 py-1 text-sm max-w-xs w-full"
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
      </div>

      {/* 📋 Table */}
      <table className="min-w-full text-sm border border-gray-200">
        <thead className="[&>tr>th]:text-left [&>tr>th]:text-gray-700 [&>tr>th]:text-sm [&>tr>th]:uppercase [&>tr>th]:px-4 [&>tr>th]:py-2 [&>tr>th]:hover:text-blue-500 bg-gray-50">
          <tr>
            <th>Image</th>
            <th onClick={() => handleSort("name")} className="cursor-pointer select-none">
              Name {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("sku")} className="cursor-pointer select-none">
              SKU
            </th>
            <th onClick={() => handleSort("category")} className="cursor-pointer select-none">
              Category
            </th>
            <th onClick={() => handleSort("price")} className="cursor-pointer select-none">
              Price {sortKey === "price" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("stock")} className="cursor-pointer select-none">
              Stock {sortKey === "stock" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y table-body [&>tr>td]:text-left [&>tr>td]:text-sm [&>tr>td]:px-4 [&>tr>td]:py-2">
          {filteredData.map((product) => (
            <tr key={product.id} className="transition-all duration-300 translate-y-2 animate-fade-in">
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

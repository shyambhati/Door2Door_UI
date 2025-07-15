import { useState, useMemo } from "react";
import productData from "./product-list.json";
import { useDebounce } from "../../hooks/useDebounce";
import { highlightText } from "../../utils/textUtils";
import { Plus } from "lucide-react";

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
          return sortOrder === "asc" ? -1 : 1;
        }

        return sortOrder === "asc"
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }
    return data;
  }, [debouncedSearch, statusFilter, sortKey, sortOrder]);

  return (
    <>
      <div className="shadow-sm p-2 bg-white rounded my-2 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Today Order List</h2>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search by name, SKU, category..."
            className="border border-gray-300 rounded px-2 py-1.5 text-sm w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select className="border border-gray-300 rounded px-2 py-1.5 text-sm">
            <option value="All">Price filter</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1.5 text-sm"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button className="flex items-center gap-2 px-2 py-1.5 bg-[#613cea] text-white rounded-md shadow hover:bg-[#502fbe] transition">
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className=" bg-white rounded shadow p-2">
        {/* 📋 Table */}
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="[&>tr>th]:text-left [&>tr>th]:text-gray-700 [&>tr>th]:text-sm [&>tr>th]:uppercase [&>tr>th]:px-4 [&>tr>th]:py-2 [&>tr>th]:hover:text-blue-500 bg-gray-50">
            <tr>
              <th>Image</th>
              <th
                onClick={() => handleSort("name")}
                className="cursor-pointer select-none"
              >
                Name {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                onClick={() => handleSort("sku")}
                className="cursor-pointer select-none"
              >
                SKU
              </th>
              <th
                onClick={() => handleSort("category")}
                className="cursor-pointer select-none"
              >
                Category
              </th>
              <th
                onClick={() => handleSort("price")}
                className="cursor-pointer select-none"
              >
                Price {sortKey === "price" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                onClick={() => handleSort("stock")}
                className="cursor-pointer select-none"
              >
                Stock {sortKey === "stock" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y table-body [&>tr>td]:text-left [&>tr>td]:text-sm [&>tr>td]:px-4 [&>tr>td]:py-2">
            {filteredData.map((product) => (
              <tr
                key={product.id}
                className="transition-all duration-300 translate-y-2 animate-fade-in"
              >
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
                <td className="space-x-2 [&>button]:hover:underline">
                  <button className="text-blue-500 ">
                    Edit
                  </button>
                  <button className="text-red-500 ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

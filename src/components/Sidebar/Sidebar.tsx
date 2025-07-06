import React from 'react'

export default function Sidebar() {
  return (
     <aside className="w-64 bg-white border-r h-full p-4">
      <nav className="space-y-4">
        <p className="text-xs text-gray-400 font-semibold mb-0 tracking-wide">MAIN</p>
        <a href="#" className="block text-gray-700 hover:text-white-600 flex items-center bg-blue-600 py-2 px-2 ring-1 rounded-md text-white justify-between">
            <span className="flex  gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-grid-icon lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                Dashboard
            </span>
            <svg width="9.33" height="5.33" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 0.75L6 5.25L0.75 0.75" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>

        <p className="text-xs text-gray-400 font-semibold mb-0 tracking-wide">Product</p>
        <a href="#" className="block text-gray-700 hover:text-indigo-600">Category </a>
        <div>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">Category</a>
            <div className="ml-4 mt-2 space-y-1">
              <a href="#" className="block text-sm text-gray-600 hover:text-indigo-600">Add Category</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-indigo-600">Category List</a>
            </div>
          </div> 
        <a href="#" className="block text-gray-700 hover:text-indigo-600">Settings</a>
      </nav>
    </aside>
  )
}

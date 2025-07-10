import { Settings, ChevronRight } from "lucide-react";
import { FaHouse } from "react-icons/fa6";

export const Sidebar2 = () => {
  return (
    <div className="h-screen w-64 bg-white border-r p-2">
      <div className="menu-group">
        <h5 className="py-2 px-3 text-xs font-semibold text-gray-400">
          Main menu
        </h5>

        <ul className="space-y-1">
          {/* Dashboard Link */}
          <li className="px-3 py-2 flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
            <a href="#" className="flex items-center gap-2 w-full">
              <FaHouse size={16} />
              Dashboard
            </a>
          </li>

          {/* Settings Menu with Submenu */}
          <li className="px-3 py-2 text-sm text-gray-600">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer select-none transition-all duration-300 list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-2">
                  <Settings size={16} />
                  Settings
                </div>
                <ChevronRight
                  size={14}
                  className="transition-transform duration-300 group-open:rotate-90"
                />
              </summary>

              <ul className="ml-5 mt-2 space-y-1 transition-all duration-300 ease-in-out opacity-0 max-h-0 overflow-hidden group-open:opacity-100 group-open:max-h-40">
                <li className="flex items-center justify-between cursor-pointer py-1 text-gray-500 hover:text-gray-800 select-none">
                  <span className="flex items-center gap-2">
                    <Settings size={14} />
                    Sub Menu 1
                  </span>
                  <ChevronRight size={12} />
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

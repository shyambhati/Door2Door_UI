import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import menuData from "../../constants/menu2.json";
import { ChevronRight } from "lucide-react";

export default function SidebarAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getIcon = (name: string, size = 16) => {
    const formatted =
      name.charAt(0).toUpperCase() +
      name.slice(1).replace(/-([a-z])/g, (_, g) => g.toUpperCase());
    const Icon = (LucideIcons as any)[formatted];
    return Icon ? <Icon size={size} /> : <span className="w-4 h-4 inline-block" />;
  };

  return (
    <div className="h-screen w-64 bg-white px-3 py-2 overflow-y-auto">
      {menuData.groups.map((data, groupIndex) => (
        <div key={groupIndex} className="menu-group mb-6">
          <h5 className="px-1 text-xs font-semibold text-gray-400 mb-2">
            {data.group}
          </h5>
          <ul className="space-y-1">
            {data.items.map((item, itemIndex) => {
              const isOpen = openIndex === itemIndex;
              return (
                <li key={itemIndex}>
                  <div
                    className={`flex items-center justify-between cursor-pointer px-3 py-2 rounded hover:bg-gray-100 select-none
                      ${isOpen ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700"}`}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : itemIndex)
                    }
                  >
                    <div className="flex items-center gap-2">
                      {getIcon(item.icon)} {item.label}
                    </div>
                    {item.children && (
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {isOpen && item.children && (
                    <ul className="ml-6 mt-1 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a
                            href={child.path}
                            className="flex items-center gap-2 text-sm py-1 pl-2 rounded text-gray-600 hover:text-blue-600"
                          >
                            {getIcon(child.icon, 14)} {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
